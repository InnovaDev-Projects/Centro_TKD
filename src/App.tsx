import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { AboutUs } from "./components/sections/AboutUs";
import { Features } from "./components/sections/Features";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { Location } from "./components/sections/Location";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsApp } from "./components/sections/FloatingWhatsApp";

export default function CentroTKDLanding() {
  return (
    <div className="bg-zinc-950 text-white font-body min-h-screen overflow-x-hidden">
      {/* Botón para saltar al contenido principal (Accesibilidad A11Y) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-lg focus:font-bold focus:shadow-2xl"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <AboutUs />
        <Features />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
