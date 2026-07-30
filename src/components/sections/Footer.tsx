import { logoImg, LINKS, NAV_LINKS } from "../../constants/data";
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from "../ui/SocialIcons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Marca */}
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Centro TKD" className="w-8 h-8 object-contain" width="32" height="32" />
            <div>
              <p className="font-heading font-bold text-white text-sm">Centro TKD</p>
              <p className="text-zinc-400 text-xs mt-0.5">Academia de Taekwondo · Gran Buenos Aires</p>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-wrap justify-center gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Redes */}
          <div className="flex items-center gap-3">
            {[
              { icon: <InstagramIcon size={16} />, href: LINKS.instagram, label: "Instagram" },
              { icon: <FacebookIcon size={16} />, href: LINKS.facebook, label: "Facebook" },
              { icon: <YoutubeIcon size={16} />, href: LINKS.youtube, label: "YouTube" },
              { icon: <WhatsAppIcon size={16} />, href: LINKS.whatsapp, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
          <p className="text-zinc-500 text-xs">
            © {currentYear} Centro TKD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
