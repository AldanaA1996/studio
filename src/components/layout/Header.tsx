import Link from 'next/link';
import { KaunaLogo } from '@/components/icons/Logo';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Kaûna Home">
          <KaunaLogo className="h-10 text-primary w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#professional" className="text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#location" className="text-foreground hover:text-primary transition-colors">
            Location
          </Link>
        </nav>
      </div>
    </header>
  );
}
