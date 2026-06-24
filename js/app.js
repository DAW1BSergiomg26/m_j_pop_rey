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
