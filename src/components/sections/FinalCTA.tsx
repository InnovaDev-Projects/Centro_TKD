import { ArrowRight } from "lucide-react";
import { LINKS } from "../../constants/data";
import { FadeIn } from "../ui/FadeIn";
import { WhatsAppIcon } from "../ui/SocialIcons";

export const FinalCTA = () => {
  return (
    <section id="cta" aria-label="Clase de prueba" className="py-20 sm:py-28 bg-red-600">
      <FadeIn>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
            Tu primera clase es gratis
          </h2>
          <p className="text-red-100 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Sin importar tu edad ni experiencia. Vení a conocer la academia y probá una clase sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-900 font-semibold px-6 py-3 rounded-md transition-colors text-sm font-body shadow-lg"
            >
              <WhatsAppIcon size={18} />
              Reservar por WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
          <p className="text-red-200 text-xs mt-6 font-medium">
            Sin costo de inscripción previa · Cupos limitados
          </p>
        </div>
      </FadeIn>
    </section>
  );
};
