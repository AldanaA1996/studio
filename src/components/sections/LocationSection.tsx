import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { MapPin, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { WHATSAPP_NUMBER } from '@/config/constants';

const locationImages = [
  { src: "https://placehold.co/800x400.png", alt: "Interior del centro Kaûna 1", hint: "spa interior" },
  { src: "https://placehold.co/800x400.png", alt: "Sala de tratamientos de Kaûna", hint: "treatment room" },
  { src: "https://placehold.co/800x400.png", alt: "Área de relajación de Kaûna", hint: "relaxation area" },
];

export function LocationSection() {
  return (
    <section id="location" className="relative min-h-[100vh] flex flex-1 items-center overflow-hidden py-8">
      <Image
        src="/images/finalBG.webp"
        alt="Serene wellness background"
        fill
        style={{ objectFit: "cover", objectPosition: "right" }}
        className="absolute inset-0 z-0 opacity-30 md:opacity-100"
        priority
      />
      <div className="mx-auto px-4">
       

        <Card className="max-w-auto mx-auto bg-opacity-0 shadow-xl overflow-hidden animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Columna del Mapa */}
            <div className="relative h-80 md:h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.5983228580226!2d-60.486717024434775!3d-35.1167396727746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bedc2b8ffce1ed%3A0xd95dc9541ae8de3d!2sRauch%20186%2C%20B6640%20Bragado%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1750729173703!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                className="absolute inset-0 border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            {/* Columna de Información */}
            <div className="p-6 md:p-8 flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-headline text-foreground flex items-center mb-2">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Dirección
                </h3>
                <p className="text-muted-foreground">
                  Rauch 186, Bragado (6640), Buenos Aires, Argentina
                </p>
                <p className="mt-2">
                  <a href="mailto:kaunabragado@gmail.com" className="hover:text-primary transition-colors text-sm">kaunabragado@gmail.com</a>
                </p>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-headline text-foreground mb-4 flex items-center">
                  <Sparkles className="mr-3 h-5 w-5 text-primary" />
                  Nuestro Espacio
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative col-span-2 aspect-[2/1] rounded-lg overflow-hidden border border-border">
                    <Image
                      src={locationImages[0].src}
                      alt={locationImages[0].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      data-ai-hint={locationImages[0].hint}
                    />
                  </div>
                  <div className="relative col-span-1 aspect-[2/1] rounded-lg overflow-hidden border border-border">
                    <Image
                      src={locationImages[1].src}
                      alt={locationImages[1].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      data-ai-hint={locationImages[1].hint}
                    />
                  </div>
                  <div className="relative col-span-1 aspect-[2/1] rounded-lg overflow-hidden border border-border">
                    <Image
                      src={locationImages[2].src}
                      alt={locationImages[2].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      data-ai-hint={locationImages[2].hint}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <WhatsAppButton phoneNumber={WHATSAPP_NUMBER} label="Agendá tu turno por WhatsApp" className="w-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
