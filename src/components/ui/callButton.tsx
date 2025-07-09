import { WHATSAPP_NUMBER } from "@/config/constants";
import { Phone } from "lucide-react";

interface CallButtonProps {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function CallButton({ label = "Llamar", className, icon }: CallButtonProps) {
  return (
    <a
      href={`tel:${WHATSAPP_NUMBER}`}
      className={`inline-flex items-center text-center gap-2 px-4 py-2 bg-primary rounded-md hover:opacity-80 transition ${className}`}
    >
      {icon}
      {label}
    </a>
  );
}
