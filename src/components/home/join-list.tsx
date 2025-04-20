import { Chip } from '@components/ui/chip'
import { MessageSquare, Calendar, Star, Globe } from 'lucide-react'
import { Body, H2, H3 } from '@components/ui/typography'
import { ReeactNode } from 'react'
import { WaitListForm } from '@components/forms/wait-list-form'

const ITEMS_INFO = [
  {
    icon: <MessageSquare className="text-primary h-5 w-5" />,
    title: 'Actualizaciones Exclusivas',
    description:
      'Recibe noticias sobre nuestro progreso y características antes que nadie',
  },
  {
    icon: <Star className="text-primary h-5 w-5" />,
    title: 'Acceso Prioritario',
    description: 'Sé de los primeros en probar la plataforma cuando esté lista',
  },
  {
    icon: <Globe className="text-primary h-5 w-5" />,
    title: 'Ofertas Especiales',
    description:
      'Descuentos exclusivos en tus primeras experiencias con LocalFriend',
  },
]

function ItemData({
  icon,
  title,
  description,
}: {
  icon: ReeactNode
  title: string
  description: title
}) {
  return (
    <div className="flex gap-2">
      <div className="bg-primary-bg flex h-12 w-12 items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="flex flex-col">
        <H3>{title}</H3>
        <Body className="text-muted">{description}</Body>
      </div>
    </div>
  )
}

export function JoinList() {
  return (
    <div className="bg-primary-bg-light flex w-full justify-center">
      <div className="my-8 grid w-full grid-cols-1 gap-8 px-4 md:mt-12 md:w-4/6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Chip color="primary-bg" className="text-primary">
            <div className="items center flex gap-2 font-bold">
              <Calendar className="text-primary" />
              <Body>Lanzamiento previsto: Finales 2025</Body>
            </div>
          </Chip>
          <H2>Únete a nuestra Lista de Espera</H2>
          <Body color="muted">
            Estamos trabajando duro para lanzar LocalFriend pronto. Regístrate
            ahora para ser de los primeros en acceder cuando la plataforma esté
            lista y recibir ofertas exclusivas para early adopters.
          </Body>
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
  )
}
