import Link from "next/link";
import { Check, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function BecomeGuidePage() {
  return (
    <div className="min-h-screen">
      <div className="relative bg-teal-500 text-white">
        <div className="container py-16 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Comparte Tu Ciudad con Viajeros
            </h1>
            <p className="text-xl mb-6">
              Conviértete en un guía LocalFriend y gana dinero mientras muestras
              a los visitantes lo que hace especial a tu ciudad.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" asChild>
                <a href="#apply">Aplica Ahora</a>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-white/20 hover:text-white"
              >
                Aprende Más
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')",
          }}
        />
      </div>

      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Comparte Tu Pasión</h3>
              <p className="text-muted-foreground">
                Ya sea comida, historia, arte o actividades al aire libre,
                comparte lo que amas de tu ciudad con los visitantes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Horario Flexible</h3>
              <p className="text-muted-foreground">
                Tú decides cuándo estás disponible. Crea experiencias que se
                adapten a tu estilo de vida y horario.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Gana Ingresos Extra</h3>
              <p className="text-muted-foreground">
                Establece tus propios precios y gana dinero haciendo lo que
                amas. La mayoría de los guías ganan $200-500 por semana.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="flex-1">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Local guide showing tourists around"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Cómo Funciona</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-teal-500">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    Solicita ser guía
                  </h3>
                  <p className="text-muted-foreground">
                    Completa nuestro formulario de solicitud con información
                    sobre ti y tu ciudad.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-teal-500">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    Crea tus experiencias
                  </h3>
                  <p className="text-muted-foreground">
                    Diseña experiencias únicas que muestren lo que hace especial
                    a tu ciudad.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-teal-500">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    Conecta con viajeros
                  </h3>
                  <p className="text-muted-foreground">
                    Recibe solicitudes de reserva, comunícate con los huéspedes
                    y proporciona experiencias inolvidables.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-teal-500">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Recibe pagos</h3>
                  <p className="text-muted-foreground">
                    Recibe pagos seguros directamente en tu cuenta bancaria
                    después de cada experiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Lo Que Dicen Nuestros Guías
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos R.",
                location: "Mexico City",
                quote:
                  "Being a LocalFriend guide has allowed me to meet amazing people from around the world while sharing the culture and food I love. It's the perfect side gig!",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Sophia L.",
                location: "Paris",
                quote:
                  "I've been guiding for 2 years now and it's been incredible. I've made friends from all over the world and earn enough to cover my rent each month.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Raj P.",
                location: "Mumbai",
                quote:
                  "LocalFriend has given me the opportunity to share my city's rich history and culture with visitors. The platform is easy to use and the support team is great.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="apply" className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Solicita Convertirte en Guía
          </h2>

          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Información Personal</TabsTrigger>
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="submit">Enviar</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 pt-6">
              <div className="grid gap-2">
                <Label htmlFor="full-name">Nombre Completo</Label>
                <Input id="full-name" placeholder="Tu nombre completo" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu.correo@ejemplo.com"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Número de Teléfono</Label>
                <Input id="phone" placeholder="+34 (555) 123-4567" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Tu Ciudad</Label>
                <div className="flex items-center border rounded-md p-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                  <Input
                    id="location"
                    placeholder="Ciudad, País"
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="languages">Idiomas Hablados</Label>
                <Input id="languages" placeholder="Español, Inglés, etc." />
              </div>

              <Button className="w-full">Continuar</Button>
            </TabsContent>

            <TabsContent value="experience" className="space-y-4 pt-6">
              <div className="grid gap-2">
                <Label htmlFor="about">Acerca de Ti</Label>
                <Textarea
                  id="about"
                  placeholder="Cuéntanos sobre ti, tu experiencia y por qué quieres ser un guía LocalFriend."
                  rows={4}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="experience">Experiencia Local</Label>
                <Textarea
                  id="experience"
                  placeholder="¿Qué te hace calificado para mostrar tu ciudad a los visitantes? Incluye cualquier experiencia relevante."
                  rows={4}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="interests">Tus Intereses</Label>
                <Input
                  id="interests"
                  placeholder="Comida, Historia, Arte, Aire Libre, etc."
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="experience-ideas">Ideas de Experiencias</Label>
                <Textarea
                  id="experience-ideas"
                  placeholder="Describe 2-3 experiencias que te gustaría ofrecer a los visitantes de tu ciudad."
                  rows={4}
                />
              </div>

              <Button className="w-full">Continuar</Button>
            </TabsContent>

            <TabsContent value="submit" className="space-y-4 pt-6">
              <div className="grid gap-2">
                <Label htmlFor="photo">Foto de Perfil</Label>
                <div className="border rounded-md p-4 text-center">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-full mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Photo</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Subir Foto
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="id">Verificación de Identidad</Label>
                <div className="border rounded-md p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Para garantizar la seguridad de todos los usuarios,
                    requerimos verificación de identidad para todos los guías.
                  </p>
                  <Button variant="outline" size="sm">
                    Subir Documento de Identidad
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-gray-300"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  Acepto los{" "}
                  <Link
                    href="/terms"
                    className="text-teal-500 hover:text-teal-600"
                  >
                    Términos de Servicio para Guías
                  </Link>{" "}
                  y la{" "}
                  <Link
                    href="/privacy"
                    className="text-teal-500 hover:text-teal-600"
                  >
                    Política de Privacidad
                  </Link>
                </label>
              </div>

              <Button className="w-full">Enviar Solicitud</Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Nuestro equipo revisará tu solicitud y te responderá dentro de
                3-5 días hábiles.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="bg-muted/50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Compartir Tu Ciudad?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a nuestra comunidad de guías locales apasionados y comienza
              a crear experiencias memorables para los viajeros.
            </p>
            <Button size="lg" asChild>
              <a href="#apply">Aplicar Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
