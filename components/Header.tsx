'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useTheme } from 'next-themes'
import HeaderMainIcon from './HeaderMainIcon'

const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <header className="flex items-center justify-between py-7">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between group">
            <HeaderMainIcon />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6 mt-2">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 duration-100"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
        {/* <LanguageSwitcher /> */}
        {/* <select
          onChange={(e) => {
            const value = e.target.value
            const correctPathname = pathname.replace(`/${lang}`, `/${value}`)
            router.push(correctPathname)
          }}
          defaultValue={lang}
        >
          {i18n.locales
            .filter((x) => x !== 'default')
            .map((res) => (
              <option key={res} value={res}>
                {res}
              </option>
            ))}
        </select> */}
      </div>
    </header>
  )
}

export default Header
