import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

const phoneNumber = "12345678900"; // Replace with actual phone number

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Serene wellness background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        data-ai-hint="wellness spa background"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10"></div>
      <div className="relative z-20 container mx-auto px-4 py-20 animate-fade-in-up">
        <Card className="max-w-3xl mx-auto bg-background/80 backdrop-blur-md shadow-xl p-6 md:p-10 rounded-xl">
          <CardContent className="flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 text-primary">
              Welcome to Kaûna
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-10 max-w-2xl mx-auto">
              Discover a sanctuary for holistic well-being, where nature&apos;s wisdom meets modern care.
            </p>
            <WhatsAppButton phoneNumber={phoneNumber} label="Begin Your Journey" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
