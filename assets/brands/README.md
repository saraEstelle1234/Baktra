# Mapa de Assets y Piezas de Marca BAKTRA (2026)

Este documento detalla el mapeo oficial de archivos vectoriales (SVG) de marca para el sitio web de BAKTRA, respetando las directivas del Manual de Marca 2026.

## 1. Piezas de Marca y Nomenclatura

| Archivo Original | Componente React | Variante | Color de Origen | Regla de Uso |
| :--- | :--- | :--- | :--- | :--- |
| `logotipoBlanco.svg` | `Logo` | `variant="logotipo"` | `#FFFFFF` | Fondos oscuros (bordó). Contiene "Baktra" y el lema "El origen de lo nuevo". |
| `logotipoBordo.svg` | `Logo` | `variant="logotipo"` | `#862B26` (`#852C26`) | Fondos claros. Logotipo rector principal. |
| `logotipoMarron.svg` | `Logo` | `variant="logotipo"` | `#AE8B72` (`#B08C74`) | Fondos claros. Variante cálida unificadora. |
| `logotipoTurquesa.svg` | `Logo` | `variant="logotipo"` | `#5BA6B3` (`#5CA4B2`) | Fondos claros. Acento complementario. |
| `isologotipo.svg` | `Logo` | `variant="isologotipo"` | `#FFFFFF` | Fondos oscuros. Marco de filigrana con trazo SVG (`stroke-dashoffset`) para Preloader. |
| `isologotipoBordo.svg` | `Logo` | `variant="isologotipo"` | `#862B26` | Fondos claros. Versión institucional destacada. |
| `isologotipoMarron.svg` | `Logo` | `variant="isologotipo"` | `#AE8B72` | Fondos claros. |
| `isologo.svg` | `Logo` | `variant="isologo"` | `#FFFFFF` | Fondos oscuros. Versión compacta (favicon, navbar mobile, botones). |
| `isologoRojo.svg` | `Logo` | `variant="isologo"` | `#862B26` | Fondos claros. Versión compacta bordó. |
| `isologoMarron.svg` | `Logo` | `variant="isologo"` | `#AE8B72` | Fondos claros. Versión compacta marrón. |
| `patron.svg` | `PatternBackground` | `pattern` | `#FFFFFF` | Patrón modular de filigrana repetible para fondos interactivos. |

## 2. Tamaños Mínimos Oficiales (Aprobados por el Usuario)
- **Logotipo:** 50 mm = **190 px de ancho** (`--logo-min`).
- **Isologotipo:** 30 mm = **114 px de ancho** (`--isologotipo-min`).
- **Isologo:** 10 mm = **38 px de ancho** (`--isologo-min`).

## 3. Regla de Oro de Color
- **Fondo Claro:** Logotipo en Bordó (`#852C26`), Marrón (`#B08C74`) o Turquesa (`#5CA4B2`).
- **Fondo Oscuro:** Logotipo **únicamente en Blanco Puro (`#FFFFFF`)**.
- Los componentes React implementan `currentColor`, garantizando consistencia cromática total sin deformaciones ni sombras prohibidas.
