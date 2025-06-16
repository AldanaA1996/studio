import Link from 'next/link';
import { KaunaLogo } from '@/components/icons/Logo';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 bg-accent backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex justify-between items-center text-brown">
        <Link href="/" aria-label="Kaûna Home">
          <KaunaLogo className="h-10 text-primary w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-background hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="#professional" className="text-background hover:text-primary transition-colors">
            Sobre Mi
          </Link>
          <Link href="#location" className="text-background hover:text-primary transition-colors">
            Ubicación
          </Link>
        </nav>
      </div>
    </header>
  );
}
