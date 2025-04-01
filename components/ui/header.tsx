import Link from "next/link";
import { Button } from "./button";
import { Users, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 bg-teal-500 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-teal-500">Local</span>
            <span className="text-black dark:text-white">Friend</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/become-guide"
            className="text-sm font-medium hover:text-teal-500 transition-colors"
          >
            Conviértete en Guía
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-teal-500 transition-colors"
          >
            Cómo Funciona
          </Link>
          <Link
            href="/help"
            className="text-sm font-medium hover:text-teal-500 transition-colors"
          >
            Ayuda
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Button asChild>
              <Link href="/signup">Registrarse</Link>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 -right-4 md:right-0"
            >
              <DropdownMenuItem asChild>
                <Link href="/become-guide" className="w-full">
                  Conviértete en Guía
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about" className="w-full">
                  Cómo Funciona
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/help" className="w-full">
                  Ayuda
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login" className="w-full">
                  Iniciar Sesión
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup" className="w-full">
                  Registrarse
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
