<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Arquitectura de Componentes y Estilos

Para mantener el código limpio y escalable, sigue estas reglas:

1. **Componentes Atómicos y Reutilizables**: 
   - Elementos como tablas, modales, selects, inputs, calendarios y menús deben ser creados como componentes independientes en `src/components/common` (o subcarpetas de UI).
   - Las pantallas (Screens) o páginas NO deben contener lógica de interfaz extensa; deben dedicarse a orquestar estos componentes reutilizables.

2. **Modularidad de CSS**:
   - Cada componente debe tener su propio archivo `.module.css` en `src/styles/components`.
   - Evita archivos CSS gigantes o estilos globales innecesarios. El estilo debe vivir lo más cerca posible de su componente para evitar colisiones y código huérfano.

3. **Mantenibilidad**:
   - Si un bloque de código en una página supera las 200 líneas debido a la UI, extrae partes en componentes más pequeños.

4. **Reglas de Colores (Theming)**:
   - **PROHIBIDO** el uso de colores "hardcoded" (ej. `#ffffff`, `rgb(0,0,0)`, `black`) en cualquier archivo de estilo o componente.
   - Todos los colores deben provenir de las variables CSS definidas en `src/app/globals.css`.
   - Si un componente requiere un nuevo color, este DEBE ser añadido primero a `globals.css` con un nombre semántico (ej. `--status-error`, `--btn-cancel-bg`).
