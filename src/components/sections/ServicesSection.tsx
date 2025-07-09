import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SmilePlus, Leaf, Flower } from "lucide-react";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MASAJE_LABEL,
  WHATSAPP_MASAJE_MESSAGE,
  WHATSAPP_FITOTERAPIA_LABEL,
  WHATSAPP_FITOTERAPIA_MESSAGE,
  WHATSAPP_COSMETOLOGIA_LABEL,
  WHATSAPP_COSMETOLOGIA_MESSAGE,
} from "@/config/constants";

const services = [
  {
    icon: <SmilePlus className="h-12 w-12 text-primary" />,
    title: "Masajes Faciales",
    description:
      "Los masajes faciales son una técnica suave y profunda que estimula la circulación, relaja los músculos del rostro y ayuda a reducir signos de tensión. Además, favorecen la luminosidad natural de la piel, brindando una sensación de bienestar y frescura inmediata.",
    delay: "animation-delay-0",
    image: "/images/card1.webp",
    btnLabel: WHATSAPP_MASAJE_LABEL,
    btnMessage: WHATSAPP_MASAJE_MESSAGE,
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: "Fitoterapia",
    description:
      "La fitoterapia utiliza el poder curativo de las plantas para promover el equilibrio y la salud integral. A través de infusiones, aceites y preparados naturales, buscamos apoyar los procesos del cuerpo y realzar la belleza desde el interior.",
    delay: "animation-delay-200",
    image: "/images/card2.webp",
    btnLabel: WHATSAPP_FITOTERAPIA_LABEL,
    btnMessage: WHATSAPP_FITOTERAPIA_MESSAGE,
  },
  {
    icon: <Flower className="h-12 w-12 text-primary" />,
    title: "Fitodermocosmética",
    description:
      "La fitodermocosmética se centra en el cuidado de la piel utilizando ingredientes puros y respetuosos con el organismo. Tratamientos sencillos, efectivos y libres de químicos agresivos para mantener la piel saludable, luminosa y en armonía con la naturaleza.",
    delay: "animation-delay-400",
    image: "/images/card3.webp",
    btnLabel: WHATSAPP_COSMETOLOGIA_LABEL,
    btnMessage: WHATSAPP_COSMETOLOGIA_MESSAGE,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-16 pb-8 bg-background text-center items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {services.map((service, index) => (
            <div key={index} className={`animate-fade-in-up ${service.delay} opacity-0`}>
              <Card
                className="relative flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden w-full max-w-sm h-[550px] md:h-[600px]"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative z-10 flex flex-col items-center justify-center flex-grow p-6 gap-6">
                  {/* Icono + Título */}
                  <div className="flex flex-col items-center space-y-2">
                    {service.icon}
                    <h3 className="text-4xl md:text-3xl font-headline font-light text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <div className="min-h-[180px] flex items-center justify-center w-full px-4">
                    <p className="text-lg text-primary-foreground text-center">
                      {service.description}
                    </p>
                  </div>

                  {/* Botón */}
                  <WhatsAppButton
                    phoneNumber={WHATSAPP_NUMBER}
                    label={service.btnLabel}
                    message={service.btnMessage}
                    className="w-fit py-2 bg-primary text-primary-foreground"
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
