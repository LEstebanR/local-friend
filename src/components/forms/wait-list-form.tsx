import { TabsGroup } from '@components/ui/tabs-group'
import { TextField } from '@components/forms/form-fields/text-field'
import { Button } from '@components/ui/button'
import { ArrowRight } from 'lucide-react'
import { TextAreaField } from '@components/forms/form-fields/textarea-field'
import { Info } from '@components/ui/typography'
import { CustomLink } from '@components/ui/link'
import { useState } from 'react'
import { supabase } from '@lib/supabase'

function TravelerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ ...formData, type: 'traveler' }])

      if (error) throw error
      alert('¡Gracias por unirte a la lista de espera!')
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar el formulario')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre completo"
          placeholder="Tu nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Correo electrónico"
          placeholder="tu@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="¿Dónde te gustaría viajar?"
          placeholder="Ciudad, país"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          label="Intereses"
          placeholder="Gastronomía, Historia, Arte, Naturaleza..."
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" color="black" size="full" isLoading={isLoading}>
        <span className="flex items-center gap-2">
          <p>Unirme a la lista de espera</p> <ArrowRight className="h-4" />
        </span>
      </Button>
    </form>
  )
}

function GuideForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ ...formData, type: 'guide' }])

      if (error) throw error
      alert('¡Gracias por tu interés en ser guía!')
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar el formulario')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre completo"
          placeholder="Tu nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Correo electrónico"
          placeholder="tu@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Tu ciudad"
          placeholder="Ciudad, país"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextAreaField
          label="¿Qué te gustaría mostrar de tu ciudad"
          placeholder="Cuéntanos sobre tus intereses y qué experiencias te gustaría ofrecer..."
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" color="black" size="full" isLoading={isLoading}>
        <span className="flex items-center gap-2">
          <p>Unirme como guía</p>
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
      <div className="min-h-[500px] w-full">
        <TabsGroup options={TABS_OPTIONS} />
      </div>
      <Info>
        Al unirte, aceptas recibir correos electrónicos sobre LocalFriend.
        Puedes darte de baja en cualquier momento. Consulta nuestra{' '}
        <CustomLink href="#">Política de Privacidad.</CustomLink>
      </Info>
    </div>
  )
}
