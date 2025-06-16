import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProfessionalBioSection() {
  return (
    <section id="professional" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 md:mb-16 text-primary">
          Meet Our Professional
        </h2>
        <Card className="overflow-hidden shadow-xl md:max-w-4xl mx-auto bg-card animate-fade-in-up opacity-0">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="https://placehold.co/400x600.png"
                alt="Professional at Kaûna"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                data-ai-hint="professional portrait therapist"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-3xl font-headline text-foreground">Dr. Elara Vance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-lg">
                <p>
                  With over 15 years of experience in holistic wellness and natural therapies, Dr. Elara Vance is dedicated to guiding you on your path to rejuvenation and balance.
                </p>
                <p>
                  Her approach combines ancient wisdom with modern understanding, focusing on personalized treatments that nurture both body and mind. She is passionate about empowering individuals to achieve optimal health through natural means.
                </p>
                <p>
                  Specializing in advanced facial massage techniques, phytotherapy applications, and bespoke natural cosmetology, Dr. Vance ensures every client receives compassionate care tailored to their unique needs.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
