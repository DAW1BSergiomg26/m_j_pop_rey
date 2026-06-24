const legalLinks = [
  {
    title: "Web oficial Michael Jackson",
    type: "Oficial",
    description: "Discografía, short films, tienda oficial, proyectos autorizados y enlaces principales.",
    url: "https://www.michaeljackson.com/"
  },
  {
    title: "Canal oficial YouTube / VEVO",
    type: "Oficial",
    description: "Videoclips y short films oficiales para ver o embeber cuando YouTube lo permita.",
    url: "https://www.youtube.com/user/michaeljacksonVEVO"
  },
  {
    title: "RIAA Gold & Platinum",
    type: "Certificación",
    description: "Certificaciones oficiales de ventas en Estados Unidos.",
    url: "https://www.riaa.com/gold-platinum/?se=michael+jackson&tab_active=default-award"
  },
  {
    title: "GRAMMY.com",
    type: "Premios",
    description: "Premios, nominaciones y ficha oficial de la Recording Academy.",
    url: "https://www.grammy.com/artists/michael-jackson/13202/"
  },
  {
    title: "FBI Vault",
    type: "Documento público",
    description: "Documentos liberados legalmente por FOIA. Requiere lectura seria y contextual.",
    url: "https://vault.fbi.gov/Michael%20Jackson"
  },
  {
    title: "Patente US5255452A",
    type: "Patente",
    description: "Sistema de calzado y anclaje para la ilusión antigravedad de Smooth Criminal.",
    url: "https://patents.google.com/patent/US5255452A/en"
  },
  {
    title: "Library of Congress",
    type: "Archivo cultural",
    description: "Fuente clave para estudiar la preservación cultural de Thriller.",
    url: "https://www.loc.gov/"
  },
  {
    title: "Wikimedia Commons",
    type: "Imágenes con licencia",
    description: "Imágenes gratuitas solo si la ficha de licencia permite el uso deseado.",
    url: "https://commons.wikimedia.org/wiki/Category:Michael_Jackson"
  }
];

const container = document.querySelector("#legal-links");

if (container) {
  container.innerHTML = legalLinks.map((item) => `
    <article class="legal-card">
      <small>${item.type}</small>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">Abrir fuente legal →</a>
    </article>
  `).join("");
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

async function loadAlbums() {
  const grid = document.querySelector("#albums-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/albums.json");
    const albums = await response.json();

    grid.innerHTML = albums.map((album) => `
      <article class="data-card">
        <span class="tag">${album.tipo} · ${album.anio}</span>
        <h3>${album.titulo}</h3>
        <p>${album.descripcion}</p>
        <p><strong>Valor documental:</strong> ${album.valor}</p>
        <a href="${album.accesoLegal}" target="_blank" rel="noopener noreferrer">
          Ver acceso legal →
        </a>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudieron cargar los álbumes. Revisa data/albums.json.</p>";
  }
}

loadAlbums();

async function loadVideos() {
  const grid = document.querySelector("#videos-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/videos.json");
    const videos = await response.json();

    grid.innerHTML = videos.map((video) => `
      <article class="data-card video-card">
        <span class="tag">${video.tipo} · ${video.anio}</span>
        <h3>${video.titulo}</h3>
        <p><strong>Director:</strong> ${video.director}</p>
        <p>${video.concepto}</p>
        <p><strong>Valor documental:</strong> ${video.valor}</p>
        <p><strong>Derechos:</strong> ${video.riesgoCopyright}</p>
        <a href="${video.accesoLegal}" target="_blank" rel="noopener noreferrer">
          Ver acceso legal →
        </a>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudieron cargar los videos. Revisa data/videos.json.</p>";
  }
}

loadVideos();

async function loadConcerts() {
  const grid = document.querySelector("#concerts-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/conciertos.json");
    const concerts = await response.json();

    grid.innerHTML = concerts.map((concert) => `
      <article class="data-card concert-card">
        <span class="tag">${concert.tipo} · ${concert.anio}</span>
        <h3>${concert.titulo}</h3>
        <p><strong>Estado:</strong> ${concert.estado}</p>
        <p>${concert.descripcion}</p>
        <p><strong>Valor documental:</strong> ${concert.valor}</p>
        <p><strong>Acceso legal:</strong> ${concert.accesoLegal}</p>
        <p><strong>Derechos:</strong> ${concert.riesgoCopyright}</p>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudieron cargar los conciertos. Revisa data/conciertos.json.</p>";
  }
}

loadConcerts();

async function loadDocs() {
  const grid = document.querySelector("#docs-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/documentales.json");
    const docs = await response.json();

    grid.innerHTML = docs.map((doc) => `
      <article class="data-card doc-card">
        <span class="tag">${doc.tipo} · ${doc.anio}</span>
        <h3>${doc.titulo}</h3>
        <p><strong>Estado:</strong> ${doc.estado}</p>
        <p>${doc.enfoque}</p>
        <p><strong>Fiabilidad:</strong> ${doc.fiabilidad}</p>
        <p><strong>Acceso legal:</strong> ${doc.accesoLegal}</p>
        <p><strong>Derechos:</strong> ${doc.riesgoCopyright}</p>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudieron cargar los documentales. Revisa data/documentales.json.</p>";
  }
}

loadDocs();

function initThrillerCanvas() {
  const canvas = document.querySelector("#thriller-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  let particles = [];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function createParticles() {
    const amount = Math.min(70, Math.floor(width / 22));

    particles = Array.from({ length: amount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.22 + 0.05
    }));
  }

  function drawParticle(particle) {
    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.radius * 8
    );

    gradient.addColorStop(0, `rgba(109, 7, 21, ${particle.opacity})`);
    gradient.addColorStop(0.45, `rgba(80, 0, 10, ${particle.opacity * 0.45})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(particle.x, particle.y, particle.radius * 8, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      drawParticle(particle);

      particle.y += particle.speed;
      particle.x += particle.drift;

      if (particle.y > height + 40) {
        particle.y = -40;
        particle.x = Math.random() * width;
      }

      if (particle.x < -40) particle.x = width + 40;
      if (particle.x > width + 40) particle.x = -40;
    });

    requestAnimationFrame(animate);
  }

  resizeCanvas();
  createParticles();
  animate();

  window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
  });
}

initThrillerCanvas();

function improveMobileMenu() {
  const mobileButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".main-nav");

  if (!mobileButton || !mobileNav) return;

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      mobileButton.setAttribute("aria-expanded", "false");
    });
  });
}

improveMobileMenu();

function forceMobileMenuToggle() {
  const menuButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!menuButton || !mainNav) return;

  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

forceMobileMenuToggle();

/* =========================================================
   Mobile Menu Final Fix
   Elimina listeners duplicados y fuerza un único menú móvil.
   ========================================================= */

function finalMobileMenuFix() {
  const oldButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!oldButton || !mainNav) return;

  const newButton = oldButton.cloneNode(true);
  oldButton.parentNode.replaceChild(newButton, oldButton);

  newButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = mainNav.classList.toggle("is-open");
    newButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-is-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      document.body.classList.remove("menu-is-open");
      newButton.setAttribute("aria-expanded", "false");
    });
  });
}

finalMobileMenuFix();

async function loadCuriosities() {
  const grid = document.querySelector("#curiosities-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/curiosidades.json");
    const curiosities = await response.json();

    grid.innerHTML = curiosities.map((item) => `
      <article class="data-card curiosity-card">
        <span class="tag">${item.tipo} · ${item.anio}</span>
        <h3>${item.titulo}</h3>
        <p><strong>Estado:</strong> ${item.estado}</p>
        <p>${item.descripcion}</p>
        <p><strong>Valor documental:</strong> ${item.valorDocumental}</p>
        <p><strong>Acceso legal:</strong> ${item.accesoLegal}</p>
        <p><strong>Derechos:</strong> ${item.riesgoDerechos}</p>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudieron cargar las curiosidades. Revisa data/curiosidades.json.</p>";
  }
}

loadCuriosities();

async function loadSources() {
  const grid = document.querySelector("#sources-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/fuentes.json");
    const sources = await response.json();

    grid.innerHTML = sources.map((source) => `
      <article class="data-card source-card">
        <span class="tag">${source.tipo} · ${source.categoria}</span>
        <h3>${source.titulo}</h3>
        <p>${source.descripcion}</p>
        <p><strong>Fiabilidad:</strong> ${source.fiabilidad}</p>
        <p><strong>Valor documental:</strong> ${source.valorDocumental}</p>
        <p><strong>Derechos:</strong> ${source.derechos}</p>
        <a href="${source.url}" target="_blank" rel="noopener noreferrer">Abrir fuente legal →</a>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudieron cargar las fuentes. Revisa data/fuentes.json.</p>";
  }
}

loadSources();
