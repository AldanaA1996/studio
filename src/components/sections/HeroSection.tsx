'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Leaf } from '../icons/Leaf';
import { WHATSAPP_NUMBER } from '@/config/constants';

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-1 items-center overflow-hidden">
      <Image
        src="/images/titleBG.png"
        alt="Serene wellness background"
        fill
        style={{ objectFit: "cover", objectPosition: "left" }}
        className="absolute inset-0 z-0 opacity-30 md:opacity-100"
        priority
      />
      <div className="container mx-auto px-6 md:px-4 flex flex-col items-center justify-center animate-fade-in-up z-10">
        <h1 className="hidden md:block text-2xl md:text-6xl font-display mb-5 text-accent font-bold md:font-light tracking-[0.1em]">
          Estudio Cosmetológico Integral
        </h1>

        {/* Logo solo en móvil */}
        <div className="md:hidden flex flex-col items-center mb-2">
          <Leaf className="h-10 w-auto mb-1" />
          <h1 className="text-2xl font-headline text-accent tracking-[0.1em]">Estudio Cosmetológico Integral</h1>
        </div>

        <h1 className="text-7xl md:text-8xl font-headline mb-2 md:mb-5 mx-auto text-primary-foreground md:text-accent font-regular md:tracking-widest">
          K A Û N A
        </h1>

        <p className="text-2xl md:text-2xl text-accent md:text-neutral-500 font-headline text-center mb-10 max-w-4xl mx-auto">
          Un espacio de cuidado integral, combinando técnicas de cosmetología natural, masajes faciales y fitoterapia. <br />
          Tratamientos personalizados para equilibrar, relajar y revitalizar desde el primer encuentro.
        </p>

        <WhatsAppButton
          phoneNumber={WHATSAPP_NUMBER}
          label={isMobile ? "Agenda tu momento" : "Agenda tu momento de cuidado y bienestar"}
          className={`h-14 ${isMobile ? "w-auto text-base" : "w-auto text-lg"}`}
        />
      </div>
    </section>
  );
}
