const fs = require('fs');
const path = require('path');

function convertMarkdownFiles() {
  const sourceFolderPath = 'local/obsidian';
  const targetFolderPath = 'data/blog';
  const tagDataPath = 'app/tag-data.json';

  const files = fs.readdirSync(sourceFolderPath, { withFileTypes: true })
    .filter(file => file.isFile() && path.extname(file.name) === '.md')
    .map(file => file.name);

  const tagDataContent = fs.readFileSync(tagDataPath, 'utf8');
  let tagData = JSON.parse(tagDataContent);

  files.forEach(file => {
    const sourceFilePath = path.join(sourceFolderPath, file);
    const targetFilePath = path.join(targetFolderPath, file.replace('.md', '.mdx'));

    const content = fs.readFileSync(sourceFilePath, 'utf8');
    const modifiedContent = content.replace(/\]\(\s*\/?public/g, "](");

    var regex = /tags:\n([\s\S]*?)\n\w+:?/;
    var match = content.match(regex);
    var tagsContent = match[1];

    var tagsArray = tagsContent.split("\n").map(tag => tag.trim().replace(/^- /, ''));

    let tagCounts = { ...tagData };
    tagsArray.forEach(function(tag) {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });

    for (let tag in tagCounts) {
      if (!tagData[tag]) {
        tagData[tag] = tagCounts[tag];
      }
    }

    fs.writeFileSync(tagDataPath, JSON.stringify(tagData));
    fs.writeFileSync(targetFilePath, modifiedContent);

    console.log(`Complete file ${file}`);
  });

  console.log('Finish');
}

convertMarkdownFiles();
