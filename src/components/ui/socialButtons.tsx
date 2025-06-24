import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <Link
        href="https://www.instagram.com/tu_perfil"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
      >
        <FaInstagram className="w-6 h-6" />
      </Link>
      <Link
        href="https://www.facebook.com/tu_perfil"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
      >
        <FaFacebook className="w-6 h-6" />
      </Link>
      <Link
        href="https://wa.me/tu_numero?text=¡Hola!%20Quiero%20más%20información."
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
