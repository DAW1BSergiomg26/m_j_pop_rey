# Memoria técnica DAW - Archivo Moonwalk

## 1. Identificación del proyecto

**Nombre del proyecto:** Archivo Moonwalk  
**Versión estable:** v1.0.0 - Premium Final  
**Autor:** Sergio Daniel Martínez Gómez  
**Tipo de proyecto:** Web estática publicada con GitHub Pages  
**URL pública:** https://daw1bsergiomg26.github.io/m_j_pop_rey/  
**Portfolio DAW:** https://daw1bsergiomg26.github.io/m_j_pop_rey/portfolio.html  
**Release:** https://github.com/DAW1BSergiomg26/m_j_pop_rey/releases/tag/v1.0.0

Archivo Moonwalk es una web personal de homenaje cultural, legal y documentado a Michael Jackson. El objetivo principal es reunir información organizada sobre su carrera, su música, su legado visual y sus fuentes de consulta, evitando alojar contenido protegido sin permiso.

## 2. Objetivo general

El proyecto busca demostrar que una web estática puede funcionar como un pequeño producto digital completo: con diseño, navegación, estructura modular, datos separados, SEO básico, publicación pública y control profesional con Git.

La web no pretende ser una simple página decorativa. Su intención es actuar como un archivo cultural navegable, separando secciones, fuentes y criterios legales.

## 3. Objetivos específicos

- Crear una web responsive y visualmente coherente.
- Organizar el contenido en secciones temáticas.
- Usar HTML, CSS y JavaScript de forma clara.
- Separar datos en archivos JSON cuando sea necesario.
- Mantener un enfoque legal y anti-piratería.
- Publicar el proyecto en GitHub Pages.
- Crear un release estable v1.0.0.
- Usar ramas feature, checkpoints y commits claros.
- Preparar una landing de portfolio DAW para explicar el proyecto.

## 4. Estructura principal del sitio

El proyecto contiene las siguientes páginas principales:

- `index.html`: página principal del Archivo Moonwalk.
- `biografia.html`: línea de tiempo premium de Michael Jackson.
- `discografia.html`: discografía organizada y documentada.
- `videos.html`: videos y short films con enfoque legal.
- `conciertos.html`: conciertos, giras y actuaciones importantes.
- `documentales.html`: documentales y material audiovisual de referencia.
- `curiosidades.html`: rarezas, datos curiosos y elementos culturales.
- `museo-visual.html`: museo simbólico y visual sin alojar material protegido.
- `fuentes.html`: fuentes legales, oficiales y verificables.
- `portfolio.html`: presentación del proyecto como trabajo DAW.

## 5. Estructura de carpetas

```text
m_j_pop_rey/
├─ index.html
├─ biografia.html
├─ discografia.html
├─ videos.html
├─ conciertos.html
├─ documentales.html
├─ curiosidades.html
├─ museo-visual.html
├─ fuentes.html
├─ portfolio.html
├─ css/
├─ js/
├─ data/
├─ img/
├─ sitemap.xml
├─ robots.txt
├─ site.webmanifest
├─ README.md
├─ SEO_FINAL.md
├─ AUDITORIA_FINAL_PREMIUM.md
├─ POST_PUBLICACION_POLISH.md
└─ MEMORIA_TECNICA_DAW.md
```

Esta organización permite separar presentación, comportamiento, datos y documentación.

## 6. Tecnologías utilizadas

### HTML5

Se usa para estructurar las páginas, definir cabeceras, navegación, contenido principal, secciones y pie de página.

### CSS3

Se usa para el diseño visual. La web tiene una estética llamada internamente **Royal Moonwalk Noir**, basada en negro premium, dorado, detalles rojos y sensación de escenario.

### JavaScript

Se utiliza para:

- Menú responsive.
- Marcar la página activa.
- Añadir el enlace Portfolio de forma global.
- Cargar tarjetas dinámicas desde archivos JSON.
- Activar controles Moonwalk flotantes.

### JSON

Se usa para separar datos de presentación en secciones como biografía, discografía, videos, conciertos, documentales, curiosidades y fuentes.

### Git y GitHub

Se ha usado un flujo con ramas `feature/*`, merges controlados y checkpoints con tags.

### GitHub Pages

Se usa para publicar la web de forma pública desde la rama `main`.

## 7. Diseño visual

La línea visual del proyecto se basa en:

- Fondo oscuro.
- Tipografía grande y expresiva.
- Acentos dorados.
- Bordes luminosos.
- Detalles rojos sutiles.
- Tarjetas premium.
- Sensación escénica y musical.
- Navegación responsive para móvil.

El objetivo visual era que la web pareciera un archivo elegante y no una página básica sin identidad.

## 8. Funcionalidades principales

- Navegación común entre páginas.
- Menú responsive en móvil.
- Página activa marcada automáticamente.
- Secciones con tarjetas dinámicas.
- Controles Moonwalk flotantes.
- Enlaces legales y verificables.
- Landing de portfolio.
- Sitemap, robots y manifest.
- Publicación en GitHub Pages.

## 9. Enfoque legal

El proyecto mantiene una regla clara: no alojar contenido protegido sin licencia.

No se suben:

- Canciones en MP3.
- Películas.
- Documentales completos.
- Conciertos completos no autorizados.
- Fotografías protegidas sin revisar derechos.
- Material pirateado.

En su lugar se usan referencias, enlaces oficiales, análisis propio y fuentes verificables.

## 10. SEO básico

La fase SEO añadió:

- `sitemap.xml`.
- `robots.txt`.
- `site.webmanifest`.
- Metadatos básicos.
- Canonical preparado para GitHub Pages.
- Optimización inicial de la página Discografía.

Esto mejora la presentación del proyecto para buscadores y para publicación web.

## 11. Flujo Git utilizado

El proyecto se trabajó con un flujo profesional:

1. `main` se mantuvo como rama estable.
2. Cada mejora importante se hizo en una rama `feature/*`.
3. Se probaron los cambios antes de integrarlos.
4. Se hicieron merges con mensajes claros.
5. Se crearon checkpoints mediante tags.
6. Se publicó una versión oficial `v1.0.0`.
7. Se creó un release en GitHub.
8. Se validó la publicación en GitHub Pages.

Ejemplo de checkpoints:

- `checkpoint-seo-final-v1`
- `checkpoint-portfolio-landing-daw-v1`
- `checkpoint-post-publicacion-polish-v1`
- `checkpoint-publicacion-validada-v1`
- `v1.0.0`

## 12. Publicación

La web se publicó en GitHub Pages desde:

```text
Branch: main
Folder: /
```

URL pública:

```text
https://daw1bsergiomg26.github.io/m_j_pop_rey/
```

La publicación fue validada con navegador real, pruebas responsive y revisión de consola.

## 13. Problemas encontrados y soluciones

### Problema 1: riesgo de caracteres corruptos

Durante el trabajo se vigiló la posible aparición de caracteres raros como `Ã`, `Â`, `â` o `�`.

Solución aplicada:

- Revisiones con `Select-String`.
- Cuidado con UTF-8.
- Evitar escrituras inseguras en PowerShell.

### Problema 2: GitHub Pages mostró 404 inicialmente

Al activar GitHub Pages apareció un 404 temporal.

Solución aplicada:

- Comprobar estado con GitHub CLI.
- Forzar build con `gh api`.
- Esperar a que GitHub Pages terminara la publicación.

### Problema 3: evitar edición repetida de todos los HTML

Para añadir Portfolio al menú global se evitó tocar todas las páginas manualmente.

Solución aplicada:

- Se añadió el enlace desde `js/app.js`, reduciendo riesgo de error.

## 14. Qué he aprendido

Con este proyecto se han practicado conceptos importantes de DAW:

- Estructura de una web multipágina.
- Uso de HTML semántico.
- CSS responsive.
- Separación de datos con JSON.
- JavaScript para interacción.
- Organización de carpetas.
- Git con ramas y tags.
- Publicación con GitHub Pages.
- Criterios básicos de SEO.
- Documentación técnica.
- Importancia de revisar licencias y derechos de autor.

## 15. Posibles mejoras futuras

- Añadir imagen social preview específica.
- Mejorar Open Graph en todas las páginas.
- Crear una página 404 personalizada.
- Añadir pruebas automáticas básicas.
- Mejorar accesibilidad con revisión ARIA más profunda.
- Añadir modo de impresión para la memoria técnica.
- Crear una versión más avanzada del portfolio.

## 16. Conclusión

Archivo Moonwalk demuestra que un proyecto web de primer curso puede crecer mucho si se trabaja con orden, ramas, documentación, pruebas y una estética coherente.

El resultado final es una web publicada, navegable, documentada y defendible como portfolio DAW. No es solo una práctica aislada: es una base real para mostrar progreso, criterio técnico y capacidad de construir un producto web completo.
