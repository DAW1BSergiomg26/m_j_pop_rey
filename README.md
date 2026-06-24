# m_j_pop_rey

**Archivo Moonwalk** es una web personal de homenaje cultural, legal y documentado a Michael Jackson, el Rey del Pop.

## Objetivo

Ordenar información pública y legal sobre:

- Discografía
- Videoclips y short films
- Conciertos
- Documentales
- Libros
- Documentos públicos
- Rarezas verificadas
- Legado cultural

## Reglas del proyecto

- No alojar MP3, películas, documentales o conciertos protegidos.
- No enlazar material pirata.
- Usar fuentes oficiales, legales y verificables.
- Priorizar análisis propio, enlaces legales y embeds oficiales permitidos.
- Revisar licencias de imágenes antes de publicarlas.

## Versión estable actual

Esta versión incluye:

- Home premium responsive.
- Biografía documentada con línea de tiempo.
- Discografía premium con fichas legales.
- Videos premium y short films con lectura visual.
- Conciertos premium y memoria escénica.
- Museo Visual simbólico y legal.
- Fuentes legales y verificables.
- Controles Moonwalk flotantes para navegar por secciones.
- Menú responsive con página activa.
- Pulido visual global Royal Moonwalk Noir.

## Cómo abrir en local

Desde PowerShell, dentro del proyecto:

```powershell
npx live-server --port=5500
```

Después abre:

```text
http://localhost:5500/index.html
```

Alternativa con Python:

```powershell
python -m http.server 5500
```

## Flujo Git recomendado

- `main` debe quedar siempre estable.
- Trabajar cada mejora en una rama `feature/*`.
- Probar visualmente antes de mezclar.
- Crear checkpoints con tags después de fases importantes.
- No subir material protegido ni archivos pesados sin revisar derechos.
