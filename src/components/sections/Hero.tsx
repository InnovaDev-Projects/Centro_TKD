import { ArrowRight } from "lucide-react";
import { wolfImg, LINKS } from "../../constants/data";
import { CTAButton } from "../ui/CTAButton";
import { WhatsAppIcon } from "../ui/SocialIcons";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="pt-16 min-h-screen flex items-center bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4 font-body">
              Academia de Taekwondo · Moreno
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
              Disciplina,<br />
              técnica y<br />
              <span className="text-red-600">confianza.</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Clases de Taekwondo para todas las edades. Instructores certificados, instalaciones profesionales y un ambiente de respeto y superación.
            </p>

            <div className="flex flex-wrap gap-3">
              <CTAButton
                href={LINKS.whatsapp}
                variant="primary"
                size="lg"
                ariaLabel="Reservar tu primera clase gratis"
              >
                <WhatsAppIcon size={18} />
                Clase de prueba gratis
                <ArrowRight size={16} />
              </CTAButton>
              <CTAButton
                onClick={scrollToAbout}
                variant="outline"
                size="lg"
                ariaLabel="Conocer más sobre la academia"
              >
                Conocer más
              </CTAButton>
            </div>
          </div>

          {/* Escudo */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <img
                src={wolfImg}
                alt="Escudo oficial de Centro TKD"
                className="w-full h-full object-contain"
                width="384"
                height="384"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
