async function loadPremiumConcerts() {
  const grid = document.querySelector("#concerts-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/conciertos.json");
    const concerts = await response.json();

    grid.innerHTML = concerts.map((concert) => `
      <article class="concierto-card">
        <div class="concierto-symbol" aria-hidden="true">${concert.simbolo || "★"}</div>
        <div class="concierto-meta">
          <span class="concierto-pill">${concert.tipo}</span>
          <span class="concierto-pill">${concert.anio}</span>
          <span class="concierto-pill">Valor: ${concert.valor}</span>
        </div>
        <p class="concierto-era">${concert.era || "Memoria escénica"}</p>
        <h3>${concert.titulo}</h3>
        <p><strong>Lugar/contexto:</strong> ${concert.lugar || "Archivo escénico"}</p>
        <p class="concierto-description">${concert.descripcion}</p>
        <p class="concierto-note"><strong>Lectura escénica:</strong> ${concert.lecturaEscenica || "Pieza clave para estudiar el directo como ceremonia pop."}</p>
        <p class="concierto-rights"><strong>Derechos:</strong> ${concert.riesgoCopyright}</p>
        <a class="concierto-link" href="${concert.accesoLegalUrl || "fuentes.html"}" target="${String(concert.accesoLegalUrl || "").startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer">Ver acceso legal →</a>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudo cargar la colección de conciertos premium. Revisa data/conciertos.json.</p>";
  }
}

loadPremiumConcerts();
