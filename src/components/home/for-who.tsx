import { H3, Body } from '@components/ui/typography'
import { Check } from 'lucide-react'

const TRAVELERS_DATA = [
  'Descubre lugares auténticos que solo los locales conocen.',
  'Experiencias personalizadas según tus intereses y preferencias.',
  'Conoce la cultura local de primera mano y crea conexiones significativas.',
  'Flexibilidad para elegir experiencias privadas o en pequeños grupos.',
  'Seguridad y tranquilidad con guías verificados y sistema de reseñas.',
]

const LOCALS_DATA = [
  'Comparte tu pasión por tu ciudad y cultura con viajeros interesados.',
  'Genera ingresos extra haciendo lo que amas en tu tiempo libre.',
  'Flexibilidad total: tú decides tu disponibilidad y tus experiencias.',
  'Conoce personas de todo el mundo y amplía tu red de contactos',
  'Plataforma fácil de usar con herramientas para gestionar reservas y pagos',
]

export function ForWho() {
  return (
    <div className="my-8 grid w-full grid-cols-1 gap-8 px-4 md:mt-12 md:w-4/6 md:grid-cols-2">
      <div className="flex w-full flex-col gap-4">
        <H3>Para Viajeros</H3>
        <div className="flex flex-col gap-2">
          {TRAVELERS_DATA.map((data) => {
            return (
              <div className="flex items-start gap-4">
                <div className="bg-primary-bg mt-1 flex h-6 w-6 items-center justify-center rounded-full p-1">
                  <Check className="text-primary font-bold" />
                </div>
                <Body>{data}</Body>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full">
        <H3>Para guias locales</H3>
        <div className="flex flex-col gap-2">
          {LOCALS_DATA.map((data) => {
            return (
              <div className="flex items-start gap-4">
                <div className="bg-primary-bg mt-1 flex h-6 w-6 items-center justify-center rounded-full p-1">
                  <Check className="text-primary font-bold" />
                </div>
                <Body>{data}</Body>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
