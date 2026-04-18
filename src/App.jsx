import { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldCheck, Zap, Users, Trophy, Star, Menu, X, MapPin,
  ChevronDown, Play, ChevronLeft, ChevronRight, Quote, Clock,
  ArrowRight, Heart, Target, Award, Flame, Swords, Calendar,
  Video, Expand
} from "lucide-react";

/* ═══════════════════════════════════════════
   IMPORTS: Assets
   ═══════════════════════════════════════════ */

import logo from "./assets/wolf.png";
import logo2 from "./assets/logo.png"
import imgDojang from "./assets/dojang-principal.jpeg";
import imgGraduacion from "./assets/graduacion-alumnos.jpeg";
import imgLuces from "./assets/dojang-luces-led.jpeg";
import imgExhibicion from "./assets/exhibicion-teatro.jpeg";
import imgComunidad from "./assets/comunidad-bandera.jpeg";
import imgCompetencia from "./assets/competencia-diplomas.jpeg";
import imgTorneo from "./assets/torneo-equipo.jpeg";
import imgViaje from "./assets/viaje-playa-medallas.jpeg";

/* ═══════════════════════════════════════════
   ICONOS SOCIALES (no existen en Lucide)
   ═══════════════════════════════════════════ */

const Instagram = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5", size }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={size ? { width: size, height: size } : undefined}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ═══════════════════════════════════════════
   CONFIGURACIÓN
   ═══════════════════════════════════════════ */

const FD = "'Bebas Neue', sans-serif";
const FB = "'DM Sans', 'Helvetica Neue', sans-serif";

const LINKS = {
  whatsapp: "https://api.whatsapp.com/send/?phone=1144353469&text&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/centro.tkd/",
  facebook: "https://www.facebook.com/profile.php?id=100086311917381&sk=about",
  youtube: "https://www.youtube.com/@Centrotkd",
  maps: "https://www.google.com/maps?q=Centro+TKD+-+Taekwondo+%26+Fitness,+Pres.+Juan+Domingo+Per%C3%B3n+1241,+B1744FKC+Gran+Buenos+Aires,+Provincia+de+Buenos+Aires",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5!2d-58.6!3d-34.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95004ae03313%3A0xdcb99955666c6809!2sCentro%20TKD%20-%20Taekwondo%20%26%20Fitness!5e0!3m2!1ses-419!2sar!4v1700000000000",
};

const GALLERY_IMAGES = [
  { src: imgDojang, label: "Nuestro Dojang", sub: "Área de entrenamiento principal" },
  { src: imgGraduacion, label: "Graduación", sub: "Entrega de certificados" },
  { src: imgLuces, label: "Centro TKD", sub: "Ambiente único de entrenamiento" },
  { src: imgExhibicion, label: "Exhibición", sub: "Evento de fin de año" },
  { src: imgComunidad, label: "Competencia", sub: "Representando a Centro TKD" },
  { src: imgTorneo, label: "Pequeños ninjas", sub: "Alumnos menores" },
  { src: imgViaje, label: "Competencia", sub: "Nuestros campeones" },
  { src: imgCompetencia, label: "Eventos", sub: "Entrega de diplomas" }
];

/* ═══════════════════════════════════════════
   UTILIDADES
   ═══════════════════════════════════════════ */

const FadeIn = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const SectionHeading = ({ tag, children }) => (
  <div className="text-center mb-14">
    <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">{tag}</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight" style={{ fontFamily: FD, letterSpacing: "1px" }}>
      {children}
    </h2>
  </div>
);

const CTAButton = ({ href, children, size = "md", variant = "primary", className = "", onClick }) => {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 active:scale-95 text-center cursor-pointer";
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-8 py-4 text-base", lg: "px-10 py-4 text-lg" };
  const variants = {
    primary: "bg-red-600 hover:bg-red-500 text-white hover:shadow-xl hover:shadow-red-600/20",
    whatsapp: "bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-xl hover:shadow-emerald-600/20",
    outline: "border border-white/15 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/5",
  };
  if (onClick) {
    return <button onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>{children}</button>;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>{children}</a>;
};

/* ═══════════════════════════════════════════
   COMPONENTE: Navbar
   ═══════════════════════════════════════════ */

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Nosotros", id: "about" },
    { label: "Beneficios", id: "features" },
    { label: "Galería", id: "gallery" },
    { label: "Testimonios", id: "testimonials" },
    { label: "Ubicación", id: "location" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-neutral-950/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
          <img src={logo2} alt="Centro TKD" className={`w-15 h-15 object-contain rounded-lg`} />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
              {l.label}
            </button>
          ))}
          <CTAButton href={LINKS.whatsapp} size="sm" variant="whatsapp">
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </CTAButton>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-1">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-5 pb-5 pt-2 flex flex-col gap-2" style={{ background: "rgba(10,10,10,.97)" }}>
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setMenuOpen(false); }}
              className="text-left text-neutral-300 hover:text-white py-2.5 border-b border-white/5 flex items-center gap-3">
              <ArrowRight size={14} className="text-red-500" /> {l.label}
            </button>
          ))}
          <div className="flex gap-3 mt-3">
            <CTAButton href={LINKS.whatsapp} size="sm" variant="whatsapp" className="flex-1">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </CTAButton>
            <CTAButton href={LINKS.instagram} size="sm" variant="primary" className="flex-1">
              <Instagram size={16} /> Instagram
            </CTAButton>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ═══════════════════════════════════════════
   COMPONENTE: Hero
   ═══════════════════════════════════════════ */

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background layers */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-neutral-950 to-neutral-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[.07]"
        style={{ background: "radial-gradient(circle, #dc2626 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-xs text-neutral-400 tracking-wide uppercase">
            <Calendar size={13} className="text-red-500" />
            Inscripciones abiertas
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[.95] tracking-tight mb-6"
            style={{ fontFamily: FD, letterSpacing: 1 }}>
            Transformá tu vida<br /><span className="text-red-500">con Taekwondo</span>
          </h1>

          <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            Disciplina, confianza y bienestar físico en un solo lugar. Clases para todas las edades con instructores certificados.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <CTAButton href={LINKS.whatsapp} variant="whatsapp">
              <WhatsAppIcon className="w-5 h-5" />
              Reservá tu clase gratis
              <ArrowRight size={18} />
            </CTAButton>
            <CTAButton onClick={() => scrollTo("features")} size="md" variant="outline">
              Conocé más <ChevronDown size={18} className="animate-bounce" />
            </CTAButton>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
            {[
              { icon: <Instagram size={17} />, href: LINKS.instagram, label: "Instagram" },
              // { icon: <FacebookIcon size={17} />, href: LINKS.facebook, label: "Facebook" },
              { icon: <Youtube size={17} />, href: LINKS.youtube, label: "YouTube" },
              { icon: <WhatsAppIcon className="w-[17px] h-[17px]" />, href: LINKS.whatsapp, label: "WhatsApp" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Right visual — properly leveled hero graphic */}
        <div className="flex-1 max-w-md lg:max-w-lg w-full flex items-center">
          <div className="relative w-full">
            <div className="absolute -inset-8 bg-red-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-b from-neutral-900/80 to-black border border-white/10 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
              <img src={logo} alt="Centro TKD" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
              {/* Overlay badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                <Award size={12} className="text-red-500" /> Desde -
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   COMPONENTE: Sobre Nosotros (con video)
   ═══════════════════════════════════════════ */

const AboutUs = () => (
  <section id="about" className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5">
      <FadeIn>
        <SectionHeading tag="Sobre nosotros">
          Conocé <span className="text-red-500">Centro TKD</span>
        </SectionHeading>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Video placeholder */}
        <FadeIn delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden border border-white/[.06] aspect-video bg-neutral-900 group">
            <img src={imgComunidad} alt="Centro TKD comunidad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

            <button onClick={() => window.open(LINKS.youtube, "_blank")} className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-600/30">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
            </button>

            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-xs text-neutral-300 flex items-center gap-1.5">
              <Video size={12} className="text-red-500" />
              Ver en YouTube
            </div>
          </div>
        </FadeIn>

        {/* Texto */}
        <FadeIn delay={0.2}>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: FD, letterSpacing: 1 }}>
              Más que un deporte,<br /><span className="text-red-500">un estilo de vida</span>
            </h3>

            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>Centro TKD nació con la misión de formar personas a través del Taekwondo. No solo enseñamos técnicas de combate, sino que transmitimos valores como la disciplina, el respeto, la perseverancia y la humildad.</p>
              <p>Nuestro equipo de instructores certificados trabaja con alumnos desde los 4 años hasta adultos, adaptando cada clase al nivel y objetivos de cada persona.</p>
              <p>Contamos con instalaciones equipadas con tatami profesional, espejos, iluminación LED, y todo lo necesario para entrenar al más alto nivel.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { val: "+200", label: "Alumnos activos" },
                { val: "+10", label: "Años formando" },
                { val: "4.9★", label: "Valoración" },
              ].map((s, i) => (
                <div key={i} className="bg-white/[.03] border border-white/[.06] rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-white" style={{ fontFamily: FD, letterSpacing: 1 }}>{s.val}</div>
                  <div className="text-xs text-neutral-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton href={LINKS.whatsapp} variant="whatsapp" size="md">
                <WhatsAppIcon className="w-5 h-5" />
                Consultá horarios y precios
                <ArrowRight size={16} />
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   COMPONENTE: Features
   ═══════════════════════════════════════════ */

const Features = () => {
  const items = [
    { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: "Defensa personal", desc: "Aprendé técnicas reales de Taekwondo que te dan seguridad en cualquier situación." },
    { icon: <Zap size={28} strokeWidth={1.5} />, title: "Condición física", desc: "Mejorá tu fuerza, flexibilidad y resistencia con entrenamientos dinámicos y exigentes." },
    { icon: <Users size={28} strokeWidth={1.5} />, title: "Comunidad", desc: "Formá parte de un grupo que te motiva, te apoya y crece con vos cada día." },
    { icon: <Trophy size={28} strokeWidth={1.5} />, title: "Competencia oficial", desc: "Participá en torneos y alcanzá tus metas con el respaldo de instructores de élite." },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]" />
      <div className="relative max-w-6xl mx-auto px-5">
        <FadeIn>
          <SectionHeading tag="La solución">
            Todo lo que Centro TKD<span className="text-red-500"> ofrece para vos</span>
          </SectionHeading>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-white/[.02] hover:bg-white/[.05] border border-white/[.06] hover:border-red-500/30 rounded-2xl p-7 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   COMPONENTE: Galería con fotos reales
   ═══════════════════════════════════════════ */

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <SectionHeading tag="Nuestra comunidad">
            Momentos que nos<span className="text-red-500"> definen</span>
          </SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => {
            const isLarge = i === 0 || i === 4 || i === 8;
            return (
              <FadeIn key={i} delay={i * 0.06}>
                <button
                  onClick={() => setLightbox(i)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] w-full ${isLarge ? "aspect-[4/3]" : "aspect-square"}`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-white font-semibold text-sm">{img.label}</p>
                    <p className="text-neutral-400 text-xs">{img.sub}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand size={14} />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-red-500/30 transition-all duration-500" />
                </button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href={LINKS.instagram} size="sm" variant="primary">
              <Instagram size={16} /> Ver más en Instagram
            </CTAButton>
            <CTAButton href={LINKS.youtube} size="sm" variant="outline">
              <Play size={16} /> Ver videos en YouTube
            </CTAButton>
            <CTAButton href={LINKS.facebook} size="sm" variant="outline">
              <Facebook size={16} /> Seguinos en Facebook
            </CTAButton>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setLightbox(null)}>
            <X size={20} />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>
            <ChevronLeft size={20} />
          </button>
          <img src={GALLERY_IMAGES[lightbox].src} alt={GALLERY_IMAGES[lightbox].label} className="max-w-full max-h-[85vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY_IMAGES.length); }}>
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-semibold text-sm">{GALLERY_IMAGES[lightbox].label}</p>
            <p className="text-neutral-400 text-xs mt-0.5">{lightbox + 1} / {GALLERY_IMAGES.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};

/* ═══════════════════════════════════════════
   COMPONENTE: Testimonios (Carousel)
   ═══════════════════════════════════════════ */

const Testimonials = () => {
  const items = [
    { name: "Martín García", role: "Alumno adulto · 2 años", initials: "MG", quote: "Centro TKD cambió mi rutina por completo. Llegué buscando actividad física y encontré disciplina, amigos y una mejor versión de mí mismo." },
    { name: "Carolina López", role: "Madre de alumno · 1 año", initials: "CL", quote: "Mi hijo de 8 años mejoró su concentración y confianza en pocos meses. Los profes son increíbles y el ambiente es muy contenedor." },
    { name: "Luciano Fernández", role: "Alumno competitivo · 3 años", initials: "LF", quote: "Gracias a Centro TKD pude competir a nivel nacional. La preparación técnica y mental que recibí acá no la encontré en ningún otro lado." },
    { name: "Sofía Martínez", role: "Alumna · 6 meses", initials: "SM", quote: "Empecé sin saber nada y hoy me siento más fuerte y segura. El grupo te hace sentir parte de una familia desde el primer día." },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const touchStart = useRef(null);

  const go = useCallback((dir) => setCurrent((p) => (p + dir + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [autoPlay, go]);

  const handleNav = (dir) => { setAutoPlay(false); go(dir); };

  const [visCount, setVisCount] = useState(1);
  useEffect(() => {
    const fn = () => setVisCount(window.innerWidth >= 768 ? 2 : 1);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5">
        <FadeIn><SectionHeading tag="Testimonios">Lo que dicen nuestros alumnos</SectionHeading></FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative"
            onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStart.current === null) return;
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) handleNav(diff > 0 ? 1 : -1);
              touchStart.current = null;
            }}>
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * (100 / visCount)}%)` }}>
                {items.map((t, i) => (
                  <div key={i} className="shrink-0 px-2" style={{ width: `${100 / visCount}%` }}>
                    <div className="bg-white/[.03] border border-white/[.06] rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group hover:border-white/10 transition-all duration-500">
                      <Quote size={48} className="absolute top-4 right-4 text-red-500/[.07]" strokeWidth={1} />
                      <div className="flex items-center gap-1 mb-5 text-red-500">
                        {Array(5).fill(null).map((_, j) => <Star key={j} size={16} className="fill-red-500" />)}
                      </div>
                      <p className="text-neutral-300 leading-relaxed mb-6 text-[15px] flex-1 relative z-10">"{t.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-sm font-bold border border-red-500/20">{t.initials}</div>
                        <div>
                          <p className="text-sm font-semibold">{t.name}</p>
                          <p className="text-xs text-neutral-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => handleNav(-1)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button key={i} onClick={() => { setAutoPlay(false); setCurrent(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-red-500" : "w-2 bg-white/20 hover:bg-white/40"}`} />
                ))}
              </div>
              <button onClick={() => handleNav(1)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   COMPONENTE: Ubicación / Mapa
   ═══════════════════════════════════════════ */

const Location = () => (
  <section id="location" className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5">
      <FadeIn>
        <SectionHeading tag="Ubicación">Vení a<span className="text-red-500"> conocernos</span></SectionHeading>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/[.06] aspect-video lg:aspect-auto lg:min-h-[400px] bg-neutral-900">
            <iframe title="Centro TKD Ubicación" src={LINKS.mapsEmbed} width="100%" height="100%"
              style={{ border: 0, minHeight: 400, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

          <div className="lg:col-span-2 bg-white/[.03] border border-white/[.06] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-5">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: FD, letterSpacing: 1 }}>Centro TKD</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-1">Taekwondo & Fitness</p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Pres. Juan Domingo Perón 1241<br />B1744FKC, Gran Buenos Aires<br />Provincia de Buenos Aires
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Clock size={16} className="text-red-500/60 shrink-0" /> Lunes a Viernes · 9:00 – 21:00
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Clock size={16} className="text-red-500/60 shrink-0" /> Sábados · 9:00 – 13:00
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <CTAButton href={LINKS.maps} size="sm" variant="outline" className="w-full">
                <MapPin size={16} /> Abrir en Google Maps
              </CTAButton>
              <CTAButton href={LINKS.whatsapp} size="sm" variant="whatsapp" className="w-full">
                <WhatsAppIcon className="w-4 h-4" /> Consultar por WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   COMPONENTE: CTA Final
   ═══════════════════════════════════════════ */

const FinalCTA = () => (
  <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-red-950/10 to-neutral-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #dc2626 0%, transparent 70%)" }} />
    </div>
    <FadeIn>
      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5" style={{ fontFamily: FD, letterSpacing: 1 }}>
          Tu primera clase<span className="text-red-500"> es gratis</span>
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          No importa tu edad ni experiencia. Vení a conocernos, probá una clase sin compromiso y descubrí lo que el Taekwondo puede hacer por vos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href={LINKS.whatsapp} size="lg" variant="whatsapp">
            <WhatsAppIcon className="w-5 h-5" /> Escribinos por WhatsApp <ArrowRight size={18} />
          </CTAButton>
          <CTAButton href={LINKS.instagram} size="lg" variant="primary">
            <Instagram size={18} /> Seguinos en Instagram
          </CTAButton>
        </div>
        <p className="text-neutral-600 text-xs mt-6">Sin costo · Sin compromiso · Cupos limitados</p>
      </div>
    </FadeIn>
  </section>
);

/* ═══════════════════════════════════════════
   COMPONENTE: Footer
   ═══════════════════════════════════════════ */

const Footer = () => (
  <footer className="border-t border-white/5 py-10">
    <div className="max-w-6xl mx-auto px-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img src={logo2} alt="Centro TKD" className={`w-15 h-15 object-contain rounded-lg`} />
          <span className="text-sm text-neutral-500">© {new Date().getFullYear()} Centro TKD. Todos los derechos reservados.</span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "Nosotros", id: "about" },
            { label: "Beneficios", id: "features" },
            { label: "Galería", id: "gallery" },
            { label: "Testimonios", id: "testimonials" },
            { label: "Ubicación", id: "location" },
          ].map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-xs text-neutral-500 hover:text-white transition-colors duration-300 hidden sm:block">
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: <Instagram size={16} />, href: LINKS.instagram },
            { icon: <Facebook size={16} />, href: LINKS.facebook },
            { icon: <Youtube size={16} />, href: LINKS.youtube },
            { icon: <WhatsAppIcon className="w-4 h-4" />, href: LINKS.whatsapp },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/20 transition-all duration-300">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════
   COMPONENTE: WhatsApp flotante
   ═══════════════════════════════════════════ */

const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center shadow-2xl shadow-emerald-600/30 transition-all duration-500 active:scale-90 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      title="Contactanos por WhatsApp">
      <WhatsAppIcon className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
    </a>
  );
};

/* ═══════════════════════════════════════════
   ROOT: Ensamblaje
   ═══════════════════════════════════════════ */

export default function CentroTKDLanding() {
  return (
    <div style={{ fontFamily: FB }} className="bg-neutral-950 text-white min-h-screen overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Bebas+Neue&display=swap" rel="stylesheet" />
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Gallery />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}