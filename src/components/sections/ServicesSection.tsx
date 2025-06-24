import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SmilePlus, Leaf, Flower } from "lucide-react";

const services = [
  {
    icon: <SmilePlus className="h-12 w-12 text-primary mb-4" />,
    title: "Masajes Faciales",
    description:
      "Los masajes faciales son una técnica suave y profunda que estimula la circulación, relaja los músculos del rostro y ayuda a reducir signos de tensión. Además, favorecen la luminosidad natural de la piel, brindando una sensación de bienestar y frescura inmediata.",
    delay: "animation-delay-0",
    image: "/images/card2.png",
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary mb-4" />,
    title: "Fitoterapia",
    description:
      "La fitoterapia utiliza el poder curativo de las plantas para promover el equilibrio y la salud integral. A través de infusiones, aceites y preparados naturales, buscamos apoyar los procesos del cuerpo y realzar la belleza desde el interior.",
    delay: "animation-delay-200",
    image: "/images/card1.png",
  },
  {
    icon: <Flower className="h-12 w-12 text-primary mb-4" />,
    title: "Cosmetología Natural",
    description:
      "La cosmetología natural se centra en el cuidado de la piel utilizando ingredientes puros y respetuosos con el organismo. Tratamientos sencillos, efectivos y libres de químicos agresivos para mantener la piel saludable, luminosa y en armonía con la naturaleza.",
    delay: "animation-delay-400",
    image: "/images/card3.png",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-background text-center items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {services.map((service, index) => (
            <div key={index} className={`animate-fade-in-up ${service.delay} opacity-0`}>
              <Card
                className="relative flex flex-col justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden w-full max-w-sm h-[500px] sm:h-[550px] md:h-[600px]"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay oscuro para que el texto se lea bien */}
                <div className="absolute inset-0 "></div>

                <CardHeader className="relative z-10 items-center">
                  {service.icon}
                  <CardTitle className="text-2xl sm:text-3xl font-headline font-light text-primary-foreground">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 p-4">
                  <CardDescription className="text-sm sm:text-base font-bold text-primary-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
