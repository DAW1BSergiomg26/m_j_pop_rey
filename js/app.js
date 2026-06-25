/* =========================================================
   Archivo Moonwalk - Núcleo global
   Navegación responsive, enlace activo y pequeños detalles comunes.
   ========================================================= */

function initMainNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!menuButton || !mainNav) return;

  const cleanButton = menuButton.cloneNode(true);
  menuButton.parentNode.replaceChild(cleanButton, menuButton);

  cleanButton.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = mainNav.classList.toggle("is-open");

    cleanButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-is-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      document.body.classList.remove("menu-is-open");
      cleanButton.setAttribute("aria-expanded", "false");
    });
  });
}

function markActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    link.classList.toggle("active-link", linkPage === currentPage);

    if (linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const currentRel = link.getAttribute("rel") || "";
    const safeRel = new Set(currentRel.split(" ").filter(Boolean));

    safeRel.add("noopener");
    safeRel.add("noreferrer");

    link.setAttribute("rel", Array.from(safeRel).join(" "));
  });
}

initMainNavigation();
markActiveNavigation();
initExternalLinks();
