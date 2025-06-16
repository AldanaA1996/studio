import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

const phoneNumber = "2342470427"; // Replace with actual phone number

export function HeroSection() {
  return (
    <section className="relative min-h-[89vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/titleBG.png"
        alt="Serene wellness background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="wellness spa background"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 py-20 animate-fade-in-up">
        <div>
        
            <h1 className="text-8xl md:text-7xl font-headline font-bold mb-6 text-primary">
              K  A  Û  N  A
            </h1>
            <p className="text-m md:text-2xl text-foreground mb-10 max-w-2xl mx-auto">
            Un espacio de cuidado integral, combinando técnicas de cosmetología natural, masajes faciales y fitoterapia. Tratamientos personalizados para equilibrar, relajar y revitalizar desde el primer encuentro.
            </p>
            <WhatsAppButton phoneNumber={phoneNumber} label="Agenda tu momento de cuidado y bienestar" />
        </div>
      </div>
    </section>
  );
}
