import { useState } from "react";
import { Play } from "lucide-react";
import { GALLERY_IMAGES, LINKS } from "../../constants/data";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../ui/FadeIn";
import { CTAButton } from "../ui/CTAButton";
import { Lightbox } from "../ui/Lightbox";
import { InstagramIcon } from "../ui/SocialIcons";

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" aria-label="Galería" className="py-20 sm:py-28 bg-zinc-900/60 border-t border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeading tag="Nuestra academia">
              Momentos en el dojang
            </SectionHeading>
            <CTAButton href={LINKS.instagram} size="sm" variant="outline">
              <InstagramIcon size={15} /> Ver más
            </CTAButton>
          </div>
        </FadeIn>

        {/* Galería en grid uniforme */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <FadeIn key={img.label + i} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ver imagen: ${img.label}`}
                className="group relative aspect-square rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none w-full"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <p className="text-white text-xs font-semibold">{img.label}</p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <CTAButton href={LINKS.instagram} size="sm" variant="primary">
              <InstagramIcon size={15} /> Instagram
            </CTAButton>
            <CTAButton href={LINKS.youtube} size="sm" variant="outline">
              <Play size={15} /> YouTube
            </CTAButton>
          </div>
        </FadeIn>
      </div>

      <Lightbox
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
