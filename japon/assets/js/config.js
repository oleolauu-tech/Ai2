/*
 * Configuración central de la web.
 * Para empezar a ganar dinero solo tienes que rellenar este archivo:
 * pega tus enlaces de afiliado, tu ID de AdSense y la URL de tu newsletter.
 * Mientras un enlace esté vacío, el botón lleva a la web oficial del socio
 * (funciona, pero no te paga comisión).
 */
window.SITE_CONFIG = {
  nombre: "Rumbo a Japón",

  // Enlaces de afiliado. Sustituye "url" por tu enlace personal de cada programa.
  afiliados: {
    jrpass:   { nombre: "JR Pass (Klook)",          url: "", web: "https://www.klook.com/es/" },
    hoteles:  { nombre: "Booking.com",              url: "", web: "https://www.booking.com/" },
    agoda:    { nombre: "Agoda",                    url: "", web: "https://www.agoda.com/es-es/" },
    esim:     { nombre: "eSIM Airalo",              url: "", web: "https://www.airalo.com/es" },
    seguro:   { nombre: "Seguro de viaje IATI",     url: "", web: "https://www.iatiseguros.com/" },
    seguro2:  { nombre: "Seguro de viaje Heymondo", url: "", web: "https://heymondo.es/" },
    tours:    { nombre: "Civitatis",                url: "", web: "https://www.civitatis.com/es/japon/" },
    tours2:   { nombre: "GetYourGuide",             url: "", web: "https://www.getyourguide.es/japon-l169018/" },
    vuelos:   { nombre: "Skyscanner",               url: "", web: "https://www.skyscanner.es/" },
    libros:   { nombre: "Amazon",                   url: "", web: "https://www.amazon.es/s?k=guia+japon" },
    wise:     { nombre: "Tarjeta Wise",             url: "", web: "https://wise.com/es/" }
  },

  // Google AdSense: pon tu ID (ca-pub-XXXXXXXXXXXXXXXX) cuando te aprueben.
  adsenseClient: "",

  // Newsletter: URL "action" del formulario de tu proveedor (MailerLite, Brevo, Substack...).
  newsletterAction: "",

  // Productos propios: enlace de pago (Gumroad, Lemon Squeezy, Stripe Payment Link, Hotmart...).
  productos: {
    guiaPdf:     "",
    itinerario:  "",
    consultoria: ""
  },

  // Email de contacto que aparece en el pie y en la página legal.
  email: "hola@tudominio.com"
};
