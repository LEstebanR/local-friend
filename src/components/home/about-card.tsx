import { ReactNode } from 'react'
import { Body, H3 } from '@components/ui/typography'

type AboutCardType = {
  title: string
  icon?: ReactNode
  description: string
}

export function AboutCard({ title, icon, description }: AboutCardType) {
  return (
    <div className="border-muted shadow-primary/40 hover:shadow-primary/80 flex flex-col gap-4 rounded-md border p-4 text-left shadow-lg">
      <div className="bg-primary-bg flex h-12 w-12 items-center justify-center rounded-full p-1">
        {icon}
      </div>
      <H3>{title}</H3>
      <Body color="muted">{description}</Body>
    </div>
  )
}
