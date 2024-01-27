'use client'
import { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function AboutContent() {
  // const [isVietnamese, setIsVietnamese] = useState<boolean>(true)
  // const handleLanguageChange = (e) => {
  //   const selectedLanguage = e.target.value
  //   setIsVietnamese(selectedLanguage === 'vn')
  // }
  return (
    <div>
      {/*
      <div className="flex items-center justify-end">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
          id="language"
          onChange={handleLanguageChange}
          defaultValue={'vn'}         >
          <option selected value="ko">
            🇰🇷&nbsp;한국어
          </option>
          <option value="en">🇺🇸&nbsp;English</option>
        </select>
      </div>
*/}
      <div className="p-4">
        {/*isVietnamese ? <KoreanContent /> : <EnglishContent />*/}
        <EnglishContent />
      </div>
      {/* <div className="flex flex-col flex-1">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          여기는 저의 &nbsp;
          <RoughNotation type="circle" show color="#1d4ed8">
            개인 블로그
          </RoughNotation>
          &nbsp;입니다.
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          저는 &nbsp;
          <RoughNotation type="underline" show color="#1d4ed8">
            2년자 Web Developer
          </RoughNotation>
          &nbsp;입니다.
        </p>
      </div> */}
    </div>
  )
}

const EnglishContent = () => {
  return (
    <div>
      Hello, I'm Tran Quang Ha. I'm currently as an intern, specializing in Back-end Development.
      <br />
      I use Java language and related technologies such as Spring Boot and Hibernate to develop server-side applications, database mainly PostgreSQL and MySQL. Additionally, I develop front-end applications using ReactJS.
    </div>
  )
}
