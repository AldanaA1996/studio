import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const about = [
  {
    title: "Profesional en Cosmetología Natural",
    description: [
      "Con más de 15 años de experiencia en terapias naturales y bienestar holístico, Alejandra Cattaneo se dedica a guiar a sus clientes hacia el rejuvenecimiento y el equilibrio integral.",
      "Su enfoque combina sabiduría ancestral con conocimientos modernos, brindando tratamientos personalizados que nutren el cuerpo y la mente.",
      "Especializada en masajes faciales, fitoterapia y cosmetología natural, Alejandra ofrece un cuidado atento y adaptado a las necesidades únicas de cada cliente."
    ],
    image: "/images/aboutmeBG.webp",
    alt: "Fondo de texto sobre cosmética natural"
  }
];

export function ProfessionalBioSection() {
  return (
    <section
      id="professional"
      className="relative min-h-screen flex flex-col justify-center items-center bg-background py-8"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        

        <Card className="overflow-hidden shadow-xl w-full bg-card animate-fade-in-up opacity-0 
                        max-w-xl md:max-w-3xl lg:max-w-5xl">
          <div className="flex flex-col md:flex-row">

            {/* Imagen */}
            <div className="relative w-full h-64 md:w-1/3 md:h-[500px] lg:h-[550px]">
              <Image
                src="/images/ale.jpg"
                alt="Retrato de Alejandra Cattaneo"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Contenido */}
            <CardContent
              className="relative md:w-2/3 p-6 md:p-8 flex flex-col justify-center text-foreground"
              style={{
                backgroundImage: `url(${about[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 "></div>
              <div className="relative z-10 space-y-4 text-base md:text-lg leading-relaxed">
                {about[0].description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>

          </div>
        </Card>
      </div>
    </section>
  );
}
