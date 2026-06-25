async function loadPremiumCuriosities() {
  const grid = document.querySelector("#curiosities-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/curiosidades.json");
    const curiosities = await response.json();

    grid.innerHTML = curiosities.map((item) => {
      const url = item.accesoLegalUrl || "fuentes.html";
      const isExternal = String(url).startsWith("http");
      const target = isExternal ? "_blank" : "_self";
      const rel = isExternal ? "noopener noreferrer" : "";
      const warningClass = String(item.estado || "").toLowerCase().includes("interpretaciones") ? " curiosidad-warning" : "";

      return `
        <article class="curiosidad-card${warningClass}">
          <div class="curiosidad-symbol" aria-hidden="true">${item.simbolo || "✦"}</div>
          <div class="curiosidad-meta">
            <span class="curiosidad-pill">${item.tipo}</span>
            <span class="curiosidad-pill">${item.anio}</span>
            <span class="curiosidad-pill">${item.valorDocumental}</span>
          </div>
          <p class="curiosidad-category">${item.categoria || "Rareza verificada"}</p>
          <h3>${item.titulo}</h3>
          <p class="curiosidad-fact">${item.descripcion}</p>
          <p class="curiosidad-context"><strong>Contexto:</strong> ${item.contexto || "Dato cultural que debe consultarse con fuentes legales y verificables."}</p>
          <p class="curiosidad-source"><strong>Derechos:</strong> ${item.riesgoDerechos}</p>
          <a class="curiosidad-link" href="${url}" target="${target}" rel="${rel}">Ver acceso legal →</a>
        </article>
      `;
    }).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudo cargar la colección de curiosidades premium. Revisa data/curiosidades.json.</p>";
  }
}

loadPremiumCuriosities();
