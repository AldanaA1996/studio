import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const about = [
  {
    title: "Profesional en Cosmetología Natural",
    description: [
     "Soy Alejandra Goyeneche, cosmetóloga especializada en el cuidado integral y consciente de la piel. Mi enfoque combina técnicas naturales, masajes faciales y fitoterapia, trabajando desde adentro hacia afuera para realzar la belleza natural, aliviar tensiones y recuperar el equilibrio.",

    "Mi camino comenzó durante la pandemia, cuando descubrí que las líneas de expresión no solo hablan del paso del tiempo, sino también de emociones y tensiones acumuladas. Esa curiosidad me llevó a formarme en Masaje Facial Estructural Profundo y a especializarme en cosmetología natural, incorporando siempre el respeto por la piel y el amor por las plantas.",

    "Con el tiempo comprendí que muchas alteraciones cutáneas tienen su origen en desequilibrios internos —digestivos, hormonales, emocionales—, por lo que también me formé en Fitoterapia Aplicada para ofrecer un abordaje verdaderamente integral.",
    
    "Hoy acompaño a mujeres desde Kaûna, Estudio Cosmetológico Integral en Bragado, con sesiones personalizadas, protocolos de fitodermocosmética y asesorías presenciales u online de automasaje, cuidado facial y uso de plantas medicinales.",

    "Creo profundamente que cuidar la piel es una forma de habitar el cuerpo con presencia, amor y respeto."
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
                         md:max-w-7xl ">
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

              <div className="relative z-10 space-y-4 text-primary-foreground text-lg md:text-xl leading-relaxed max-h-[400px] overflow-y-auto pr-2">
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
