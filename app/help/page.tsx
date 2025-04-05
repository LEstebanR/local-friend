import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, Phone, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <main>
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Centro de Ayuda</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Encuentra respuestas a tus preguntas y aprende cómo sacar el
                máximo provecho de LocalFriend
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar en el centro de ayuda..."
                  className="pl-10 py-6 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="travelers">Para Viajeros</TabsTrigger>
              <TabsTrigger value="guides">Para Guías</TabsTrigger>
              <TabsTrigger value="payments">Pagos y Facturación</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-8">
              <h2 className="text-2xl font-bold">
                Preguntas Frecuentes Generales
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Qué es LocalFriend?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      LocalFriend es una plataforma que conecta a viajeros con
                      guías locales que ofrecen experiencias auténticas y
                      personalizadas en destinos de todo el mundo.
                    </p>
                    <p>
                      A diferencia de los tours turísticos tradicionales,
                      LocalFriend te permite conocer la ciudad a través de los
                      ojos de un residente local, descubriendo lugares fuera de
                      las rutas turísticas y viviendo experiencias más
                      auténticas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Cómo funciona LocalFriend?
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Regístrate en la plataforma como viajero o como guía
                        local.
                      </li>
                      <li>
                        Si eres viajero, busca guías en tu destino según tus
                        intereses y fechas.
                      </li>
                      <li>
                        Explora los perfiles de los guías, sus experiencias
                        ofrecidas y reseñas.
                      </li>
                      <li>
                        Contacta con el guía que más te interese y coordina los
                        detalles.
                      </li>
                      <li>
                        Reserva y paga de forma segura a través de nuestra
                        plataforma.
                      </li>
                      <li>
                        Disfruta de tu experiencia personalizada con tu
                        LocalFriend.
                      </li>
                      <li>
                        Después, deja una reseña para ayudar a futuros viajeros.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿En qué ciudades está disponible LocalFriend?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Actualmente, LocalFriend está disponible en más de 120
                      ciudades en todo el mundo, incluyendo destinos populares
                      como:
                    </p>
                    <ul className="list-disc pl-5 grid grid-cols-2 md:grid-cols-3 gap-2">
                      <li>Barcelona</li>
                      <li>Madrid</li>
                      <li>París</li>
                      <li>Roma</li>
                      <li>Londres</li>
                      <li>Berlín</li>
                      <li>Nueva York</li>
                      <li>Tokio</li>
                      <li>Bangkok</li>
                      <li>Ciudad de México</li>
                      <li>Buenos Aires</li>
                      <li>Sídney</li>
                    </ul>
                    <p className="mt-2">
                      Estamos expandiéndonos constantemente a nuevas ciudades.
                      Si no encuentras tu destino, ¡vuelve a consultar pronto!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Cómo puedo contactar con el servicio de atención al
                    cliente?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Puedes contactar con nuestro equipo de atención al cliente
                      de varias formas:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-teal-500" />
                        <span>
                          Email:{" "}
                          <a
                            href="mailto:soporte@localfriend.com"
                            className="text-teal-500 hover:underline"
                          >
                            soporte@localfriend.com
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-teal-500" />
                        <span>
                          Chat en vivo: Disponible de lunes a viernes, de 9:00 a
                          18:00 (CET)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-teal-500" />
                        <span>
                          Teléfono: +34 900 123 456 (Lunes a viernes, 9:00-18:00
                          CET)
                        </span>
                      </li>
                    </ul>
                    <p className="mt-2">
                      Nuestro tiempo de respuesta habitual es de 24 horas para
                      emails y mensajes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>¿LocalFriend es seguro?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Sí, la seguridad es nuestra prioridad. Implementamos
                      varias medidas para garantizar una experiencia segura:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Verificación de identidad para todos los guías</li>
                      <li>Sistema de reseñas y calificaciones transparente</li>
                      <li>Pagos seguros a través de nuestra plataforma</li>
                      <li>Equipo de confianza y seguridad disponible 24/7</li>
                      <li>
                        Seguro de responsabilidad civil para todas las
                        experiencias
                      </li>
                      <li>Protección de datos personales conforme al RGPD</li>
                    </ul>
                    <p className="mt-2">
                      Además, puedes comunicarte con tu guía a través de nuestra
                      plataforma antes de tu experiencia para resolver cualquier
                      duda.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="travelers" className="space-y-8">
              <h2 className="text-2xl font-bold">Para Viajeros</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Cómo reservo una experiencia con un guía local?
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Busca guías en tu destino utilizando los filtros de
                        ubicación, fechas e intereses.
                      </li>
                      <li>
                        Explora los perfiles y experiencias ofrecidas por
                        diferentes guías.
                      </li>
                      <li>
                        Selecciona la experiencia que te interese y verifica la
                        disponibilidad.
                      </li>
                      <li>
                        Puedes enviar un mensaje al guía para hacer preguntas
                        antes de reservar.
                      </li>
                      <li>
                        Una vez decidido, haz clic en &quot;Reservar&quot; y
                        completa el proceso de pago.
                      </li>
                      <li>
                        Recibirás una confirmación por email con todos los
                        detalles.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Puedo cancelar o modificar mi reserva?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Sí, puedes cancelar o modificar tu reserva según nuestra
                      política de cancelación:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Cancelación con 7 días o más de antelación: reembolso
                        del 100%
                      </li>
                      <li>
                        Cancelación entre 3-7 días antes: reembolso del 50%
                      </li>
                      <li>Cancelación con menos de 3 días: sin reembolso</li>
                    </ul>
                    <p className="mt-2">
                      Para modificar tu reserva, contacta directamente con tu
                      guía a través de la plataforma. Los cambios están sujetos
                      a la disponibilidad del guía.
                    </p>
                    <p className="mt-2">
                      En caso de mal tiempo u otras circunstancias imprevistas,
                      muchos guías ofrecen la posibilidad de reprogramar sin
                      coste adicional.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Qué debo llevar a una experiencia LocalFriend?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Lo que necesites llevar dependerá del tipo de experiencia,
                      pero generalmente recomendamos:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Calzado cómodo para caminar</li>
                      <li>Ropa adecuada para el clima local</li>
                      <li>Protección solar (si es al aire libre)</li>
                      <li>Agua</li>
                      <li>Cámara</li>
                      <li>
                        Dinero en efectivo para gastos personales (aunque muchas
                        experiencias incluyen todo)
                      </li>
                      <li>
                        Tu teléfono móvil con la app de LocalFriend instalada
                      </li>
                    </ul>
                    <p className="mt-2">
                      Tu guía te proporcionará información específica sobre lo
                      que debes llevar para tu experiencia concreta.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Las experiencias son privadas o en grupo?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      LocalFriend ofrece tanto experiencias privadas como en
                      grupo:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Experiencias privadas:</strong> Exclusivas para
                        ti y tus acompañantes. Ideal para una atención
                        personalizada y adaptada a tus intereses específicos.
                      </li>
                      <li>
                        <strong>Experiencias en grupo:</strong> Te unes a otros
                        viajeros (grupos pequeños, generalmente de 4-8
                        personas). Son más económicas y ofrecen la oportunidad
                        de conocer a otros viajeros.
                      </li>
                    </ul>
                    <p className="mt-2">
                      Puedes filtrar por tipo de experiencia en nuestra
                      búsqueda. Cada listado indica claramente si es una
                      experiencia privada o en grupo, así como el tamaño máximo
                      del grupo.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Cómo sé si un guía es de confianza?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Todos los guías de LocalFriend pasan por un proceso de
                      verificación:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Verificación de identidad</li>
                      <li>Revisión de antecedentes</li>
                      <li>Proceso de entrevista</li>
                      <li>Sistema de reseñas y calificaciones</li>
                    </ul>
                    <p className="mt-2">Te recomendamos revisar:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Las reseñas de otros viajeros</li>
                      <li>
                        La insignia de &quot;Verificado&quot; en su perfil
                      </li>
                      <li>Su historial y experiencia como guía</li>
                      <li>
                        Sus respuestas a mensajes (tiempo de respuesta,
                        claridad, etc.)
                      </li>
                    </ul>
                    <p className="mt-2">
                      Si tienes alguna preocupación sobre un guía, no dudes en
                      contactar con nuestro equipo de soporte.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="guides" className="space-y-8">
              <h2 className="text-2xl font-bold">Para Guías</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Cómo puedo convertirme en guía de LocalFriend?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Para convertirte en guía de LocalFriend, sigue estos
                      pasos:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Completa el formulario de solicitud en la sección
                        &quot;Conviértete en Guía&quot;
                      </li>
                      <li>
                        Proporciona información sobre ti, tu ciudad y las
                        experiencias que te gustaría ofrecer
                      </li>
                      <li>
                        Sube una foto de perfil profesional y documentos de
                        identificación para la verificación
                      </li>
                      <li>
                        Espera la revisión de nuestro equipo (generalmente 3-5
                        días hábiles)
                      </li>
                      <li>
                        Si eres aceptado, configura tu perfil, experiencias y
                        disponibilidad
                      </li>
                      <li>Completa nuestra formación online para guías</li>
                      <li>¡Empieza a recibir reservas!</li>
                    </ol>
                    <p className="mt-2">
                      Buscamos personas apasionadas por su ciudad, con
                      conocimientos locales y habilidades de comunicación. No es
                      necesaria experiencia previa como guía turístico.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Cuánto puedo ganar como guía de LocalFriend?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Tus ingresos como guía de LocalFriend dependerán de varios
                      factores:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Los precios que establezcas para tus experiencias</li>
                      <li>El número de experiencias que ofrezcas</li>
                      <li>Tu disponibilidad</li>
                      <li>La temporada turística en tu ciudad</li>
                      <li>La calidad de tu perfil y reseñas</li>
                    </ul>
                    <p className="mt-2">
                      En promedio, los guías activos ganan entre $200-500 por
                      semana, aunque algunos guías en destinos populares con
                      múltiples experiencias pueden ganar considerablemente más.
                    </p>
                    <p className="mt-2">
                      LocalFriend cobra una comisión del 20% sobre el precio de
                      cada experiencia. El 80% restante es para ti, y recibirás
                      los pagos directamente en tu cuenta bancaria.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Qué tipo de experiencias puedo ofrecer?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Puedes ofrecer una amplia variedad de experiencias,
                      siempre que muestren aspectos auténticos de tu ciudad:
                    </p>
                    <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
                      <li>Tours gastronómicos</li>
                      <li>Recorridos históricos</li>
                      <li>Rutas de arte urbano</li>
                      <li>Clases de cocina local</li>
                      <li>Excursiones a la naturaleza</li>
                      <li>Tours fotográficos</li>
                      <li>Experiencias de vida nocturna</li>
                      <li>Talleres artesanales</li>
                      <li>Visitas a mercados locales</li>
                      <li>Rutas en bicicleta</li>
                    </ul>
                    <p className="mt-2">
                      Las mejores experiencias son aquellas que reflejan tu
                      pasión y conocimientos únicos. Nuestro equipo puede
                      ayudarte a desarrollar y mejorar tus ideas de
                      experiencias.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Cómo puedo destacar mi perfil como guía?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Para destacar tu perfil y atraer más reservas:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Fotos de calidad:</strong> Usa una foto de
                        perfil profesional y añade imágenes atractivas de tus
                        experiencias
                      </li>
                      <li>
                        <strong>Descripción completa:</strong> Cuenta tu
                        historia, por qué amas tu ciudad y qué te hace único
                        como guía
                      </li>
                      <li>
                        <strong>Experiencias bien definidas:</strong> Describe
                        claramente lo que los viajeros pueden esperar, con
                        itinerarios detallados
                      </li>
                      <li>
                        <strong>Precios competitivos:</strong> Investiga lo que
                        ofrecen otros guías en tu ciudad
                      </li>
                      <li>
                        <strong>Disponibilidad actualizada:</strong> Mantén tu
                        calendario al día para maximizar las reservas
                      </li>
                      <li>
                        <strong>Respuestas rápidas:</strong> Contesta a los
                        mensajes lo antes posible
                      </li>
                      <li>
                        <strong>Reseñas positivas:</strong> Ofrece un servicio
                        excepcional y anima a tus clientes a dejar reseñas
                      </li>
                    </ul>
                    <p className="mt-2">
                      También ofrecemos talleres y recursos para guías que te
                      ayudarán a mejorar tu perfil y tus habilidades como
                      anfitrión.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Necesito un seguro o permisos especiales?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      LocalFriend proporciona un seguro de responsabilidad civil
                      que cubre todas las experiencias ofrecidas a través de
                      nuestra plataforma. Sin embargo:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Debes cumplir con las regulaciones locales de tu ciudad
                      </li>
                      <li>
                        Algunas actividades específicas pueden requerir
                        licencias o certificaciones (por ejemplo, actividades
                        acuáticas, deportes de aventura, etc.)
                      </li>
                      <li>
                        Es tu responsabilidad informarte sobre los requisitos
                        legales para operar como guía en tu localidad
                      </li>
                    </ul>
                    <p className="mt-2">
                      Nuestro equipo puede proporcionarte información general
                      sobre los requisitos comunes, pero te recomendamos
                      consultar con las autoridades locales o un asesor legal si
                      tienes dudas específicas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="payments" className="space-y-8">
              <h2 className="text-2xl font-bold">Pagos y Facturación</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Qué métodos de pago acepta LocalFriend?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Aceptamos los siguientes métodos de pago:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Tarjetas de crédito y débito (Visa, Mastercard, American
                        Express)
                      </li>
                      <li>PayPal</li>
                      <li>Apple Pay</li>
                      <li>Google Pay</li>
                      <li>
                        Transferencia bancaria (solo para reservas con más de 14
                        días de antelación)
                      </li>
                    </ul>
                    <p className="mt-2">
                      Todos los pagos se procesan de forma segura a través de
                      nuestra plataforma. Nunca compartimos tus datos
                      financieros con los guías u otros terceros.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Cuándo se cobra por una experiencia?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      El proceso de pago funciona de la siguiente manera:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Al realizar una reserva, se te cobra el importe total de
                        la experiencia
                      </li>
                      <li>
                        El dinero se mantiene en depósito hasta 24 horas después
                        de completar la experiencia
                      </li>
                      <li>
                        Una vez finalizada la experiencia satisfactoriamente, el
                        pago se transfiere al guía (menos la comisión de la
                        plataforma)
                      </li>
                    </ul>
                    <p className="mt-2">
                      Este sistema garantiza la protección tanto para viajeros
                      como para guías. Si surge algún problema con la
                      experiencia, puedes solicitar un reembolso a través de
                      nuestro proceso de resolución de disputas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Cómo funciona el proceso de reembolso?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Nuestra política de reembolso varía según el momento de la
                      cancelación:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Cancelación con 7 días o más de antelación: reembolso
                        del 100%
                      </li>
                      <li>
                        Cancelación entre 3-7 días antes: reembolso del 50%
                      </li>
                      <li>Cancelación con menos de 3 días: sin reembolso</li>
                    </ul>
                    <p className="mt-2">
                      Excepciones para reembolso completo independientemente del
                      plazo:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>El guía cancela la experiencia</li>
                      <li>
                        Condiciones meteorológicas extremas que impiden realizar
                        la actividad
                      </li>
                      <li>Emergencias médicas (con documentación)</li>
                      <li>
                        La experiencia no cumple significativamente con la
                        descripción
                      </li>
                    </ul>
                    <p className="mt-2">
                      Para solicitar un reembolso, ve a &quot;Mis Reservas&quot;
                      en tu cuenta y selecciona la opción &quot;Solicitar
                      Reembolso&quot;.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Cómo reciben los pagos los guías?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Los guías reciben sus pagos de la siguiente manera:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Los fondos se liberan 24 horas después de completar cada
                        experiencia
                      </li>
                      <li>
                        Los guías pueden elegir entre recibir pagos automáticos
                        semanales o retirar manualmente sus ganancias en
                        cualquier momento
                      </li>
                      <li>
                        Métodos de pago disponibles para guías: transferencia
                        bancaria, PayPal, o Stripe
                      </li>
                      <li>
                        El tiempo de procesamiento varía según el método de pago
                        (1-5 días hábiles)
                      </li>
                    </ul>
                    <p className="mt-2">
                      LocalFriend retiene una comisión del 20% sobre el precio
                      de cada experiencia. Los guías reciben el 80% restante.
                    </p>
                    <p className="mt-2">
                      Los guías pueden ver un desglose detallado de sus
                      ganancias, comisiones y pagos en la sección &quot;Mis
                      Finanzas&quot; de su cuenta.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Se incluyen los impuestos en los precios?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Respecto a los impuestos:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Los precios mostrados en la plataforma incluyen el
                        IVA/impuestos aplicables al servicio de la plataforma
                      </li>
                      <li>
                        Los guías son responsables de declarar y pagar sus
                        propios impuestos sobre los ingresos generados
                      </li>
                      <li>
                        Proporcionamos a los guías un resumen anual de ganancias
                        para facilitar sus declaraciones fiscales
                      </li>
                      <li>
                        Los requisitos fiscales varían según el país, por lo que
                        recomendamos a los guías consultar con un asesor fiscal
                        local
                      </li>
                    </ul>
                    <p className="mt-2">
                      Para los viajeros, el precio final mostrado al realizar la
                      reserva es el precio total a pagar, sin cargos adicionales
                      ocultos.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </section>

        <section className="py-16 bg-teal-50 dark:bg-teal-950/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro equipo de soporte está listo para ayudarte con cualquier
                pregunta o problema que puedas tener.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Mail className="h-10 w-10 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      Envíanos un Email
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Responderemos a tu consulta en un plazo de 24 horas.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="mailto:soporte@localfriend.com">Contactar</a>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <MessageSquare className="h-10 w-10 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Chat en Vivo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Habla con un agente de soporte en tiempo real.
                    </p>
                    <Button variant="outline">Iniciar Chat</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Phone className="h-10 w-10 text-teal-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Llámanos</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Lun-Vie, 9:00-18:00 (CET)
                    </p>
                    <Button variant="outline">+34 900 123 456</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Guías y Recursos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Guía para Principiantes",
                  description:
                    "Todo lo que necesitas saber para empezar a usar LocalFriend",
                  link: "/guides/beginners",
                },
                {
                  title: "Consejos de Seguridad",
                  description:
                    "Cómo mantenerte seguro mientras viajas y usas nuestros servicios",
                  link: "/guides/safety",
                },
                {
                  title: "Cómo Elegir el Guía Perfecto",
                  description:
                    "Consejos para encontrar el guía local que mejor se adapte a tus intereses",
                  link: "/guides/perfect-match",
                },
                {
                  title: "Guía para Convertirse en Anfitrión",
                  description:
                    "Pasos detallados para convertirte en un guía local exitoso",
                  link: "/guides/become-host",
                },
              ].map((guide) => (
                <Link href={guide.link} key={guide.title} className="group">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-teal-500 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground flex-grow">
                        {guide.description}
                      </p>
                      <div className="flex items-center mt-4 text-teal-500 text-sm font-medium">
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
