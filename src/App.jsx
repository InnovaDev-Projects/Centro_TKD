import { useState, useEffect, useRef, useCallback } from "react";
import logoUrl from "./assets/logo.png";
import wolfUrl from "./assets/wolf.png";
import {
  ShieldCheck, Zap, Users, Trophy, Star, Menu, X, MapPin,
  ChevronDown, Play, ChevronLeft, ChevronRight, Quote, Clock,
  ArrowRight,
  Heart, Target, Award, Flame, Swords, Calendar
} from "lucide-react";

// Importar links desde utils/links.js
import { LINKS } from "./utils/links";

// Importar iconos desde ui
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { FacebookIcon } from "./ui/FacebookIcon";


/* ── Replace this URL with your actual logo ── */
const LOGO_URL = logoUrl;
const WOLF_IMAGE = wolfUrl;

const FD = "'Bebas Neue', sans-serif";
const FB = "'DM Sans', 'Helvetica Neue', sans-serif";

/* ═══════════════════════════════════════════
   SOCIAL ICON: WhatsApp (not in Lucide)
   ═══════════════════════════════════════════ */



const Instagram = ({ className = "w-5 h-5", size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: size, height: size }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ className = "w-5 h-5", size }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: size, height: size }}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ═══════════════════════════════════════════
   UTILITY: Fade-in on scroll
   ═══════════════════════════════════════════ */
const FadeIn = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}
      style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`
      }}>
      {children}
    </div>
  );
};

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ═══════════════════════════════════════════
   UTILITY: Section heading
   ═══════════════════════════════════════════ */
const SectionHeading = ({ tag, children }) => (
  <div className="text-center mb-14">
    <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">{tag}</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight" style={{ fontFamily: FD, letterSpacing: "1px" }}>
      {children}
    </h2>
  </div>
);

/* ═══════════════════════════════════════════
   UTILITY: CTA Button
   ═══════════════════════════════════════════ */
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
   UTILITY: Logo component
   ═══════════════════════════════════════════ */
const Logo = ({ size = "md" }) => {
  const dims = size === "sm" ? "w-8 h-8" : "w-15 h-15";
  if (LOGO_URL) {
    return <img src={LOGO_URL} alt="Centro TKD" className={`${dims} object-contain rounded-lg`} />;
  }
  return (
    <div className={`${dims} rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0`}
      style={{ fontFamily: FD, fontSize: size === "sm" ? 14 : 18, letterSpacing: 1, fontWeight: 700 }}>
      TKD
    </div>
  );
};

/* ═══════════════════════════════════════════
   COMPONENT: Navbar
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
    { label: "Beneficios", id: "features", icon: <ShieldCheck size={14} /> },
    { label: "Galería", id: "gallery", icon: <Trophy size={14} /> },
    { label: "Testimonios", id: "testimonials", icon: <Users size={14} /> },
    { label: "Ubicación", id: "location", icon: <MapPin size={14} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-neutral-950/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
          <Logo />
        </div>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
              {l.icon} {l.label}
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

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "rgba(10,10,10,.97)" }}>
        <div className="px-5 pb-5 pt-2 flex flex-col gap-2">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setMenuOpen(false); }}
              className="text-left text-neutral-300 hover:text-white py-2.5 border-b border-white/5 flex items-center gap-3">
              <span className="text-red-500">{l.icon || <ArrowRight size={14} />}</span> {l.label}
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
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════════
   COMPONENT: Hero Section
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
              { icon: <FacebookIcon size={17} />, href: LINKS.facebook, label: "Facebook" },
              { icon: <Youtube size={17} />, href: LINKS.youtube, label: "YouTube" },
              { icon: <WhatsAppIcon className="w-[17px] h-[17px]" />, href: LINKS.whatsapp, label: "WhatsApp" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-10  mt-10 justify-center lg:justify-start">
            {[
              { val: "+200", label: "Alumnos activos" },
              { val: "+10", label: "Años de experiencia" },
              { val: "4.9", label: "Valoración", icon: true },
            ].map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-2xl font-bold flex items-center gap-1 justify-center lg:justify-start" style={{ fontFamily: FD, letterSpacing: 1 }}>
                  {s.val}
                  {s.icon && <Star size={16} className="text-red-500 fill-red-500" />}
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual — properly leveled hero graphic */}
        <div className="flex-1 max-w-md lg:max-w-lg w-full flex items-center">
          <div className="relative w-full">
            <div className="absolute -inset-8 bg-red-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-b from-neutral-900/80 to-black border border-white/10 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
              <img src={WOLF_IMAGE} alt="Centro TKD" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-700" />
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
   COMPONENT: Problems Section
   ═══════════════════════════════════════════ */
const Problems = () => {
  const items = [
    { icon: <Flame size={28} strokeWidth={1.5} />, title: "Title of the problem", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
    { icon: <Target size={28} strokeWidth={1.5} />, title: "Title of the problem", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
    { icon: <Heart size={28} strokeWidth={1.5} />, title: "Title of the problem", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5">
        <FadeIn><SectionHeading tag="El problema">¿Te sentís identificado?</SectionHeading></FadeIn>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <FadeIn key={i} delay={i * .12}>
              <div className="bg-white/[.03] border border-white/[.06] rounded-2xl p-7 hover:border-red-500/20 transition-all duration-500 group h-full">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   COMPONENT: Features Section
   ═══════════════════════════════════════════ */
const Features = () => {
  const items = [
    { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: "Title of the feature", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
    { icon: <Zap size={28} strokeWidth={1.5} />, title: "Title of the feature", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
    { icon: <Users size={28} strokeWidth={1.5} />, title: "Title of the feature", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
    { icon: <Trophy size={28} strokeWidth={1.5} />, title: "Title of the feature", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
  ];
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]" />
      <div className="relative max-w-6xl mx-auto px-5">
        <FadeIn>
          <SectionHeading tag="La solución">Todo lo que Centro TKD<span className="text-red-500"> ofrece para vos</span></SectionHeading>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <FadeIn key={i} delay={i * .1}>
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
   COMPONENT: Student Gallery — Uniform Grid
   ═══════════════════════════════════════════ */
const Gallery = () => {
  const photos = [
    { label: "Clase grupal", gradient: "from-red-900/50 to-red-950/70", icon: <Swords size={40} strokeWidth={1.2} />, sub: "Trabajo en equipo" },
    { label: "Competencia", gradient: "from-neutral-800/60 to-neutral-900/80", icon: <Trophy size={40} strokeWidth={1.2} />, sub: "Torneos oficiales" },
    { label: "Niños", gradient: "from-red-800/40 to-neutral-900/70", icon: <Heart size={40} strokeWidth={1.2} />, sub: "Desde los X años" },
    { label: "Entrenamiento", gradient: "from-neutral-700/50 to-neutral-950/80", icon: <Zap size={40} strokeWidth={1.2} />, sub: "Alta intensidad" },
    { label: "Graduación", gradient: "from-red-900/40 to-neutral-900/60", icon: <Award size={40} strokeWidth={1.2} />, sub: "Exámenes de cinturón" },
    { label: "Exhibición", gradient: "from-neutral-800/50 to-red-950/60", icon: <Flame size={40} strokeWidth={1.2} />, sub: "Eventos especiales" },
  ];

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <SectionHeading tag="Nuestra comunidad">Momentos que nos<span className="text-red-500"> definen</span></SectionHeading>
        </FadeIn>

        {/* Uniform 3-col / 2-row grid — all same aspect ratio */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <FadeIn key={i} delay={i * .08}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/3]">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} border border-white/[.06] group-hover:border-red-500/25 transition-colors duration-500`} />
                <div className="absolute inset-0 opacity-[.04]"
                  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500/60 group-hover:text-red-400/80 transition-colors duration-500">
                  {p.icon}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
                  <p className="text-white font-semibold text-sm">{p.label}</p>
                  <p className="text-neutral-400 text-xs">{p.sub}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-red-500/30 transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={.3}>
          <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href={LINKS.instagram} size="sm" variant="primary">
              <Instagram size={16} /> Ver más en Instagram
            </CTAButton>
            <CTAButton href={LINKS.youtube} size="sm" variant="outline">
              <Play size={16} /> Ver videos en YouTube
            </CTAButton>
            <CTAButton href={LINKS.facebook} size="sm" variant="outline">
              <FacebookIcon size={16} /> Seguinos en Facebook
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   COMPONENT: Testimonial Carousel
   ═══════════════════════════════════════════ */
const Testimonials = () => {
  const items = [
    {
      name: "Name of the testimonial", role: "Role of the testimonial", initials: "MG",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      name: "Name of the testimonial", role: "Role of the testimonial", initials: "CL",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      name: "Name of the testimonial", role: "Role of the testimonial", initials: "LF",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      name: "Name of the testimonial", role: "Role of the testimonial", initials: "SM",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef(null);

  const go = useCallback((dir) => {
    setCurrent((p) => (p + dir + items.length) % items.length);
  }, [items.length]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, go]);

  // Pause auto-play on interaction
  const handleNav = (dir) => {
    setIsAutoPlaying(false);
    go(dir);
  };

  // Touch swipe
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { handleNav(diff > 0 ? 1 : -1); }
    touchStart.current = null;
  };

  // How many visible at once
  const getVisible = () => {
    if (typeof window === "undefined") return 1;
    return window.innerWidth >= 768 ? 2 : 1;
  };
  const [visCount, setVisCount] = useState(1);
  useEffect(() => {
    const fn = () => setVisCount(getVisible());
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5">
        <FadeIn><SectionHeading tag="Testimonios">Lo que dicen nuestros alumnos</SectionHeading></FadeIn>

        <FadeIn delay={.1}>
          <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {/* Carousel track */}
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * (100 / visCount)}%)` }}>
                {items.map((t, i) => (
                  <div key={i} className="shrink-0 px-2" style={{ width: `${100 / visCount}%` }}>
                    <div className="bg-white/[.03] border border-white/[.06] rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group hover:border-white/10 transition-all duration-500">
                      {/* Quote icon */}
                      <Quote size={48} className="absolute top-4 right-4 text-red-500/[.07]" strokeWidth={1} />

                      <div className="flex items-center gap-1 mb-5 text-red-500">
                        {Array(5).fill(null).map((_, i) => <Star key={i} size={16} className="fill-red-500" />)}
                      </div>
                      <p className="text-neutral-300 leading-relaxed mb-6 text-[15px] flex-1 relative z-10">"{t.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-sm font-bold border border-red-500/20">
                          {t.initials}
                        </div>
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

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => handleNav(-1)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300">
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button key={i} onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-red-500" : "w-2 bg-white/20 hover:bg-white/40"
                      }`} />
                ))}
              </div>

              <button onClick={() => handleNav(1)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300">
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
   COMPONENT: Location / Map Section
   ═══════════════════════════════════════════ */
const Location = () => (
  <section id="location" className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5">
      <FadeIn>
        <SectionHeading tag="Ubicación">Vení a<span className="text-red-500"> conocernos</span></SectionHeading>
      </FadeIn>

      <FadeIn delay={.1}>
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/[.06] aspect-video lg:aspect-auto lg:min-h-[400px] bg-neutral-900">
            <iframe
              title="Centro TKD Ubicación"
              src={LINKS.mapsEmbed}
              width="100%" height="100%"
              style={{ border: 0, minHeight: 400, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info card */}
          <div className="lg:col-span-2 bg-white/[.03] border border-white/[.06] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-5">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: FD, letterSpacing: 1 }}>Centro TKD</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-1">Taekwondo & Fitness</p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Pres. Juan Domingo Perón 1241<br />
                B1744FKC, Gran Buenos Aires<br />
                Provincia de Buenos Aires
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
   COMPONENT: Final CTA Section
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
            <WhatsAppIcon className="w-5 h-5" />
            Escribinos por WhatsApp
            <ArrowRight size={18} />
          </CTAButton>
          <CTAButton href={LINKS.instagram} size="lg" variant="primary">
            <Instagram size={18} />
            Seguinos en Instagram
          </CTAButton>
        </div>
        <p className="text-neutral-600 text-xs mt-6">Sin costo · Sin compromiso · Cupos limitados</p>
      </div>
    </FadeIn>
  </section>
);

/* ═══════════════════════════════════════════
   COMPONENT: Footer
   ═══════════════════════════════════════════ */
const Footer = () => {
  const socials = [
    { icon: <Instagram size={16} />, href: LINKS.instagram, label: "Instagram" },
    { icon: <FacebookIcon size={16} />, href: LINKS.facebook, label: "Facebook" },
    { icon: <Youtube size={16} />, href: LINKS.youtube, label: "YouTube" },
    { icon: <WhatsAppIcon className="w-4 h-4" />, href: LINKS.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Logo size="sm" />
            <span className="text-sm text-neutral-500">© {new Date().getFullYear()} Centro TKD. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: "Beneficios", id: "features" },
              { label: "Galería", id: "gallery" },
              { label: "Testimonios", id: "testimonials" },
              { label: "Ubicación", id: "location" },
            ].map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="text-xs text-neutral-500 hover:text-white transition-colors duration-300 hidden sm:block">{l.label}</button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/20 transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ═══════════════════════════════════════════
   COMPONENT: Floating WhatsApp Button
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
   ROOT: Page Assembly
   ═══════════════════════════════════════════ */
export default function CentroTKDLanding() {
  return (
    <div style={{ fontFamily: FB }} className="bg-neutral-950 text-white min-h-screen overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Bebas+Neue&display=swap" rel="stylesheet" />
      <Navbar />
      <Hero />
      <Problems />
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
