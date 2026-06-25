async function loadPremiumSources() {
  const grid = document.querySelector("#sources-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/fuentes.json");
    const sources = await response.json();

    grid.innerHTML = sources.map((source) => {
      const url = source.url || "#";
      const isExternal = String(url).startsWith("http");
      const target = isExternal ? "_blank" : "_self";
      const rel = isExternal ? "noopener noreferrer" : "";

      return `
        <article class="fuente-card">
          <div class="fuente-symbol" aria-hidden="true">${source.simbolo || "◆"}</div>
          <div class="fuente-meta">
            <span class="fuente-pill">${source.tipo}</span>
            <span class="fuente-pill">Fiabilidad: ${source.fiabilidad}</span>
            <span class="fuente-pill">Valor: ${source.valorDocumental}</span>
          </div>
          <p class="fuente-category">${source.categoria || "Fuente documental"}</p>
          <h3>${source.titulo}</h3>
          <p class="fuente-description">${source.descripcion}</p>
          <p class="fuente-check"><strong>Uso recomendado:</strong> ${source.usoRecomendado || "Consultar, contrastar y citar con prudencia."}</p>
          <p class="fuente-rights"><strong>Derechos:</strong> ${source.derechos}</p>
          <a class="fuente-link" href="${url}" target="${target}" rel="${rel}">Abrir fuente legal →</a>
        </article>
      `;
    }).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudo cargar el directorio de fuentes premium. Revisa data/fuentes.json.</p>";
  }
}

loadPremiumSources();
