async function loadPremiumDiscography() {
  const grid = document.querySelector("#albums-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/albums.json");
    const albums = await response.json();

    grid.innerHTML = albums.map((album) => {
      const tracks = Array.isArray(album.pistasClave)
        ? album.pistasClave.map((track) => `<span class="album-track">${track}</span>`).join("")
        : "";

      return `
        <article class="album-card">
          <div class="album-cover-symbol" aria-hidden="true">${album.simbolo || "♪"}</div>
          <div class="album-meta">
            <span class="album-pill">${album.tipo}</span>
            <span class="album-pill">${album.anio}</span>
            <span class="album-pill">Valor: ${album.valor}</span>
          </div>
          <p class="album-era">${album.era || "Archivo musical"}</p>
          <h3>${album.titulo}</h3>
          <p class="album-description">${album.descripcion}</p>
          <div class="album-tracks" aria-label="Pistas clave de ${album.titulo}">${tracks}</div>
          <p class="album-note"><strong>Nota de archivo:</strong> ${album.notaLegal || "Consultar siempre fuentes y plataformas legales."}</p>
          <a class="album-link" href="${album.accesoLegal}" target="_blank" rel="noopener noreferrer">Ver acceso legal →</a>
        </article>
      `;
    }).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudo cargar la discografía premium. Revisa data/albums.json.</p>";
  }
}

loadPremiumDiscography();
