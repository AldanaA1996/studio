import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const phoneNumber = "12345678900"; // Replace with actual phone number

const locationImages = [
  { src: "https://placehold.co/600x400.png", alt: "Kaûna center interior 1", hint: "spa interior" },
  { src: "https://placehold.co/600x400.png", alt: "Kaûna center treatment room", hint: "treatment room" },
  { src: "https://placehold.co/600x400.png", alt: "Kaûna center relaxation area", hint: "relaxation area" },
];

export function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 md:mb-16 text-primary">
          Visit Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-8 animate-fade-in-up opacity-0">
            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-primary" />
                  Our Address
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-lg">
                <p>123 Wellness Lane</p>
                <p>Serenity City, ST 12345</p>
                <p className="mt-4">
                  <a href="mailto:contact@kauna.com" className="hover:text-primary transition-colors">contact@kauna.com</a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-primary" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-lg">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <WhatsAppButton phoneNumber={phoneNumber} label="Book via WhatsApp" className="w-full" />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in-up animation-delay-200 opacity-0">
            <Card className="shadow-lg bg-card overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground">Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <Image
                    src="https://placehold.co/800x450.png"
                    alt="Map showing Kaûna location"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    data-ai-hint="city map placeholder"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground">Our Space</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {locationImages.map((img, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden border border-border">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        data-ai-hint={img.hint}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
