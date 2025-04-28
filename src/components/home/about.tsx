import { H2, Body } from '@components/ui/typography'
import { AboutCard } from './about-card'
import { MapPin, Users, Star } from 'lucide-react'

const CARDS_INFO = [
  {
    title: 'Experiencias Auténticas',
    description:
      'Descubre lugares fuera de las rutas turísticas y vive la ciudad como un local. Nuestros guías te mostrarán sus lugares favoritos y te compartirán historias que no encontrarás en las guías.',
    icon: <MapPin className="text-primary h-8 w-8" />,
  },
  {
    title: 'Conexiones reales',
    description:
      'Conoce a personas locales apasionadas por su ciudad y cultura. Crea conexiones significativas que pueden convertirse en amistades duraderas y enriquecen tu experiencia de viaje.',
    icon: <Users className="text-primary h-8 w-8" />,
  },
  {
    title: 'Personalización total',
    description:
      'Cada experiencia se adapta a tus intereses. Ya sea gastronomía, historia, arte o vida nocturna, encontrarás guías locales que comparten tus pasiones y pueden crear experiencias a tu medida.',
    icon: <Star className="text-primary h-8 w-8" />,
  },
]

export function About() {
  return (
    <div className="flex flex-col items-center gap-12 py-12 text-center md:w-4/6">
      <H2>¿Qué es local friend?</H2>
      <Body className="px-8 text-center" color="muted">
        LocalFriend es una plataforma que conecta viajeros con locales
        apasionados que quieren compartir lo mejor de su ciudad. Olvídate de los
        tours masificados y descubre lugares auténticos con alguien que conoce
        cada rincón.
      </Body>
      <div className="mx-8 flex flex-col gap-4 md:mx-0 md:flex-row">
        {CARDS_INFO.map((data) => {
          return (
            <AboutCard
              title={data.title}
              icon={data.icon}
              description={data.description}
              key={`${data.title}-card`}
            />
          )
        })}
      </div>
    </div>
  )
}
