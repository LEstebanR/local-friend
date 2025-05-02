import { TabsGroup } from '@components/ui/tabs-group'
import { TextField } from '@components/forms/form-fields/text-field'
import { Button } from '@components/ui/button'
import { ArrowRight } from 'lucide-react'
import { TextAreaField } from '@components/forms/form-fields/textarea-field'
import { Info } from '@components/ui/typography'
import { CustomLink } from '@components/ui/link'
import { useState } from 'react'
import { supabase } from '@lib/supabase'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

// Función de validación de email
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function TravelerForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar email antes de enviar
    if (!isValidEmail(formData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido')
      return
    }

    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ ...formData, type: 'traveler' }])

      if (error) throw error
      toast.success('¡Gracias por tu interés en ser viajero!')
    } catch (error) {
      console.error('Error:', error)
      toast.error('Hubo un error al enviar el formulario')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error de email cuando el usuario está escribiendo
    if (name === 'email') {
      setEmailError(null)
    }
  }

  const validateEmail = () => {
    if (formData.email && !isValidEmail(formData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido')
    } else {
      setEmailError(null)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-4">
        <TextField
          label={t('home.complete-name')}
          placeholder={t('home.your-name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label={t('home.email')}
          placeholder={t('home.email-placeholder')}
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={validateEmail}
          error={emailError}
        />
        <TextField
          label={t('home.place-to-travel')}
          placeholder={t('home.city-country')}
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          label={t('home.interest')}
          placeholder={t('home.interest-placeholder')}
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" color="black" size="full" isLoading={isLoading}>
        <span className="flex items-center gap-2">
          <p>{t('home.join-list')}</p> <ArrowRight className="h-4" />
        </span>
      </Button>
    </form>
  )
}

function GuideForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar email antes de enviar
    if (!isValidEmail(formData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido')
      return
    }

    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ ...formData, type: 'guide' }])

      if (error) throw error
      toast.success('¡Gracias por tu interés en ser guía!')
    } catch (error) {
      console.error('Error:', error)
      toast.error('Hubo un error al enviar el formulario')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error de email cuando el usuario está escribiendo
    if (name === 'email') {
      setEmailError(null)
    }
  }

  const validateEmail = () => {
    if (formData.email && !isValidEmail(formData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido')
    } else {
      setEmailError(null)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-4">
        <TextField
          label={t('home.complete-name')}
          placeholder={t('home.your-name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label={t('home.email')}
          placeholder={t('home.email-placeholder')}
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={validateEmail}
          error={emailError}
        />
        <TextField
          label={t('home.where-are-you-from')}
          placeholder={t('home.city-country')}
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextAreaField
          label={t('home.place-to-show')}
          placeholder={t('home.place-to-show-placeholder')}
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" color="black" size="full" isLoading={isLoading}>
        <span className="flex items-center gap-2">
          <p>{t('home.join-list')}</p>
          <ArrowRight className="h-4" />
        </span>
      </Button>
    </form>
  )
}

const TABS_OPTIONS = [
  {
    value: 'traveler',
    label: 'im-traveler',
    component: <TravelerForm />,
  },
  {
    value: 'guide',
    label: 'i-want-to-be-a-guide',
    component: <GuideForm />,
  },
]

export function WaitListForm() {
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 rounded-md border border-black bg-white p-8">
      <div className="min-h-[500px] w-full">
        <TabsGroup options={TABS_OPTIONS} />
      </div>
      <Info>
        {t('home.form-validation')}{' '}
        <CustomLink href="#">{t('home.privacy-policy')}</CustomLink>
      </Info>
    </div>
  )
}
