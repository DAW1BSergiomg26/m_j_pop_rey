async function loadPremiumBiography() {
  const timeline = document.querySelector("#bio-timeline");
  if (!timeline) return;

  try {
    const response = await fetch("data/biografia.json");
    const items = await response.json();

    timeline.innerHTML = items.map((item) => `
      <article class="bio-card">
        <div class="bio-marker" aria-hidden="true">${item.simbolo || "✦"}</div>
        <div class="bio-content">
          <div class="bio-meta">
            <span class="bio-pill">${item.periodo}</span>
            <span class="bio-pill">${item.tipo}</span>
            <span class="bio-pill">Valor: ${item.valor}</span>
          </div>
          <h3>${item.titulo}</h3>
          <p class="bio-description">${item.descripcion}</p>
          <p class="bio-reading"><strong>Lectura humana:</strong> ${item.lecturaHumana || "Etapa clave para estudiar la construcción artística y cultural del Rey del Pop."}</p>
          <p class="bio-source"><strong>Estado:</strong> ${item.estado}. <strong>Fuente recomendada:</strong> ${item.fuenteRecomendada || "Contrastar con fuentes legales y verificables."}</p>
        </div>
      </article>
    `).join("");
  } catch (error) {
    timeline.innerHTML = "<p>No se pudo cargar la biografía premium. Revisa data/biografia.json.</p>";
  }
}

loadPremiumBiography();
