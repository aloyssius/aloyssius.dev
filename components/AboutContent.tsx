'use client'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function AboutContent() {
  const [isVietnamese, setIsVietnamese] = useState<boolean>(true)
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setIsVietnamese(selectedLanguage === 'vn')
  }
  return (
    <div>
      {
        <div className="flex items-center justify-end">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 pr-8 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
            id="language"
            onChange={handleLanguageChange}
            defaultValue={'vn'}
          >
            <option selected value="vn">
              🇻🇳&nbsp;Vietnamese
            </option>
            <option value="en">🇺🇸&nbsp;English</option>
          </select>
        </div>
      }
      <div className="p-4">{isVietnamese ? <VietnameseContent /> : <EnglishContent />}</div>
    </div>
  )
}

const EnglishContent = () => {
  return (
    <div>
      <li>👋 Hi, I’m Tran Quang Ha</li>
      <li>
        👀 I'm a senior studying Software Development and hava a passion for creativity and
        discovery in the field of information technology
      </li>
      <li>
        🌱 I have accumulated considerable knowledge during my studies, and I am now looking for
        opportunities toapply these skills in practice
      </li>
      <li>
        💞️ I'm confident in my ability to work independently and in groups. I also always want to
        learn and improve my skills, and I am ready to face new challenges in the field of software
        development
      </li>
      <li>
        📫 How to reach me <Link href={siteMetadata.email}>tranha.dev@gmail.com</Link>
      </li>
      <br />
      🛠 Tech Stack
      <li>💻 Java | JavaScript | HTML5 | CSS3 | SQL</li>
      <li>🖥 Spring Boot | Hibernate | ReactJS | Redux | AngularJS | JUnit</li>
      <li>🌐 Bootstrap 5 | TailwindCSS | Material UI | Ant Design</li>
      <li>🛢 MySQL | PostgreSQL | MongoDB | MS SQL</li>
      <li>📦 Maven | Git | Docker | IntelliJ IDEA | Visual Studio Code</li>
    </div>
  )
}

const VietnameseContent = () => {
  return (
    <div>
      <li>👋 Xin chào, tôi là Trần Quang Hà</li>
      <li>
        👀 Tôi đang là sinh viên năm cuối đang theo học chuyên ngành Phát triển phần mềm, tôi có sở
        thích khám phá và đam mê sáng tạo trong lĩnh vực công nghệ thông tin
      </li>
      <li>
        🌱 Tôi đã tích lũy được những kiến thức đáng kể trong quá trình học và hiện tôi đang tìm
        kiếm cơ hội để áp dụng những kỹ năng này vào thực tế
      </li>
      <li>
        💞️ Tôi tự tin vào khả năng làm việc độc lập và theo nhóm của mình. Tôi cũng luôn muốn học
        hỏi, nâng cao kỹ năng của mình và sẵn sàng đối mặt với những thử thách mới trong lĩnh vực
        phát triển phần mềm
      </li>
      <li>
        📫 Làm thế nào để liên lạc với tôi&nbsp;
        <Link href={siteMetadata.email}>tranha.dev@gmail.com</Link>
      </li>
      <br />
      🛠 Công nghệ sử dụng
      <li>💻 Java | JavaScript | HTML5 | CSS3 | SQL</li>
      <li>🖥 Spring Boot | Hibernate | ReactJS | Redux | NextJS | AngularJS | JUnit</li>
      <li>🌐 Bootstrap 5 | TailwindCSS | Material UI | Ant Design</li>
      <li>🛢 MySQL | PostgreSQL | MongoDB | MS SQL</li>
      <li>📦 Maven | Git | Docker | IntelliJ IDEA</li>
    </div>
  )
}
