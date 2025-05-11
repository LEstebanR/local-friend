import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '@views/sign-up'

export const Route = createFileRoute('/sign-up')({
  component: SignUp,
})
