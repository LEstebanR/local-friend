import { Body, H2 } from '@components/ui/typography'

const QUESTIONS = [
  {
    question: '¿Cuándo se lanzará LocalFriend?',
    answer:
      'Estamos trabajando para lanzar la versión beta en verano de 2025, con un lanzamiento completo previsto para finales de 2025. Los miembros de la lista de espera tendrán acceso prioritario.',
  },
  {
    question: '¿En qué ciudades estará disponible?',
    answer:
      'Inicialmente lanzaremos en Barcelona, Madrid, París, Roma y Lisboa, con planes de expansión rápida a otras ciudades europeas y globales poco después.',
  },
  {
    question: '¿Cómo se garantiza la seguridad?',
    answer:
      'Todos los guías pasarán por un proceso de verificación de identidad y revisión de antecedentes. Además, implementaremos un sistema de reseñas transparente y seguimiento GPS opcional durante las experiencias.',
  },
  {
    question: '¿Cuánto costará usar LocalFriend?',
    answer:
      'El registro será gratuito. Los guías establecerán sus propios precios por experiencia, y LocalFriend cobrará una pequeña comisión por cada reserva completada. Los miembros de la lista de espera recibirán descuentos especiales.',
  },
  {
    question: '¿Puedo ser tanto viajero como guía?',
    answer:
      '¡Absolutamente! Muchos de nuestros usuarios serán tanto viajeros como guías, compartiendo su ciudad cuando están en casa y descubriendo nuevos lugares cuando viajan.',
  },
]

export function Qa() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-8">
      <H2 className="text-center">Preguntas frecuentes</H2>
      <Body color="muted" className="text-center">
        Respuestas a algunas preguntas comunes sobre LocalFriend
      </Body>
      <div className="mt-6 flex flex-col gap-6 md:w-4/6">
        {QUESTIONS.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
