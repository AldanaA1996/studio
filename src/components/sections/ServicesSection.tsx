import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SmilePlus, Leaf, Sparkles } from "lucide-react"; // Using SmilePlus for Facial Massage

const services = [
  {
    icon: <SmilePlus className="h-12 w-12 text-primary mb-4" />,
    title: "Facial Massages",
    description: "Rejuvenating facial massages designed to relax, revitalize, and restore your natural glow.",
    delay: "animation-delay-0"
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary mb-4" />,
    title: "Phytotherapy",
    description: "Harness the healing power of plants with our expert phytotherapy consultations and remedies.",
    delay: "animation-delay-200"
  },
  {
    icon: <Sparkles className="h-12 w-12 text-primary mb-4" />,
    title: "Natural Cosmetology",
    description: "Embrace your beauty with our natural cosmetology services, using pure and gentle ingredients.",
    delay: "animation-delay-400"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 md:mb-16 text-primary">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`animate-fade-in-up ${service.delay} opacity-0`}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-card">
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle className="text-2xl font-headline text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
