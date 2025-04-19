import { H2, Body, H3 } from '@components/ui/typography'

const STEPS_DATA = [
  {
    title: 'Busca',
    description:
      'Encuentra guías locales en tu destino según tus intereses, fechas y presupuesto.',
  },
  {
    title: 'Conecta',
    description:
      'Chatea con tu guía potencial para discutir detalles y personalizar tu experiencia.',
  },
  {
    title: 'Reserva',
    description:
      'Confirma y paga de forma segura a través de nuestra plataforma con garantía de satisfacción.',
  },
  {
    title: 'Disfruta',
    description:
      'Vive una experiencia auténtica y personalizada con tu LocalFriend y crea recuerdos inolvidables.',
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
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="bg-primary-bg flex h-12 w-12 items-center justify-center rounded-full">
        <p className="text-primary text-2xl">{step}</p>
      </div>
      <H3>{title}</H3>
      <Body className="text-muted">{description}</Body>
    </div>
  )
}

export function HowWorks() {
  return (
    <div className="mb-8 flex w-5/6 flex-col gap-4 text-center md:w-4/6">
      <H2>Cómo funcionará</H2>
      <Body className="text-muted">
        Estamos desarrollando una plataforma intuitiva que hará que conectar con
        locales sea tan fácil como reservar un hotel.
      </Body>
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
  )
}
