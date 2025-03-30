import Link from "next/link"
import { Filter, MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-4">Filtros</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Ubicación</label>
                  <div className="flex items-center border rounded-md p-2 bg-background">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <Input
                      type="text"
                      placeholder="Ciudad, País"
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Intereses</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar intereses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Comida y Gastronomía</SelectItem>
                      <SelectItem value="history">Historia y Cultura</SelectItem>
                      <SelectItem value="nightlife">Vida Nocturna</SelectItem>
                      <SelectItem value="outdoors">Aire Libre y Naturaleza</SelectItem>
                      <SelectItem value="arts">Arte y Museos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Idiomas</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar idiomas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">Inglés</SelectItem>
                      <SelectItem value="spanish">Español</SelectItem>
                      <SelectItem value="french">Francés</SelectItem>
                      <SelectItem value="german">Alemán</SelectItem>
                      <SelectItem value="japanese">Japonés</SelectItem>
                      <SelectItem value="chinese">Chino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Rango de Precio</label>
                  <Slider defaultValue={[50]} max={100} step={1} className="my-4" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span>$100+</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Valoración</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Valoración mínima" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Estrellas y más</SelectItem>
                      <SelectItem value="4">4 Estrellas y más</SelectItem>
                      <SelectItem value="3">3 Estrellas y más</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Local Friends en Barcelona</h1>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recomendados</SelectItem>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                  <SelectItem value="price-low">Precio: De menor a mayor</SelectItem>
                  <SelectItem value="price-high">Precio: De mayor a menor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Maria G.",
                  location: "Barcelona, Spain",
                  price: "$35",
                  rating: "4.9",
                  description: "Amante de la comida que muestra los mejores lugares de tapas en la ciudad.",
                  tags: ["Food", "Tapas", "Wine"],
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Carlos R.",
                  location: "Barcelona, Spain",
                  price: "$40",
                  rating: "4.8",
                  description: "Aficionado a la historia con profundo conocimiento del Barrio Gótico.",
                  tags: ["History", "Architecture", "Museums"],
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Sophia M.",
                  location: "Barcelona, Spain",
                  price: "$45",
                  rating: "4.7",
                  description: "Experto en vida nocturna y entusiasta de los cócteles.",
                  tags: ["Nightlife", "Cocktails", "Music"],
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Alex T.",
                  location: "Barcelona, Spain",
                  price: "$38",
                  rating: "4.9",
                  description: "Apasionado por la arquitectura de Gaudí y el arte local.",
                  tags: ["Art", "Photography", "Design"],
                  image:
                    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Elena L.",
                  location: "Barcelona, Spain",
                  price: "$42",
                  rating: "4.8",
                  description: "Guía de aventuras al aire libre para playas escondidas.",
                  tags: ["Beaches", "Hiking", "Sports"],
                  image:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Miguel P.",
                  location: "Barcelona, Spain",
                  price: "$36",
                  rating: "4.7",
                  description: "Chef local con conocimiento privilegiado de los mercados de alimentos.",
                  tags: ["Cooking", "Markets", "Cuisine"],
                  image:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Laura B.",
                  location: "Barcelona, Spain",
                  price: "$39",
                  rating: "4.9",
                  description: "Experto en vinos especializado en viñedos catalanes.",
                  tags: ["Wine", "Tasting", "Tours"],
                  image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "David S.",
                  location: "Barcelona, Spain",
                  price: "$41",
                  rating: "4.8",
                  description: "Entusiasta del arte callejero y explorador urbano.",
                  tags: ["Street Art", "Urban", "Culture"],
                  image:
                    "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Ana V.",
                  location: "Barcelona, Spain",
                  price: "$37",
                  rating: "4.7",
                  description: "Fotógrafo local que muestra los mejores lugares para fotos.",
                  tags: ["Photography", "Views", "Landmarks"],
                  image:
                    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                },
              ].map((guide, i) => (
                <Link href={`/guides/${i + 1}`} key={i}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={guide.image || "/placeholder.svg"}
                        alt={`${guide.name} profile`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-background rounded-full px-2 py-1 text-xs font-medium flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {guide.rating}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium">{guide.name}</h3>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {guide.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{guide.price}</div>
                          <div className="text-xs text-muted-foreground">per hour</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{guide.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {guide.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-1">
                ...
              </Button>
              <Button variant="outline" className="mx-1">
                10
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

