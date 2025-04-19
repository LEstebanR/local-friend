import { ReactNode } from 'react'
import { Body, H3 } from '@components/ui/typography'

type AboutCartType = {
  title: string
  icon?: ReactNode
  description: string
}

export function AboutCard({ title, icon, description }) {
  return (
    <div className="border-muted flex flex-col gap-4 rounded-md border p-4">
      <div className="bg-primary-bg flex h-12 w-12 items-center justify-center rounded-full p-1">
        {icon}
      </div>
      <H3>{title}</H3>
      <Body color="muted">{description}</Body>
    </div>
  )
}
