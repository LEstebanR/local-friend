import Link from "next/link"
import { Calendar, Check, Clock, Globe, Languages, MapPin, MessageSquare, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/guides" className="hover:text-teal-500 transition-colors">
                Guías
              </Link>
              <span>/</span>
              <Link href="/guides?location=barcelona" className="hover:text-teal-500 transition-colors">
                Barcelona
              </Link>
              <span>/</span>
              <span>Maria G.</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Maria G."
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">Maria G.</h1>
                  <div className="flex items-center bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 rounded-full px-2 py-0.5 text-xs">
                    <Check className="h-3 w-3 mr-1" />
                    Verificado
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">4.9</span>
                    <span className="text-muted-foreground ml-1">(124 reseñas)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    Barcelona, Spain
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  Entusiasta de la comida y nativa de Barcelona con más de 5 años de experiencia mostrando a los
                  visitantes el lado auténtico de la cocina catalana. ¡Conozco todas las joyas ocultas donde comen los
                  locales!
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-teal-500" />
                    <span className="text-sm">Tiempo de respuesta: &lt;1 hora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-teal-500" />
                    <span className="text-sm">124 experiencias guiadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-teal-500" />
                    <span className="text-sm">Inglés, Español, Catalán</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Food", "Tapas", "Wine", "Local Cuisine", "Markets", "Cooking"].map((tag) => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="experiences" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="experiences">Experiencias</TabsTrigger>
                <TabsTrigger value="about">Acerca de</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="availability">Disponibilidad</TabsTrigger>
              </TabsList>

              <TabsContent value="experiences" className="pt-6">
                <h2 className="text-xl font-medium mb-4">Experiencias con Maria</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Tour de Tapas en el Barrio Gótico",
                      description:
                        "Visita 4 auténticos bares de tapas amados por los locales y prueba lo mejor de la cocina catalana.",
                      duration: "3 horas",
                      price: "$45",
                      image:
                        "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    },
                    {
                      title: "Aventura Gastronómica en el Mercado de la Boqueria",
                      description:
                        "Explora el famoso mercado de Barcelona con una local que conoce los mejores puestos y vendedores.",
                      duration: "2 horas",
                      price: "$35",
                      image:
                        "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    },
                    {
                      title: "Clase de Cocina de Paella",
                      description:
                        "Aprende a hacer auténtica paella valenciana en una clase práctica de cocina en mi casa.",
                      duration: "4 horas",
                      price: "$65",
                      image:
                        "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    },
                    {
                      title: "Experiencia de Cata de Vinos",
                      description: "Prueba vinos catalanes locales maridados con quesos y embutidos regionales.",
                      duration: "2.5 horas",
                      price: "$55",
                      image:
                        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                    },
                  ].map((experience, i) => (
                    <Card key={i} className="overflow-hidden">
                      <img
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-1">{experience.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{experience.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            {experience.duration}
                          </div>
                          <div className="font-medium">{experience.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about" className="pt-6">
                <h2 className="text-xl font-medium mb-4">Acerca de Maria</h2>
                <div className="space-y-6">
                  <p>
                    Nacida y criada en Barcelona, he pasado mi vida explorando los tesoros culinarios de esta increíble
                    ciudad. Estudié gastronomía en el Instituto Culinario de Barcelona y he trabajado en varios
                    restaurantes antes de decidir compartir mi pasión con los visitantes.
                  </p>
                  <p>
                    Mi especialidad es introducir a las personas en la auténtica cocina catalana más allá de las trampas
                    para turistas. Conozco los restaurantes familiares donde los locales han comido durante
                    generaciones, los mejores puestos del mercado para productos frescos, y los bares escondidos que
                    sirven las tapas más deliciosas.
                  </p>
                  <p>
                    Cuando no estoy guiando tours gastronómicos, me encanta viajar y descubrir nuevas cocinas alrededor
                    del mundo, lo que me ayuda a aportar una perspectiva global a mi conocimiento local. Hablo inglés,
                    español y catalán con fluidez, ¡así que la comunicación nunca es un problema!
                  </p>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Idiomas</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                        <Globe className="h-3 w-3" />
                        <span>Inglés (Fluido)</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                        <Globe className="h-3 w-3" />
                        <span>Español (Nativo)</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                        <Globe className="h-3 w-3" />
                        <span>Catalán (Nativo)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Reseñas (124)</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium text-lg">4.9</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: "John D.",
                      date: "October 2023",
                      rating: 5,
                      comment:
                        "Maria's tapas tour was the highlight of our trip to Barcelona! She took us to places we would never have found on our own, and every bite was delicious. Her knowledge of local food history made the experience even more special.",
                    },
                    {
                      name: "Sarah M.",
                      date: "September 2023",
                      rating: 5,
                      comment:
                        "The cooking class with Maria was fantastic! She was patient, knowledgeable, and made learning to cook paella so much fun. We've already made it twice since returning home using her recipe.",
                    },
                    {
                      name: "David L.",
                      date: "August 2023",
                      rating: 4,
                      comment:
                        "Great market tour with lots of tastings. Maria knows all the vendors and got us special samples at many stalls. Would have liked a bit more historical information, but the food was amazing.",
                    },
                  ].map((review, i) => (
                    <div key={i} className="border-b pb-6 last:border-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Cargar más reseñas
                </Button>
              </TabsContent>

              <TabsContent value="availability" className="pt-6">
                <h2 className="text-xl font-medium mb-4">Disponibilidad de Maria</h2>
                <div className="grid gap-6">
                  <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center font-medium">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 28 }).map((_, i) => (
                      <Button
                        key={i}
                        variant={i % 9 === 0 || i % 5 === 0 ? "default" : "outline"}
                        className={`aspect-square ${i % 9 === 0 || i % 5 === 0 ? "" : "text-muted-foreground"}`}
                        disabled={i % 3 === 0 && i % 4 !== 0}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Horarios Disponibles</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Selecciona una fecha en el calendario para ver los horarios disponibles
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {["9:00 AM", "11:30 AM", "2:00 PM", "5:30 PM", "7:00 PM"].map((time) => (
                        <Button key={time} variant="outline" className="text-sm">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:w-80">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Reservar una Experiencia</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Seleccionar Experiencia</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Tour de Tapas en el Barrio Gótico</option>
                      <option>Aventura Gastronómica en el Mercado de la Boqueria</option>
                      <option>Clase de Cocina de Paella</option>
                      <option>Experiencia de Cata de Vinos</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Fecha</label>
                    <div className="flex items-center border rounded-md p-2">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <input
                        type="text"
                        placeholder="Seleccionar fecha"
                        className="w-full border-0 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Hora</label>
                    <div className="flex items-center border rounded-md p-2">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <input
                        type="text"
                        placeholder="Seleccionar hora"
                        className="w-full border-0 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Número de Personas</label>
                    <div className="flex items-center border rounded-md p-2">
                      <Users className="h-4 w-4 text-muted-foreground mr-2" />
                      <input
                        type="number"
                        min="1"
                        max="10"
                        defaultValue="2"
                        className="w-full border-0 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-b py-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>$45 × 2 people</span>
                    <span>$90</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tarifa de servicio</span>
                    <span>$9</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>$99</span>
                  </div>
                </div>

                <Button className="w-full mb-4">Reservar Ahora</Button>

                <Button variant="outline" className="w-full flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Enviar Mensaje a Maria
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

