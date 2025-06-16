import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProfessionalBioSection } from '@/components/sections/ProfessionalBioSection';
import { LocationSection } from '@/components/sections/LocationSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProfessionalBioSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
