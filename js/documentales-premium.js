async function loadPremiumDocumentaries() {
  const grid = document.querySelector("#docs-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/documentales.json");
    const docs = await response.json();

    grid.innerHTML = docs.map((doc) => {
      const url = doc.accesoLegalUrl || "fuentes.html";
      const isExternal = String(url).startsWith("http");
      const target = isExternal ? "_blank" : "_self";
      const rel = isExternal ? "noopener noreferrer" : "";
      const warningClass = String(doc.estado || "").toLowerCase().includes("controversial") ? " documental-warning" : "";

      return `
        <article class="documental-card${warningClass}">
          <div class="documental-symbol" aria-hidden="true">${doc.simbolo || "◆"}</div>
          <div class="documental-meta">
            <span class="documental-pill">${doc.tipo}</span>
            <span class="documental-pill">${doc.anio}</span>
            <span class="documental-pill">${doc.nivelLectura || "Lectura crítica"}</span>
          </div>
          <p class="documental-status">${doc.estado || "Archivo audiovisual"}</p>
          <h3>${doc.titulo}</h3>
          <p class="documental-focus">${doc.enfoque}</p>
          <p><strong>Contexto:</strong> ${doc.contexto || "Consultar con lectura crítica y fuentes legales."}</p>
          <p class="documental-reliability"><strong>Fiabilidad:</strong> ${doc.fiabilidad}</p>
          <p class="documental-rights"><strong>Derechos:</strong> ${doc.riesgoCopyright}</p>
          <a class="documental-link" href="${url}" target="${target}" rel="${rel}">Ver acceso legal →</a>
        </article>
      `;
    }).join("");
  } catch (error) {
    grid.innerHTML = "<p>No se pudo cargar la colección de documentales premium. Revisa data/documentales.json.</p>";
  }
}

loadPremiumDocumentaries();
