import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <section className="relative py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Nuestra Misión</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Conectar viajeros con locales apasionados para crear
                experiencias auténticas y memorables en cada rincón del mundo.
              </p>
              <div className="flex justify-center">
                <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4">
                <p>
                  LocalFriend nació en 2025 después de un viaje inolvidable que
                  hicimos cuatro amigos de Medellín a Cartagena. Durante nuestra
                  estadía, un amigo que se quedó en Medellín nos contactó con su
                  primo que vivía en la ciudad. Aquella noche, nos llevó a
                  descubrir los mejores lugares de fiesta, nos presentó a
                  personas increíbles y nos llevó a comer en sitios con comida
                  deliciosa y asequible.
                </p>
                <p>
                  Esa experiencia nos hizo darnos cuenta de que los momentos más
                  auténticos de un viaje no están en las guías turísticas, sino
                  en las conexiones con locales que conocen la ciudad mejor que
                  nadie. Así nació la idea de LocalFriend: una plataforma para
                  que viajeros de todo el mundo puedan vivir sus destinos de la
                  misma manera, conectándose con personas que les muestren su
                  ciudad desde una perspectiva única y cercana.
                </p>
                <p>
                  Hoy, LocalFriend es una comunidad global con más de 15,000
                  anfitriones en 120 ciudades, ayudando a miles de viajeros a
                  descubrir el alma verdadera de cada destino.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="El equipo de LocalFriend"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-medium">Fundado en 2025</p>
                <p className="text-sm text-muted-foreground">
                  Medellín, Colombia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-teal-50 dark:bg-teal-950/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían todo lo que hacemos en LocalFriend
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Autenticidad</h3>
                  <p className="text-muted-foreground">
                    Promovemos experiencias genuinas que reflejen la verdadera
                    esencia de cada destino, más allá de las rutas turísticas
                    tradicionales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Comunidad</h3>
                  <p className="text-muted-foreground">
                    Creemos en el poder de las conexiones humanas para
                    transformar un simple viaje en una experiencia enriquecedora
                    y memorable.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Sostenibilidad</h3>
                  <p className="text-muted-foreground">
                    Fomentamos un turismo responsable que respete las
                    comunidades locales y contribuya positivamente a la economía
                    local.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a las personas apasionadas que trabajan para hacer de
              LocalFriend la mejor plataforma para conectar viajeros y locales
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "María Rodríguez",
                role: "Co-fundadora & CEO",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Carlos Mendoza",
                role: "Co-fundador & CTO",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Lucía Fernández",
                role: "Directora de Operaciones",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Alejandro Torres",
                role: "Director de Marketing",
                image:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto w-40 h-40 mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Únete a Nuestra Comunidad
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ya sea como viajero en busca de experiencias auténticas o como
                local deseoso de compartir tu pasión, hay un lugar para ti en
                LocalFriend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">Regístrate como Viajero</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/become-guide" className="group">
                    Conviértete en Guía
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-3">LocalFriend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Prensa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Comunidad</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/become-guide"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Conviértete en Guía
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Foro de la Comunidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stories"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Historias de Éxito
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Soporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safety"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Información de Seguridad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} LocalFriend. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
