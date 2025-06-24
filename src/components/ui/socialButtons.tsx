import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <Link
        href="https://www.instagram.com/studio.kauna?igsh=emJndjZ0Y2VsZTB2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
      >
        <FaInstagram className="w-6 h-6" />
      </Link>
      
      <Link
        href="https://wa.me/2342470427?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
      >
        <FaWhatsapp className="w-6 h-6" />
      </Link>
    </div>
  );
}
