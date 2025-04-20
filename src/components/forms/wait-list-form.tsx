import { TabsGroup } from '@components/ui/tabs-group'
import { TextField } from '@components/forms/form-fields/text-field'
import { Button } from '@components/ui/button'
import { ArrowRight } from 'lucide-react'
import { TextAreaField } from '@components/forms/form-fields/textarea-field'
import { Info } from '@components/ui/typography'
import { CustomLink } from '@components/ui/link'

function TravelerForm() {
  return (
    <form className="flex flex-col gap-4">
      <TextField label="Nombre completo" placeholder="Tu nombre" />
      <TextField label="Correo electrónico" placeholder="tu@email.com" />
      <TextField
        label="¿Dónde te gustaría viajar?"
        placeholder="Ciudad, país"
      />
      <TextField
        label="Intereses"
        placeholder="Gastronomía, Historia, Arte, Naturaleza..."
      />
      <Button color="black" size="full">
        <span className="flex items-center gap-2">
          <p>Unirme a la lista de espera</p> <ArrowRight className="h-4" />
        </span>
      </Button>
    </form>
  )
}

function GuideForm() {
  return (
    <form className="flex flex-col gap-4">
      <TextField label="Nombre completo" placeholder="Tu nombre" />
      <TextField label="Correo electrónico" placeholder="tu@email.com" />
      <TextField label="Tu ciudad" placeholder="Ciudad, país" />
      <TextAreaField
        label="¿Qué te gustaría mostrar de tu ciudad"
        placeholder="Cuéntanos sobre tus intereses y qué experiencias te gustaría ofrecer..."
      />
      <Button color="black" size="full">
        <span className="flex items-center gap-2">
          <p>Unirme com oguía</p>
          <ArrowRight className="h-4" />
        </span>
      </Button>
    </form>
  )
}

const TABS_OPTIONS = [
  {
    value: 'traveler',
    label: 'Soy Viajero',
    component: <TravelerForm />,
  },
  {
    value: 'guide',
    label: 'Quiero ser guía',
    component: <GuideForm />,
  },
]

export function WaitListForm() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 rounded-md border border-black bg-white p-8">
      <TabsGroup options={TABS_OPTIONS} />
      <Info>
        Al unirte, aceptas recibir correos electrónicos sobre LocalFriend.
        Puedes darte de baja en cualquier momento. Consulta nuestra{' '}
        <CustomLink href="#">Política de Privacidad.</CustomLink>
      </Info>
    </div>
  )
}
