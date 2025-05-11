import { Logo } from '@components/ui/logo'
import { DropDown } from '@components/ui/dropdown'
import { Menu } from 'lucide-react'
import { LanguageSwitcher } from '@components/ui/language-switcher'
import { useTranslation } from 'react-i18next'
import { Button } from '@components/ui/button'

type HeaderLink = {
  label: string
  href: string
  type: 'link' | 'icon' | 'submit'
  color: 'primary' | 'secondary' | 'black'
}

const HEADER_LINKS: HeaderLink[] = [
  {
    label: 'sign-up',
    href: '/sign-up',
    type: 'link',
    color: 'primary',
  },
]

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-18 items-center justify-center border-b-2 border-gray-100 bg-white backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-4 md:w-4/6 xl:px-0">
        <Logo />
        <div className="hidden items-center gap-4 md:flex">
          {HEADER_LINKS.map((link: HeaderLink) => (
            <Button
              key={link.label}
              href={link.href}
              type={link.type}
              color={link.color}
            >
              {t(link.label)}
            </Button>
          ))}
          <LanguageSwitcher />
        </div>
        <div className="flex items-center justify-center gap-1 md:hidden">
          <LanguageSwitcher />
          <DropDown
            options={HEADER_LINKS}
            type="icon"
            icon={<Menu />}
            action={() => {}}
          />
        </div>
      </div>
    </header>
  )
}
export default Header
