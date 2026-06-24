function initMoonwalkScrollControls() {
  if (document.querySelector(".moonwalk-scroll-controls")) return;

  const controls = document.createElement("div");
  controls.className = "moonwalk-scroll-controls";
  controls.setAttribute("aria-label", "Controles de navegación por la página");

  controls.innerHTML = `
    <button class="moonwalk-scroll-btn is-hidden" type="button" data-scroll-direction="up" aria-label="Subir a la sección anterior">
      <span class="moonwalk-scroll-icon" aria-hidden="true">&#10022;</span>
    </button>
    <button class="moonwalk-scroll-btn" type="button" data-scroll-direction="down" aria-label="Bajar a la siguiente sección">
      <span class="moonwalk-scroll-icon" aria-hidden="true">&#9835;</span>
    </button>
  `;

  document.body.appendChild(controls);

  const upButton = controls.querySelector('[data-scroll-direction="up"]');
  const downButton = controls.querySelector('[data-scroll-direction="down"]');

  function getSections() {
    return Array.from(document.querySelectorAll("main > section, footer"))
      .filter((section) => section.offsetHeight > 80);
  }

  function getCurrentSectionIndex(sections) {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let currentIndex = 0;

    sections.forEach((section, index) => {
      if (section.offsetTop <= marker) {
        currentIndex = index;
      }
    });

    return currentIndex;
  }

  function scrollToSection(direction) {
    const sections = getSections();
    if (!sections.length) return;

    const currentIndex = getCurrentSectionIndex(sections);
    const nextIndex = direction === "down"
      ? Math.min(currentIndex + 1, sections.length - 1)
      : Math.max(currentIndex - 1, 0);

    sections[nextIndex].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function updateButtonState() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const nearBottom = scrollTop >= maxScroll - 120;

    upButton.classList.toggle("is-hidden", scrollTop < 180);
    downButton.classList.toggle("is-muted", nearBottom);
  }

  upButton.addEventListener("click", () => scrollToSection("up"));
  downButton.addEventListener("click", () => scrollToSection("down"));

  window.addEventListener("scroll", updateButtonState, { passive: true });
  window.addEventListener("resize", updateButtonState);

  updateButtonState();
}

initMoonwalkScrollControls();