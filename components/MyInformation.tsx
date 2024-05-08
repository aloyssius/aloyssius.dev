import Link from 'next/link'

export default function MyInformation() {
  return (
    <div>

      <div className="mt-5">
        <Link
          href="/blog"
          className="font-display max-w-sm text-xl font-semibold leading-tight p-4"
        >
          <span className="link link-underline link-underline-black text-gray-500 dark:text-gray-300 p-1">
            <span className="text-primary-500">✓&nbsp;</span> Read My Writing 📝
          </span>
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="/about"
          className="font-display max-w-sm text-xl font-semibold leading-tight p-4"
        >
          <span className="link link-underline link-underline-black text-gray-500 dark:text-gray-300 p-1">
            <span className="text-primary-500">✓&nbsp;</span> More About Me 🧐
          </span>
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="/resume"
          className="font-display max-w-sm text-xl font-semibold leading-tight p-4"
        >
          <span className="link link-underline link-underline-black text-gray-500 dark:text-gray-300 p-1">
            <span className="text-primary-500">✓&nbsp;</span> Is My Resume 👤
          </span>
        </Link>
      </div>
    </div>
  )
}
