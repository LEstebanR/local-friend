import { TextField } from '@components/forms/form-fields/text-field'
import { Button } from '@components/ui/button'
import { SwitchField } from '@components/forms/form-fields/switch-field'
import { Divider } from '@components/ui/divider'
import { Body } from '@components/ui/typography'
import { CustomLink } from '@components/ui/link'

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-4 rounded-lg border-2 border-gray-200 p-4">
      <div className="flex gap-4">
        <TextField label="Nombre" name="name" placeholder="Nombre" />
        <TextField label="Apellido" name="lastname" placeholder="Apellido" />
      </div>
      <TextField label="Ciudad" name="city" placeholder="Ciudad" />
      <TextField label="Email" name="email" placeholder="Email" />
      <TextField label="Contraseña" name="password" placeholder="Contraseña" />
      <SwitchField label="Quiero ser un guía" />
      <Button type="submit" size="full">
        Crear cuenta
      </Button>
      <Divider />
      <div className="flex items-center justify-center gap-2">
        <Body>¿Ya tienes una cuenta?</Body>
        <CustomLink href="/sign-in">Iniciar sesión</CustomLink>
      </div>
    </form>
  )
}
