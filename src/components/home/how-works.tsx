import { H2, Body, H3 } from '@components/ui/typography'
import { useTranslation } from 'react-i18next'
const STEPS_DATA = [
  {
    title: 'how-works-question-1-title',
    description: 'how-works-question-1-description',
  },
  {
    title: 'how-works-question-2-title',
    description: 'how-works-question-2-description',
  },
  {
    title: 'how-works-question-3-title',
    description: 'how-works-question-3-description',
  },
  {
    title: 'how-works-question-4-title',
    description: 'how-works-question-4-description',
  },
]

function StepData({
  title,
  description,
  step,
}: {
  title: string
  step: number
  description: string
}) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="bg-primary-bg flex h-12 w-12 items-center justify-center rounded-full">
        <p className="text-primary text-2xl">{step}</p>
      </div>
      <H3>{t(`home.${title}`)}</H3>
      <Body className="text-muted">{t(`home.${description}`)}</Body>
    </div>
  )
}

export function HowWorks() {
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col items-center bg-slate-50 px-4 py-8 text-center md:py-12">
      <div className="flex flex-col gap-4 md:w-4/6 md:gap-12">
        <H2>{t('home.how-it-works')}</H2>
        <Body className="text-muted">{t('home.how-it-works-description')}</Body>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {STEPS_DATA.map((step, index) => {
            return (
              <StepData
                title={step.title}
                description={step.description}
                step={index + 1}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
