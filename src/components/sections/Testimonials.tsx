import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS_DATA, LINKS } from "../../constants/data";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../ui/FadeIn";

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [visCount, setVisCount] = useState(1);
  const touchStart = useRef<number | null>(null);
  const total = TESTIMONIALS_DATA.length;

  const navigate = useCallback(
    (direction: number) => {
      setCurrent((prev) => (prev + direction + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => navigate(1), 5000);
    return () => clearInterval(interval);
  }, [autoPlay, navigate]);

  useEffect(() => {
    const handleResize = () => setVisCount(window.innerWidth >= 768 ? 2 : 1);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleManualNav = (direction: number) => {
    setAutoPlay(false);
    navigate(direction);
  };

  return (
    <section id="testimonials" aria-label="Opiniones de alumnos" className="py-20 sm:py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading tag="Reseñas verificadas">
              Opiniones en Google Maps
            </SectionHeading>
            <a
              href={LINKS.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors self-start md:self-auto font-body shadow-sm"
            >
              <span>Ver todas en Google Maps</span>
              <ExternalLink size={14} className="text-red-500" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="relative overflow-hidden"
            onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStart.current === null) return;
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) handleManualNav(diff > 0 ? 1 : -1);
              touchStart.current = null;
            }}
          >
            <div
              className="flex transition-transform duration-400 ease-out"
              style={{ transform: `translateX(-${current * (100 / visCount)}%)` }}
            >
              {TESTIMONIALS_DATA.map((t, idx) => (
                <div
                  key={t.name + idx}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / visCount}%` }}
                >
                  <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} size={14} className="fill-red-500 text-red-500" />
                          ))}
                        </div>
                        <span className="text-[11px] font-medium text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800/80">
                          Google Maps
                        </span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-850">
                      <div className="w-9 h-9 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 flex items-center justify-center font-bold text-sm font-heading">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-zinc-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de navegación y badge de sincronización */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => handleManualNav(-1)}
                className="w-9 h-9 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {TESTIMONIALS_DATA.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Testimonio ${i + 1}`}
                    onClick={() => { setAutoPlay(false); setCurrent(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-red-600" : "w-1.5 bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Siguiente"
                onClick={() => handleManualNav(1)}
                className="w-9 h-9 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <a
              href={LINKS.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 font-body"
            >
              <span>★ 4.9 / 5.0 en Google Maps · Conectar y dejar una reseña</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
