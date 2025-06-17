import Link from 'next/link';
import { KaunaLogo } from '@/components/icons/Logo';

export function Header() {
  return (
    <header className="py-2 px-4 md:px-8 font-headline sticky top-0 z-50 border-b backdrop-blur-md bg-accent/80 " >
      <div className="container mx-auto flex justify-between items-center text-brown">
        <Link href="/" aria-label="Kaûna Home">
          <KaunaLogo className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-background hover:text-primary transition-colors">
            SERVICIOS
          </Link>
          <Link href="#professional" className="text-background hover:text-primary transition-colors">
            SOBRE MÍ
          </Link>
          <Link href="#location" className="text-background hover:text-primary transition-colors">
            UBICACIÓN
          </Link>
        </nav>
      </div>
    </header>
  );
}
