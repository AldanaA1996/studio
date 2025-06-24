import { KaunaLogo } from '@/components/icons/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { IgIcon } from '../icons/IgIcon';
import { SocialLinks } from '../ui/socialButtons';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center mb-6">
          <KaunaLogo className="h-12 text-primary w-auto" />
        </div>
        <p className="mb-4">
         Rauch 186, Bragado, Buenos Aires, Argentina
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <SocialLinks />
          
          
        </div>
        <p className="text-sm">
          &copy; {currentYear} Kaûna Estudio Cosmetológico. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with <span className="text-primary">&hearts;</span> by StrayDev
        </p>
      </div>
    </footer>
  );
}
