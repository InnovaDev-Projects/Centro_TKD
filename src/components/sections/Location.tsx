import { MapPin, Clock, Calendar } from "lucide-react";
import { LINKS } from "../../constants/data";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../ui/FadeIn";
import { CTAButton } from "../ui/CTAButton";
import { WhatsAppIcon } from "../ui/SocialIcons";

export const Location = () => {
  return (
    <section id="location" aria-label="Ubicación y horarios" className="py-20 sm:py-28 bg-zinc-900/60 border-t border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <SectionHeading tag="Dónde estamos">
            Vení a conocernos
          </SectionHeading>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Mapa */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
              <iframe
                title="Ubicación de Centro TKD"
                src={LINKS.mapsEmbed}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: 320,
                  filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.15)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-1">Dirección</p>
                <p className="text-white font-semibold">Pres. Juan Domingo Perón 1241</p>
                <p className="text-zinc-400 text-sm">B1744FKC, Gran Buenos Aires, Argentina</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-2">Horarios</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <Clock size={15} className="text-zinc-400 shrink-0" />
                    <span>Lunes a Viernes · 09:00 – 21:00 hs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <Calendar size={15} className="text-zinc-400 shrink-0" />
                    <span>Sábados · 09:00 – 13:00 hs</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <CTAButton href={LINKS.maps} size="sm" variant="outline" className="w-full justify-center">
                  <MapPin size={15} /> Ver en Google Maps
                </CTAButton>
                <CTAButton href={LINKS.whatsapp} size="sm" variant="primary" className="w-full justify-center">
                  <WhatsAppIcon size={15} /> Consultar por WhatsApp
                </CTAButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
