import { SignUpForm } from '@components/forms/sign-up-form'
import { H1, H2 } from '@components/ui/typography'
import { Users } from 'lucide-react'

export function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-18rem)] flex-col items-center justify-center gap-4">
      <div className="flex cursor-pointer items-center gap-1">
        <div className="bg-primary flex items-center justify-center rounded-full p-1">
          <Users className="text-white" />
        </div>
        <H1 color="primary">Local</H1>
        <H1>Friend</H1>
      </div>
      <H2>Crea tu cuenta</H2>
      <p className="text-center text-sm text-gray-500">
        Únete a LocalFriend para conectar con locales de todo el mundo
      </p>
      <SignUpForm />
    </div>
  )
}
