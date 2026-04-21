# landingpage_empresa

Esta es la plantilla base para el proyecto `landingpage_empresa`, diseñada utilizando Next.js para el frontend y Node.js + PostgreSQL para el backend. Esta estructura se ha inspirado en el proyecto `punto_de_venta` (React Native), pero adaptada al ecosistema web moderno con App Router en Next.js.

## Estructura de Directorios

### 1. `backend/` (Node.js + Express)
Esta carpeta contiene toda la lógica del lado del servidor, APIs y conexión a la base de datos PostgreSQL.

- **`src/config/`**: Configuraciones generales del proyecto. Aquí deberías poner archivos para la conexión a PostgreSQL, configuración de variables de entorno, etc.
- **`src/controllers/`**: Manejadores de las peticiones (request) y respuestas (response). Aquí se define qué hacer cuando se llama a una ruta.
- **`src/middlewares/`**: Funciones intermedias que se ejecutan antes de llegar a los controladores (ej. validación de tokens JWT, manejo de errores).
- **`src/models/`**: Definición de los esquemas y modelos de datos (si usas Sequelize, TypeORM o queries directas a PostgreSQL).
- **`src/routes/`**: Definición de los endpoints de la API. Conectan una URL específica con su respectivo controlador.
- **`src/services/`**: Lógica de negocio de la aplicación. Los controladores llaman a los servicios para interactuar con la base de datos u otras APIs externas.
- **`src/app.js`**: Configuración principal de Express (middlewares globales, inyección de rutas).
- **`src/server.js`**: Punto de entrada de la aplicación. Inicia el servidor HTTP.
- **`.env`**: Archivo de variables de entorno (credenciales de DB, puertos, secretos).
- **`package.json`**: Dependencias de Node.js del backend.

### 2. `frontend/` (Next.js)
Esta carpeta contiene la aplicación frontend utilizando React y el App Router de Next.js.

- **`src/app/`**: Reemplaza las carpetas clásicas de `screens` y `navigation` de React Native. Aquí se define el enrutamiento principal mediante carpetas. Por ejemplo, `page.js` representa la vista y `layout.js` el esqueleto envolvente.
- **`src/components/`**: Componentes reutilizables de UI (botones, tarjetas, modales, etc.) que no están directamente atados a una ruta en particular.
- **`src/config/`**: Archivos de configuración general para el frontend (ej. URLs base de la API, variables del sistema).
- **`src/context/`**: Manejo del estado global de la aplicación (React Context, contextos de autenticación, carrito, etc.).
- **`src/hooks/`**: Custom hooks (por ejemplo, `useFetch`, `useAuth`, `useWindowSize`).
- **`src/services/`**: Funciones para realizar peticiones HTTP (archivos que centralizan llamadas `fetch` o `axios` al backend).
- **`src/styles/`**: Estilos globales (como `globals.css`) y paletas de colores. Los estilos locales se pueden manejar con CSS Modules junto a cada componente, pero aquí residen las bases de diseño.
- **`src/utils/`**: Funciones o helpers utilitarios genéricos (formateo de fechas, de moneda, validaciones de regex, etc.).
- **`public/`**: Reemplaza las antiguas carpetas `images` o `assets`. Aquí se almacenan imágenes estáticas, fuentes o iconos que Next.js servirá de forma optimizada.
- **`next.config.js`**: Archivo de configuración propio de Next.js.
- **`package.json`**: Dependencias de Node.js del frontend (React, Next, etc.).

---

## Cómo Iniciar el Proyecto

Para iniciar el proyecto de forma local, necesitas levantar tanto el backend como el frontend en terminales separadas.

### 1. Iniciar el Backend (Node.js)

Abre una terminal y ejecuta los siguientes comandos:

```bash
cd backend
npm install
npm run dev
```

El servidor del backend iniciará en `http://localhost:5000` (puedes verificar su estado en `http://localhost:5000/api/health`).

### 2. Iniciar el Frontend (Next.js)

Abre **una nueva terminal** y ejecuta los siguientes comandos:

```bash
cd frontend
npm install
npm run dev
```

El servidor del frontend iniciará en `http://localhost:3000`. Abre esa dirección en tu navegador para ver la página de inicio.

---

Este esqueleto proporciona una separación limpia de responsabilidades siguiendo el patrón MVC/Servicios en el backend y una estructura modular basada en componentes y rutas para el frontend, ideal para una escalabilidad a largo plazo.
