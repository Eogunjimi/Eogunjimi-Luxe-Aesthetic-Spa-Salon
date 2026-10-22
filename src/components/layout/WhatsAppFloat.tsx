import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/business";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-luxe transition-all duration-300 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={24} className="shrink-0" fill="white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
        Chat on WhatsApp
      </span>
    </a>
  );
}
