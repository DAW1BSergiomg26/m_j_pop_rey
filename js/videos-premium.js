async function loadPremiumVideos() {
  const grid = document.querySelector("#videos-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/videos.json");
    const videos = await response.json();

    grid.innerHTML = videos.map((video) => `
      <article class="video-premium-card">
        <div class="video-symbol" aria-hidden="true">${video.simbolo || "▶"}</div>
        <div class="video-meta">
          <span class="video-pill">${video.tipo}</span>
          <span class="video-pill">${video.anio}</span>
          <span class="video-pill">Valor: ${video.valor}</span>
        </div>
        <p class="video-era">${video.era || "Archivo audiovisual"}</p>
        <h3>${video.titulo}</h3>
        <p class="video-concept">${video.concepto}</p>
        <p class="video-note"><strong>Lectura visual:</strong> ${video.lecturaVisual || "Pieza clave para estudiar lenguaje audiovisual pop."}</p>
        <p><strong>Dirección:</strong> ${video.director}</p>
        <p class="video-rights"><strong>Derechos:</strong> ${video.riesgoCopyright}</p>
        <a class="video-link" href="${video.accesoLegal}" target="_blank" rel="noopener noreferrer">Ver acceso legal →</a>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudo cargar la colección de videos premium. Revisa data/videos.json.</p>";
  }
}

loadPremiumVideos();
