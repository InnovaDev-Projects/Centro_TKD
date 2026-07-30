import { GalleryImageItem, NavLinkItem, TestimonialItem } from "../types";

import imgDojang from "../assets/dojang-principal.jpeg";
import imgGraduacion from "../assets/graduacion-alumnos.jpeg";
import imgLuces from "../assets/dojang-luces-led.jpeg";
import imgExhibicion from "../assets/exhibicion-teatro.jpeg";
import imgComunidad from "../assets/comunidad-bandera.jpeg";
import imgCompetencia from "../assets/competencia-diplomas.jpeg";
import imgTorneo from "../assets/torneo-equipo.jpeg";
import imgViaje from "../assets/viaje-playa-medallas.jpeg";
import imgNosotrosDiplomas from "../assets/nosotros-alumnos-diplomas.jpeg";
import imgNosotrosGrupo from "../assets/nosotros-dojang-grupo.jpeg";
import logoImg from "../assets/logo.png";
import wolfImg from "../assets/wolf.png";

export { logoImg, wolfImg, imgComunidad, imgGraduacion, imgDojang, imgTorneo, imgLuces, imgNosotrosDiplomas, imgNosotrosGrupo };

export const LINKS = {
  whatsapp: "https://api.whatsapp.com/send/?phone=5491144353469&text=Hola!%20Quisiera%20recibir%20informaci%C3%B3n%20sobre%20las%20clases%20de%20Taekwondo%20en%20Centro%20TKD.&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/centro.tkd/",
  facebook: "https://www.facebook.com/profile.php?id=100086311917381&sk=about",
  youtube: "https://www.youtube.com/@Centrotkd",
  maps: "https://www.google.com/maps?q=Centro+TKD+-+Taekwondo+%26+Fitness,+Pres.+Juan+Domingo+Per%C3%B3n+1241,+B1744FKC+Gran+Buenos+Aires,+Provincia+de+Buenos+Aires",
  googleReviews: "https://www.google.com/maps/place/Centro+TKD+-+Taekwondo+%26+Fitness/@-34.5979433,-58.8662321,12z/data=!4m12!1m2!2m1!1sCentro+TKD+-+Taekwondo+%26+Fitness,+Pres.+Juan+Domingo+Per%C3%B3n+1241,+B1744FKC+Gran+Buenos+Aires,+Provincia+de+Buenos+Aires!3m8!1s0x95bc95004ae03313:0xdcb99955666c6809!8m2!3d-34.6562645!4d-58.7948568!9m1!1b1!15sCndDZW50cm8gVEtEIC0gVGFla3dvbmRvICYgRml0bmVzcywgUHJlcy4gSnVhbiBEb21pbmdvIFBlcsOzbiAxMjQxLCBCMTc0NEZLQyBHcmFuIEJ1ZW5vcyBBaXJlcywgUHJvdmluY2lhIGRlIEJ1ZW5vcyBBaXJlc1pzInFjZW50cm8gdGtkIHRhZWt3b25kbyAmIGZpdG5lc3MgcHJlcyBqdWFuIGRvbWluZ28gcGVyw7NuIDEyNDEgYjE3NDRma2MgZ3JhbiBidWVub3MgYWlyZXMgcHJvdmluY2lhIGRlIGJ1ZW5vcyBhaXJlc5IBDXNwb3J0c19zY2hvb2yaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRrZVdKV1p6UlZNMUkwVkZoak0xUnVVWGRoYm14SVZsWk9lR0ZZWXhBQuABAPoBBAgUECs!16s%2Fg%2F11ycy7lrdf?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5!2d-58.6!3d-34.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95004ae03313%3A0xdcb99955666c6809!2sCentro%20TKD%20-%20Taekwondo%20%26%20Fitness!5e0!3m2!1ses-419!2sar!4v1700000000000",
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Nosotros", id: "about" },
  { label: "Actividades", id: "features" },
  { label: "Galería", id: "gallery" },
  { label: "Testimonios", id: "testimonials" },
  { label: "Ubicación", id: "location" },
];

export const GALLERY_IMAGES: GalleryImageItem[] = [
  { src: imgDojang, label: "Nuestro Dojang", sub: "Área de entrenamiento principal" },
  { src: imgGraduacion, label: "Graduación", sub: "Entrega de certificados y cinturones" },
  { src: imgLuces, label: "Centro TKD", sub: "Ambiente único de entrenamiento" },
  { src: imgExhibicion, label: "Exhibición", sub: "Evento de fin de año y demostraciones" },
  { src: imgComunidad, label: "Competencia", sub: "Representando a Centro TKD" },
  { src: imgTorneo, label: "Pequeños Ninjas", sub: "Clases para niños y jóvenes" },
  { src: imgViaje, label: "Competencia", sub: "Nuestros campeones continentales" },
  { src: imgCompetencia, label: "Eventos", sub: "Entrega de diplomas y reconocimientos" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Melany Valeria Pereira Bravo",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "MP",
    quote: "Un lugar EXCELENTE! El Sabón Tomás es un increíble instructor. Mi hijo de 6 sale de sus clases ENCANTADO y con ganas de seguir formando parte de esta maravillosa disciplina. Muy agradecidos, como padres, de haber elegido un lugar GENIAL!"
  },
  {
    name: "Karen Ailen Medina",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "KM",
    quote: "Retomé Taekwon-do luego de 10 años y Centro TKD es el lugar que me devolvió el amor por ese arte marcial. El Sabón Tomás es muy dedicado y muy buen instructor, te motiva a sacar el mayor de tu potencial. Atento y dispuesto con alumnos y padres."
  },
  {
    name: "Laura Marcela Grillo",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "LG",
    quote: "Mucha calidez con los niños pequeños. Los sabones, Karen y Tomás, muy profesionales. Organizan actividades extras, dictan las clases, orientan a los padres en el acompañamiento del deporte. Nuestra experiencia es muy buena. Recomendamos el Centro TKD."
  },
  {
    name: "Ody Reynoso",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "OR",
    quote: "Excelente lugar para aprender Taekwondo ITF y también cuenta con otras actividades. Tiene un lugar muy amplio y un personal super amable. Recomiendo 100%."
  },
  {
    name: "Diego Yamil Loiacono",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "DL",
    quote: "Excelente lugar!! El sabón es un genio total, el ambiente es buenísimo. Si querés hacer TAEKWONDO es el lugar ideal."
  },
  {
    name: "Suárez Rodríguez",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "SR",
    quote: "Excelente lugar, te atienden re bien y son todos amigables y todo anda en buen estado."
  },
  {
    name: "Fran",
    role: "Local Guide · Reseña en Google Maps · ★★★★★",
    initials: "F",
    quote: "Sabón Tomás, el mejor 🥷"
  },
  {
    name: "Emily Ledezma",
    role: "Reseña en Google Maps · ★★★★★",
    initials: "EL",
    quote: "El lugar es muy amplio y bonito, el sabón (profesor de taekwondo) tiene una gran experiencia en el deporte."
  },
];
