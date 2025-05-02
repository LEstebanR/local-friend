import { H3, Body } from '@components/ui/typography'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const TRAVELERS_DATA = [
  'for-travelers-item-1',
  'for-travelers-item-2',
  'for-travelers-item-3',
  'for-travelers-item-4',
  'for-travelers-item-5',
  'for-travelers-item-6',
]

const LOCALS_DATA = [
  'for-locals-item-1',
  'for-locals-item-2',
  'for-locals-item-3',
  'for-locals-item-4',
  'for-locals-item-5',
  'for-locals-item-6',
]

export function ForWho() {
  const { t } = useTranslation()
  return (
    <div className="my-8 grid w-full grid-cols-1 gap-8 px-4 md:mt-12 md:w-4/6 md:grid-cols-2">
      <div className="flex w-full flex-col gap-4">
        <H3>{t('home.for-travelers')}</H3>
        <div className="flex flex-col gap-2">
          {TRAVELERS_DATA.map((data) => {
            return (
              <div className="flex items-start gap-4">
                <div className="bg-primary-bg mt-1 flex h-6 w-6 items-center justify-center rounded-full p-1">
                  <Check className="text-primary font-bold" />
                </div>
                <Body>{t(`home.${data}`)}</Body>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full">
        <H3>{t('home.for-locals')}</H3>
        <div className="flex flex-col gap-2">
          {LOCALS_DATA.map((data) => {
            return (
              <div className="flex items-start gap-4">
                <div className="bg-primary-bg mt-1 flex h-6 w-6 items-center justify-center rounded-full p-1">
                  <Check className="text-primary font-bold" />
                </div>
                <Body>{t(`home.${data}`)}</Body>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
