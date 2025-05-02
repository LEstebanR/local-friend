import { Chip } from '@components/ui/chip'
import { MessageSquare, Calendar, Star, Globe } from 'lucide-react'
import { Body, H2, H3 } from '@components/ui/typography'
import { ReactNode } from 'react'
import { WaitListForm } from '@components/forms/wait-list-form'
import { useTranslation } from 'react-i18next'
const ITEMS_INFO = [
  {
    icon: <MessageSquare className="text-primary h-5 w-5" />,
    title: 'join-list-item-1-title',
    description: 'join-list-item-1-description',
  },
  {
    icon: <Star className="text-primary h-5 w-5" />,
    title: 'join-list-item-2-title',
    description: 'join-list-item-2-description',
  },
  {
    icon: <Globe className="text-primary h-5 w-5" />,
    title: 'join-list-item-3-title',
    description: 'join-list-item-3-description',
  },
]

function ItemData({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  const { t } = useTranslation()
  return (
    <div className="flex gap-2">
      <div className="bg-primary-bg flex h-12 w-12 items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="flex flex-col">
        <H3>{t(`home.${title}`)}</H3>
        <Body className="text-muted">{t(`home.${description}`)}</Body>
      </div>
    </div>
  )
}

export function JoinList() {
  const { t } = useTranslation()
  return (
    <section
      id="waitlist"
      className="flex w-full flex-col items-center gap-8 py-16"
    >
      <div className="bg-primary-bg-light flex w-full justify-center">
        <div className="my-8 grid w-full grid-cols-1 gap-8 px-4 md:mt-12 md:w-4/6 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Chip color="primary-bg" className="text-primary">
              <div className="items center flex gap-2 font-bold">
                <Calendar className="text-primary" />
                <Body>{t('home.launch-date')}</Body>
              </div>
            </Chip>
            <H2>{t('home.join-list')}</H2>
            <Body color="muted">{t('home.join-list-description')}</Body>
            <div className="flex flex-col gap-2">
              {ITEMS_INFO.map((data) => (
                <ItemData
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
          <WaitListForm />
        </div>
      </div>
    </section>
  )
}
