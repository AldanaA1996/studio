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
  message = "Hello, I'd like to schedule an appointment.",
  label = "Book an Appointment",
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
      className={`bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {label}
    </Button>
  );
}
