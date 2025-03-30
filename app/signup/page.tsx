import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-7 w-7 bg-teal-500 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-teal-500">Local</span>
              <span className="text-black dark:text-white">Friend</span>
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Crea tu cuenta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Únete a LocalFriend para conectar con locales de todo el mundo
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="nombre@ejemplo.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" />
                <p className="text-xs text-muted-foreground">
                  La contraseña debe tener al menos 8 caracteres e incluir un número y un carácter especial.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded border-gray-300" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  Acepto los{" "}
                  <Link href="/terms" className="text-teal-500 hover:text-teal-600">
                    Términos de Servicio
                  </Link>{" "}
                  y la{" "}
                  <Link href="/privacy" className="text-teal-500 hover:text-teal-600">
                    Política de Privacidad
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full">
                Crear cuenta
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">O continuar con</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Google</Button>
              <Button variant="outline">Facebook</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t p-6">
            <div className="text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-teal-500 hover:text-teal-600 font-medium inline-flex items-center">
                Inicia sesión
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

