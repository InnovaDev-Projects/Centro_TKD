import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { logoImg, LINKS, NAV_LINKS } from "../../constants/data";
import { CTAButton } from "../ui/CTAButton";
import { WhatsAppIcon } from "../ui/SocialIcons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-zinc-950/98 border-b border-zinc-800"
          : "bg-zinc-950/90 border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
          aria-label="Ir al inicio"
        >
          <img
            src={logoImg}
            alt="Centro TKD"
            className="w-9 h-9 object-contain"
            width="36"
            height="36"
          />
          <span className="font-heading font-bold text-white text-lg tracking-tight">
            Centro TKD
          </span>
        </button>

        {/* Links escritorio */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
            >
              {link.label}
            </button>
          ))}
          <CTAButton href={LINKS.whatsapp} size="sm" variant="primary" ariaLabel="Clase gratis">
            <WhatsAppIcon size={15} /> Clase gratis
          </CTAButton>
        </div>

        {/* Menú móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white focus-visible:ring-2 focus-visible:ring-red-600 rounded"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Panel móvil */}
      {menuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 px-5 py-4 flex flex-col gap-1 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-zinc-300 hover:text-white py-2.5 text-sm font-medium border-b border-zinc-900 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <CTAButton href={LINKS.whatsapp} size="sm" variant="primary" className="w-full">
              <WhatsAppIcon size={15} /> Reservar clase gratis
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
};
