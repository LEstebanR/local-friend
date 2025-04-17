import { Github, Heart } from 'lucide-react'
import { Logo } from '@components/ui/logo'
import { CustomLink } from '@components/ui/link'

const LINKS = [
  {
    label: 'Lista de espera',
    href: '/#waitlist',
  },
]

export const Footer = () => {
  return (
    <footer className="my-8 flex w-full flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <div className="flex gap-4">
          {LINKS.map((link) => {
            return (
              <CustomLink href={link.href} type="text">
                {link.label}
              </CustomLink>
            )
          })}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2">
        <CustomLink
          href="https://github.com/LEstebanR/lesteban"
          aria-label="Github project"
        >
          <Github className="h-6 w-6" />
        </CustomLink>
        <div className="bg-primary mx-2 h-7 w-[0.5px] rotate-[20deg]"></div>
        <div className="flex items-center gap-x-1 text-xs sm:text-base">
          <span className="text-slate-500">Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span className="text-slate-500">by</span>
          <CustomLink
            href="https://github.com/LEstebanR/lesteban"
            blank
            type="text"
          >
            LEstebanR
          </CustomLink>
        </div>
      </div>
    </footer>
  )
}
