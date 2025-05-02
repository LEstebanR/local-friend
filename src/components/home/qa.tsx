import { H2 } from '@components/ui/typography'
import { useTranslation } from 'react-i18next'

const QUESTIONS = [
  {
    question: 'question-1',
    answer: 'answer-1',
  },
  {
    question: 'question-2',
    answer: 'answer-2',
  },
  {
    question: 'question-3',
    answer: 'answer-3',
  },
  {
    question: 'question-4',
    answer: 'answer-4',
  },
  {
    question: 'question-5',
    answer: 'answer-5',
  },
]

export function Qa() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-8">
      <H2 className="text-center">{t('home.faq')}</H2>
      <div className="mt-6 flex flex-col gap-6 md:w-4/6">
        {QUESTIONS.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              {t(`home.${item.question}`)}
            </h3>
            <p className="text-gray-600">{t(`home.${item.answer}`)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
