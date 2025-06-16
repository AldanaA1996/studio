import { KaunaLogo } from '@/components/icons/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center mb-6">
          <KaunaLogo className="h-12 text-primary w-auto" />
        </div>
        <p className="mb-4">
          123 Wellness Lane, Serenity City, ST 12345
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Kaûna Wellness Center. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with <span className="text-primary">&hearts;</span> by Nature&apos;s Touch
        </p>
      </div>
    </footer>
  );
}
