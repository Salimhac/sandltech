import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '254700000000';
const MESSAGE = encodeURIComponent(
  'Hello S&L Tech, I would like to inquire about your web and mobile development services.'
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      style={{ background: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
      <span className="text-white font-semibold text-sm hidden sm:block">
        Chat With Us
      </span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
    </a>
  );
}
