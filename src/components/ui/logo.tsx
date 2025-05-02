import { Users } from 'lucide-react'
import { CustomLink } from './link'
import { H1 } from '@components/ui/typography'

export function Logo() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <CustomLink href="/" action={handleClick}>
      <div className="flex cursor-pointer items-center gap-1">
        <div className="bg-primary flex items-center justify-center rounded-full p-1">
          <Users className="text-white" />
        </div>
        <H1 color="primary">Local</H1>
        <H1>Friend</H1>
      </div>
    </CustomLink>
  )
}
