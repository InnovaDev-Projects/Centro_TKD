import { useState, useEffect } from "react";
import { LINKS } from "../../constants/data";
import { WhatsAppIcon } from "../ui/SocialIcons";

export const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center shadow-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <WhatsAppIcon size={24} className="text-white" />
    </a>
  );
};
