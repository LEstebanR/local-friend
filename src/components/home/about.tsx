import { H2, Body } from '@components/ui/typography'
import { AboutCard } from './about-card'
import { MapPin, Users, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
const CARDS_INFO = [
  {
    title: 'authentic-experiences',
    description:
      'Descubre lugares fuera de las rutas turísticas y vive la ciudad como un local. Nuestros guías te mostrarán sus lugares favoritos y te compartirán historias que no encontrarás en las guías.',
    icon: <MapPin className="text-primary h-8 w-8" />,
  },
  {
    title: 'real-connections',
    description:
      'Conoce a personas locales apasionadas por su ciudad y cultura. Crea conexiones significativas que pueden convertirse en amistades duraderas y enriquecen tu experiencia de viaje.',
    icon: <Users className="text-primary h-8 w-8" />,
  },
  {
    title: 'total-customization',
    description:
      'Cada experiencia se adapta a tus intereses. Ya sea gastronomía, historia, arte o vida nocturna, encontrarás guías locales que comparten tus pasiones y pueden crear experiencias a tu medida.',
    icon: <Star className="text-primary h-8 w-8" />,
  },
]

export function About() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-12 py-12 text-center md:w-4/6 md:px-0">
      <H2>{t('home.what-is-local-friend')}</H2>
      <Body className="px-8 text-center" color="muted">
        {t('home.localfriend-is')}
      </Body>
      <div className="mx-8 flex flex-col gap-4 md:mx-0 md:flex-row">
        {CARDS_INFO.map((data) => {
          return (
            <AboutCard
              title={t(`home.${data.title}`)}
              icon={data.icon}
              description={t(`home.${data.title}-description`)}
              key={`${data.title}-card`}
            />
          )
        })}
      </div>
    </div>
  )
}
