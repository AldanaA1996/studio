"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hola, me gustaria reservar un turno.",
  label = "Reserva tu turno",
  className,
}: WhatsAppButtonProps) {
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppRedirect}
      variant="default"
      size="lg"
      className={`bg-accent hover:bg-accent/90 text-accent-foreground hover:text-background shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    >
      <MessageCircle className="mr-2 h-8 w-8" />
      {label}
    </Button>
  );
}
