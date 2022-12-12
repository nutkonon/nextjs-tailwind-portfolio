import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div className="flex flex-col">
            <Link href="/">
              <div>
                <h1 className="text-xl font-semibold dark:text-gray-100">{siteMetadata.author}</h1>
                <p className="text-base font-light text-gray-500 dark:text-gray-300">
                  {siteMetadata.headerTitle}
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
