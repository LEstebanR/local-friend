import { Users } from 'lucide-react'
import { CustomLink } from './link'
import { H1} from "@components/ui/typography"

export function Logo() {
  return (
    <CustomLink href="/">
      <div className="flex cursor-pointer items-center gap-1">
        <div className="rounded-full flex items-center justify-center p-1 bg-primary">
            <Users className="text-white"/>
        </div>
        <H1 color="primary">Local</H1>
        <H1>Friend</H1>
      </div>
    </CustomLink>
  )
}
