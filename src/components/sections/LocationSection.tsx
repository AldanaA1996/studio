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
          Visitanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-8 animate-fade-in-up opacity-0">
            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-primary" />
                  Dirección
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-lg">
                <p>Rauch 186, Bragado 6640</p>
                <p>Buenos Aires, Argentina</p>
                <p className="mt-4">
                  <a href="mailto:kaunabragado@gmail.com" className="hover:text-primary transition-colors">kaunabragado@gmail.com</a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-foreground flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-primary" />
                  Horarios de Atención
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
                  Contactame
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.5983228580226!2d-60.486717024434775!3d-35.1167396727746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bedc2b8ffce1ed%3A0xd95dc9541ae8de3d!2sRauch%20186%2C%20B6640%20Bragado%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1750729173703!5m2!1ses!2sar" 
                          width="100%" 
                          height="100%" 
                          style= {{border:0}}
                          allowFullScreen= {true}
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
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
