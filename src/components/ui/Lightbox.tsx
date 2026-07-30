import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_IMAGES } from "../../constants/data";

interface LightboxProps {
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox = ({ currentIndex, onClose, onNavigate }: LightboxProps) => {
  const isOpen = currentIndex !== null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % GALLERY_IMAGES.length);
  }, [currentIndex, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    // Bloquear scroll de body cuando el modal está abierto
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (currentIndex === null || !GALLERY_IMAGES[currentIndex]) return null;

  const currentImg = GALLERY_IMAGES[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador de imagen: ${currentImg.label}`}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        type="button"
        aria-label="Cerrar galería"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Navegación anterior */}
      <button
        type="button"
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
      >
        <ChevronLeft size={26} />
      </button>

      {/* Imagen */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImg.src}
          alt={currentImg.label}
          className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
        />
        <div className="mt-4 text-center">
          <p className="text-white font-semibold text-lg">{currentImg.label}</p>
          <p className="text-neutral-400 text-sm">{currentImg.sub}</p>
          <span className="inline-block text-xs text-neutral-500 mt-1">
            {currentIndex + 1} / {GALLERY_IMAGES.length}
          </span>
        </div>
      </div>

      {/* Navegación siguiente */}
      <button
        type="button"
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
};
