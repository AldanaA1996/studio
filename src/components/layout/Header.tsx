'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { KaunaLogo } from '@/components/icons/Logo';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Solo si estamos en desktop
      if (window.innerWidth >= 768) {
        const hero = document.getElementById('hero');
        if (!hero) return null;

        const obs = new IntersectionObserver(
          ([entry]) => setVisible(!entry.isIntersecting),
          { threshold: 0.1 }
        );

        obs.observe(hero);
        return obs;
      }
      return null;
    };

    // Ejecuta la primera vez
    observer = setupObserver();

    // Escucha cambios de tamaño
    const handleResize = () => {
      // Desconecta cualquier observer previo
      observer?.disconnect();
      observer = setupObserver();
    };
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`flex flex-col fixed top-0 w-full z-50 border-b backdrop-blur-md bg-accent/80 transition-all duration-500 ${
        visible ? 'md:opacity-100 translate-y-0' : 'md:opacity-0 md:-translate-y-8 md:pointer-events-none'
      }`}
    >
      <div className="flex w-full justify-between items-center py-2 px-4 md:px-8 font-headline">
        <Link href="/" aria-label="Kaûna Home">
          <KaunaLogo className="h-8 w-auto" />
        </Link>

        {/* Botón móvil */}
        <button
          className="md:hidden text-background"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir/cerrar menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#services" className="text-background hover:text-primary transition-colors">SERVICIOS</Link>
          <Link href="#professional" className="text-background hover:text-primary transition-colors">SOBRE MÍ</Link>
          <Link href="#location" className="text-background hover:text-primary transition-colors">UBICACIÓN</Link>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 items-center px-4 py-4 text-background bg-accent/90 backdrop-blur-md border-t border-background">
          <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">SERVICIOS</Link>
          <Link href="#professional" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">SOBRE MÍ</Link>
          <Link href="#location" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">UBICACIÓN</Link>
        </nav>
      )}
    </header>
  );
}
