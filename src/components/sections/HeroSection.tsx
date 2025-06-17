import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const phoneNumber = "2342470427"; // Replace with actual phone number

export function HeroSection() {
  return (
    <section className="relative min-h-[89vh] flex justify-center text-center overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-display self-center mb-6 text-accent font-light font tracking-[0.1em]">Centro Cosmetológico Integral</h1>
            <h1 className="text-6xl md:text-8xl font-headline mb-6 text-accent font-regular tracking-[0.5em]"> KAÛNA </h1>
            <p className="text-xl md:text-xl text-foreground font-headline mb-10 max-w-2xl mx-auto">
            Un espacio de cuidado integral, combinando técnicas de cosmetología natural, masajes faciales y fitoterapia. Tratamientos personalizados para equilibrar, relajar y revitalizar desde el primer encuentro.
            </p>
            <WhatsAppButton phoneNumber={phoneNumber} label="Agenda tu momento de cuidado y bienestar" className=" w-4/12 h-14 text-lg"  />
        </div>
      </div>
    </section>
  );
}
