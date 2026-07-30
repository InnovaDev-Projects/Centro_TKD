import { imgNosotrosDiplomas, imgNosotrosGrupo, LINKS } from "../../constants/data";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../ui/FadeIn";
import { CTAButton } from "../ui/CTAButton";
import { WhatsAppIcon } from "../ui/SocialIcons";

export const AboutUs = () => {
  return (
    <section id="about" aria-label="Sobre nosotros" className="py-20 sm:py-28 bg-zinc-900/60 border-t border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mosaico con las 2 fotos oficiales de la Academia */}
          <FadeIn>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg group">
                <img
                  src={imgNosotrosGrupo}
                  alt="Equipo y alumnos de Centro TKD en el Dojang"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg group">
                <img
                  src={imgNosotrosDiplomas}
                  alt="Ceremonia de graduación de diplomas y reconocimientos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
            </div>
          </FadeIn>

          {/* Texto Oficial */}
          <FadeIn delay={0.1}>
            <SectionHeading tag="Sobre nosotros">
              Formamos personas con propósito
            </SectionHeading>

            <div className="space-y-4 text-zinc-300 leading-relaxed text-base mb-8">
              <p>
                En Centro TKD creemos que el entrenamiento es una herramienta para transformar personas. Nuestro propósito va mucho más allá de enseñar técnicas o desarrollar habilidades físicas: buscamos formar personas con disciplina, respeto, perseverancia y confianza en sí mismas.
              </p>
              <p>
                Entendemos que cada alumno llega con una historia, un objetivo y un desafío diferente. Por eso construimos un espacio donde el esfuerzo, la superación personal y el compañerismo son los pilares de cada entrenamiento.
              </p>
              <p>
                Nuestra misión es inspirar a cada persona a descubrir su mejor versión, demostrando que el verdadero crecimiento comienza cuando uno decide enfrentar sus propios límites. Formamos atletas, pero sobre todo formamos personas.
              </p>
            </div>

            <CTAButton href={LINKS.whatsapp} variant="primary" size="md">
              <WhatsAppIcon size={16} />
              Consultar horarios
            </CTAButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
