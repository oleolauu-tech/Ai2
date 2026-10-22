(function () {
  var cfg = window.SITE_CONFIG || {};

  // Enlaces de afiliado: <a data-aff="jrpass">. Rellena la URL desde config.js.
  document.querySelectorAll("a[data-aff]").forEach(function (a) {
    var socio = (cfg.afiliados || {})[a.dataset.aff];
    if (!socio) return;
    a.href = socio.url || socio.web;
    a.target = "_blank";
    a.rel = "sponsored noopener";
  });

  // Productos propios: <a data-producto="guiaPdf">.
  document.querySelectorAll("a[data-producto]").forEach(function (a) {
    var url = (cfg.productos || {})[a.dataset.producto];
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.href = "mailto:" + cfg.email + "?subject=" + encodeURIComponent(a.dataset.asunto || "Información");
    }
  });

  // Email de contacto.
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = cfg.email;
    if (el.tagName === "A") el.href = "mailto:" + cfg.email;
  });

  // Newsletter.
  document.querySelectorAll("form.newsletter").forEach(function (form) {
    if (cfg.newsletterAction) {
      form.action = cfg.newsletterAction;
      form.method = "post";
      return;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-msg");
      if (msg) msg.textContent = "¡Gracias! Te escribiremos pronto.";
      form.reset();
    });
  });

  // AdSense: solo se carga si hay un ID configurado; si no, los huecos se ocultan.
  var slots = document.querySelectorAll(".ad-slot");
  if (cfg.adsenseClient) {
    var s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + cfg.adsenseClient;
    document.head.appendChild(s);
    slots.forEach(function (slot) {
      slot.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="' +
        cfg.adsenseClient + '" data-ad-format="auto" data-full-width-responsive="true"></ins>';
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  } else {
    slots.forEach(function (slot) { slot.hidden = true; });
  }

  // Menú móvil.
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var nav = document.querySelector(".nav");
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
