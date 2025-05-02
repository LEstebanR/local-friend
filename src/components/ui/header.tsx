import { CustomLink } from '@components/ui/link'
import { Logo } from '@components/ui/logo'
import { DropDown } from '@components/ui/dropdown'
import { Menu } from 'lucide-react'
import { LanguageSwitcher } from '@components/ui/language-switcher'
import { useTranslation } from 'react-i18next'

const HEADER_LINKS = [
  {
    label: 'waitlist',
    href: '/#waitlist',
  },
]

type HeaderLink = {
  label: string
  href: string
}

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-18 items-center justify-center border-b-2 border-gray-100 bg-white backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-4 xl:w-5/6 xl:px-0">
        <Logo />
        <div className="hidden items-center gap-4 md:flex">
          {HEADER_LINKS.map((link: HeaderLink) => (
            <CustomLink href={link.href} key={link.label} type="text" isMenu>
              {t(link.label)}
            </CustomLink>
          ))}
          <LanguageSwitcher />
        </div>
        <DropDown
          className="md:hidden"
          options={HEADER_LINKS}
          type="icon"
          icon={<Menu />}
          action={() => {}}
        />
      </div>
    </header>
  )
}

export default Header
