import { Footer } from './footer'
import Header from '@components/ui/header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="mt-18 w-full flex-1">{children}</main>
      <Footer />
    </div>
  )
}

