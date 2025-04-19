import { H2Hero, Body } from '@components/ui/typography'
import { Chip } from '@components/ui/chip'
import { Button } from '@components/ui/button'

const imageUrl =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  return (
    <div
      className="flex w-full flex-col items-center justify-between gap-4 bg-cover bg-center px-2 py-4 md:min-h-[450px] md:gap-12 md:py-8"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(13, 148, 136, 0.8), rgba(30, 64, 175, 0.7)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Chip className="bg-white/10 text-white/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-500"></span>
          </span>
          Próximamente
        </div>
      </Chip>
      <H2Hero color="white" className="text-center md:w-3/6">
        Conecta con locales y descubre el alma de cada ciudad
      </H2Hero>
      <Body color="white" className="text-center md:w-3/6">
        LocalFriend está creando una nueva forma de viajar, conectando viajeros
        con guías locales apasionados para experiencias auténticas y
        personalizadas.
      </Body>
      <Button color="black" size="xl" type="link" href="#waitlist">
        Únete a la lista de espera
      </Button>
    </div>
  )
}
