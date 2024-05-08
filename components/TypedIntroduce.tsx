'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 10,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedIntroduce() {
  const typedRef = useRef(null)

  useEffect(() => {
    // Typed.js 옵션 설정
    const options = {
      strings: [
        'I love Web Application Development 💻🌐',
        'My favorite technologies are Java Spring Boot/ReactJS ✅',
        'This my blog shares things related to specialized knowledge 📝',
      ],
      typeSpeed: 33,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    }

    // Typed.js 인스턴스 생성
    const typed = new Typed(typedRef.current, options)

    // 컴포넌트가 언마운트될 때 Typed.js 인스턴스 정리
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <span
      className="text-xl leading-7 text-gray-600 dark:text-gray-300" ref={typedRef}>
      ...
    </span>
  )
}
