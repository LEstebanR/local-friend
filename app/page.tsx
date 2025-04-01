import Link from "next/link";
import { ArrowRight, MapPin, Search, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/60 z-10" />
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            }}
          >
            <div className="container h-full flex flex-col justify-center items-start gap-6 max-w-2xl relative z-20">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Descubre lugares con un{" "}
                <span className="text-teal-300">Local Friend</span>
              </h1>
              <p className="text-lg text-white/90">
                Conéctate con locales amigables que pueden mostrarte los tesoros
                escondidos y experiencias auténticas en cualquier ciudad que
                visites.
              </p>
              <div className="w-full max-w-md p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-lg">
                <form className="space-y-4">
                  <div className="flex items-center border rounded-md p-2 bg-background">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                    <Input
                      type="text"
                      placeholder="¿A dónde vas?"
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button className="w-full">
                    Encuentra Local Friends
                    <Search className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Cómo Funciona LocalFriend
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Nuestra plataforma conecta viajeros con locales apasionados que
              aman compartir los tesoros ocultos de su ciudad.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Busca Guías</h3>
              <p className="text-muted-foreground">
                Encuentra locales amigables en tu ciudad de destino según tus
                intereses y horario.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Conecta y Reserva</h3>
              <p className="text-muted-foreground">
                Envía mensajes a tu guía potencial, discute tus intereses y
                reserva tu experiencia.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Disfruta y Reseña</h3>
              <p className="text-muted-foreground">
                Experimenta la ciudad como un local y deja una reseña para
                ayudar a otros viajeros.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Guías Destacados
                </h2>
                <p className="text-muted-foreground mb-6">
                  Conoce algunos de nuestros guías locales mejor valorados que
                  están listos para mostrarte sus ciudades.
                </p>
                <Button variant="outline" className="group">
                  Ver todos los guías
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  {
                    name: "Maria G.",
                    location: "Barcelona, España",
                    rating: "4.9",
                    image:
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  },
                  {
                    name: "Carlos R.",
                    location: "Madrid, España",
                    rating: "4.8",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  },
                  {
                    name: "Sophia M.",
                    location: "París, Francia",
                    rating: "4.7",
                    image:
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  },
                  {
                    name: "Alex T.",
                    location: "Roma, Italia",
                    rating: "4.9",
                    image:
                      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  },
                ].map((guide) => (
                  <div
                    key={guide.name}
                    className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="h-32 bg-cover bg-center"
                      style={{ backgroundImage: `url('${guide.image}')` }}
                    />
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium">{guide.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-xs">{guide.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {guide.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Destinos Populares
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Descubre ciudades con las comunidades LocalFriend más activas
              alrededor del mundo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                city: "Barcelona",
                image:
                  "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "Tokyo",
                image:
                  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "New York",
                image:
                  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "Paris",
                image:
                  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "Rome",
                image:
                  "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "Bangkok",
                image:
                  "https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "London",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                city: "Mexico City",
                image:
                  "https://images.unsplash.com/photo-1518659526054-190340b15ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
            ].map((destination) => (
              <Link
                href={`/destinations/${destination.city
                  .toLowerCase()
                  .replace(" ", "-")}`}
                key={destination.city}
                className="group relative h-48 md:h-64 rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-medium text-lg">
                    {destination.city}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 bg-teal-50 dark:bg-teal-950/20">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Become a local guide"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Conviértete en un Local Friend
                </h2>
                <p className="text-muted-foreground mb-6">
                  Comparte tu pasión por tu ciudad, conoce viajeros de todo el
                  mundo y gana ingresos extra convirtiéndote en un guía
                  LocalFriend.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Crea tu propio horario y disponibilidad",
                    "Diseña experiencias personalizadas basadas en tus intereses",
                    "Conoce personas de todo el mundo",
                    "Gana dinero compartiendo lo que amas de tu ciudad",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-teal-500">✓</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href="/become-guide">Comienza a ser anfitrión</Link>
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
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/become-guide"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Become a Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stories"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safety"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Safety Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Contact Us
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
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:text-teal-500 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} LocalFriend. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
