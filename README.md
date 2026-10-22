# Rumbo a Japón

Web estática en español para viajeros que planean ir a Japón. Se financia con enlaces de afiliado, anuncios, productos propios (guía PDF, itinerarios a medida, asesorías) y una newsletter.

No necesita servidor ni base de datos: son archivos HTML, CSS y JavaScript que se pueden publicar gratis.

## Estructura

```
japon/
├── index.html                      Portada
├── guias/                          Artículos (tráfico de Google)
├── herramientas/                   Calculadora de presupuesto
├── tienda.html                     Productos propios
├── recursos.html                   Todos los enlaces de afiliado
├── legal.html                      Aviso legal, afiliados, privacidad
├── assets/js/config.js             ← AQUÍ se configura todo lo que da dinero
├── assets/js/main.js
├── assets/css/style.css
├── sitemap.xml / robots.txt
```

## Cómo empezar a ganar dinero

Todo se configura en `assets/js/config.js`, sin tocar las páginas:

1. **Afiliados**: date de alta en cada programa (Klook, Booking, Airalo, IATI, Heymondo, Civitatis, GetYourGuide, Skyscanner, Wise, Amazon) y pega tu enlace en `url`. Mientras esté vacío, el botón lleva a la web oficial sin comisión.
2. **AdSense**: cuando Google apruebe la web, pon tu ID `ca-pub-...` en `adsenseClient`. Los huecos de anuncio aparecen solos; sin ID quedan ocultos.
3. **Newsletter**: crea una cuenta en MailerLite o Brevo, crea un formulario y pega su URL de envío en `newsletterAction`.
4. **Productos**: crea los productos en Gumroad, Lemon Squeezy, Hotmart o un Payment Link de Stripe y pega los enlaces en `productos`. Mientras estén vacíos, los botones abren un email.
5. **Email**: cambia `email` por el tuyo.

Para añadir un enlace de afiliado nuevo en cualquier página: `<a data-aff="clave" href="#">Texto</a>`, con la misma `clave` en `config.js`.

## Publicar

- **GitHub Pages** (gratis): Settings → Pages → rama `main`, carpeta raíz. La web quedará en `/japon/`.
- **Netlify o Cloudflare Pages** (gratis, recomendado con dominio propio): sube la carpeta `japon/` como raíz del sitio.

Cuando tengas dominio, sustituye `https://www.tudominio.com` en `sitemap.xml`, `robots.txt` y en las etiquetas `canonical` de las páginas, y da de alta la web en Google Search Console.

## Antes de publicar

- Completa los datos entre corchetes de `legal.html`.
- Si activas AdSense o estadísticas, añade un banner de consentimiento de cookies.
- Revisa que los precios y requisitos de las guías sigan vigentes.
