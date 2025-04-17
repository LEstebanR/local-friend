import { H2, Body } from "@components/ui/typography"
import { Button } from "@components/ui/button"

const imageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"

export function Hero(){
    return (
        <div 
            className="flex flex-col justify-between border-2 border-white gap-4 items-center w-full min-h-[500px] relative py-12 bg-gradient-to-r from-teal-900/80 to-blue-900/70"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(13, 148, 136, 0.8), rgba(37, 99, 235, 0.7)), url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
            
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white/90 text-sm mb-2">
            <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-500" />
            </span>
            <span>Próximamente</span>
          </div>
          <div className="flex flex-col justify-between items-center text-center w-3/6 h-80">
             <H2 color="white" size="4xl">Conecta con locales y descubre el alma de cada ciudad</H2>
             <Body color="white" size="lg">LocalFriend está creando una nueva forma de viajar, conectando viajeros con guías locales apasionados para experiencias auténticas y personalizadas.</Body>
            <Button size="lg" color="secondary">Únete a la lista de espera</Button>
          </div>
        </div>    
    )
}
