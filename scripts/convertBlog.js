const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function convertBlog() {
  const sourceFilesPath = '../data/blog/obsidian' // contains your original files .md
  const targetFilesPath = '../data/blog' // contains files .mdx after convert

  const tagDataFilePath = '../app/tag-data.json' // contains tag config
  const tagDataFileContent = fs.readFileSync(tagDataFilePath, 'utf8') // read file tag-data

  let tagData = {}
  if (!tagDataFileContent.trim()) {
    // Create empty object json if content file empty
    fs.writeFileSync(tagDataFilePath, JSON.stringify(tagData), 'utf8')
  } else {
    tagData = JSON.parse(tagDataFileContent) // convert content file to json
  }

  const sourceFiles = fs
    .readdirSync(sourceFilesPath, { withFileTypes: true }) // read directory source
    .filter((file) => file.isFile() && path.extname(file.name) === '.md') // get files .md
    .map((file) => {
      const filePath = path.join(sourceFilesPath, file.name) // create source file path
      const content = fs.readFileSync(filePath, 'utf8') // read content in file
      const { modified, draft, tags } = matter(content).data

      return {
        name: file.name,
        content: content,
        modified: modified,
        tags: tags,
        draft: draft,
      }
    })

  let targetFiles = getTargetFiles()

  function getTargetFiles() {
    return fs
      .readdirSync(targetFilesPath, { withFileTypes: true }) // Read directory target
      .filter((file) => file.isFile() && path.extname(file.name) === '.mdx') // Get files .mdx
      .map((file) => {
        const filePath = path.join(targetFilesPath, file.name) // create target file path
        const content = fs.readFileSync(filePath, 'utf8') // read content in file
        const { tags } = matter(content).data

        return {
          name: file.name,
          tags: tags,
        }
      })
  }

  function modifiedContent(file) {
    let contentFile = file?.content
    let modified = ''

    // replace thumbnail path
    modified = contentFile?.replace(/"\[\[public|]]"/g, '')

    // replace all images path
    modified = modified?.replace(/\]\(\s*\/?public/g, '](')

    return modified
  }

  function writeFile(file, modifiedContent, isUpdated) {
    // create target file path
    const targetFilePath = path.join(targetFilesPath, file?.name?.replace('.md', '.mdx'))

    // write target file
    fs.writeFileSync(targetFilePath, modifiedContent, 'utf8')

    // update file tag-data
    fs.writeFileSync(tagDataFilePath, JSON.stringify(tagData))

    if (!isUpdated) {
      // update list targetFiles
      targetFiles.push({
        name: file.name,
        tags: file.tags,
      })
    }
    console.log(`Complete convert file ${file.name} ${isUpdated ? '(update)' : '(create)'}`)
  }

  function addTagData(tags) {
    tags?.forEach((tag) => {
      if (tagData[tag]) {
        tagData[tag]++
      }
      else {
        tagData[tag] = 1
      }
    })
  }

  function removeTagData(tags) {
    tags?.forEach((tag) => {
      if (tagData[tag]) {
        if (tagData[tag] === 1) {
          delete tagData[tag]
        }
        else {
          tagData[tag]--
        }
      }
    })
  }

  sourceFiles.forEach((file) => {
    // if blog not exists then create file
    if (!checkBlogNameExists(file.name) && !file.draft) {
      // update tagData
      addTagData(file?.tags)

      writeFile(file, modifiedContent(file))
    }

    // if blog exists and is modified then update file
    if (checkBlogNameExists(file.name) && file.modified) {
      const sourceTags = file?.tags
      const targetTags = targetFiles.find(
        (targetFile) => nameWithoutExtension(targetFile.name) === nameWithoutExtension(file.name)
      )?.tags

      // filter tags need add
      const filteredSourceTags = sourceTags?.filter((tag) => !targetTags?.includes(tag))

      // update tagData
      addTagData(filteredSourceTags)

      // filter tags need remove
      const filteredTargetTags = targetTags?.filter((tag) => !sourceTags?.includes(tag))

      // update tagData
      removeTagData(filteredTargetTags)

      writeFile(file, modifiedContent(file), true)
    }

  })
  function checkBlogNameExists(sourceFileName) {
    return targetFiles.some(
      (targetFile) => nameWithoutExtension(targetFile.name) === nameWithoutExtension(sourceFileName)
    )
  }
  function nameWithoutExtension(fileName) {
    return fileName?.substring(0, fileName.lastIndexOf('.'))
  }
}

convertBlog()
