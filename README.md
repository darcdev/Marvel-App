# Proyecto Marvel Fans App : Prueba técnica Tecnofactory

## Url de la aplicación Web  
https://sensational-sunburst-63c910.netlify.app/discover

## Stack Tecnológico

- Angular 19.1.0: Framework de aplicaciones web single page application  
- Node 22: Ejecución de javascript en el servidor.  
- NGXS 19.0.0: Gestión de estado de la app  
- PrimeNG 19.1.2: Componentes UI para Angular  
- Tailwind CSS 4.0.6 : Framework CSS de utilerías  
- Supabase JS 2.49.4: Backend como servicio (BaS)  
- RxJS 7.8.0: Programación reactiva con observables  
- TypeScript 5.7.2: Para tipar el javascript  
- ESLint 9.15.0: Analizador estático de código (detectar errores)  
- Prettier : Formatear código.  
- Karma 6.4.0: Ejecutor de pruebas JavaScript  
- Jasmine 5.6.0: Framework para pruebas unitarias  
- Docker: empaquetar aplicación con sus dependencias.  

**Nota : La aplicación es Responsive**

---

## Manual de Instalación – Marvel App

### Requisitos

Se debe tener Node.js versión 18 o superior instalado (https://nodejs.org/en)

- Verifica que tengas node y la versión correcta con el comando  
  `node -v`  
- Asegúrate que tengas el gestor de dependencias de node (viene por defecto con Node).  
  Si Node no lo instaló, no funcionara la instalación de paquetes, usa el comando  
  `npm -v`

### Pasos

- Coloca el código fuente en una carpeta local  
- Abre una terminal en esa carpeta  
- Ejecuta `npm install` para instalar dependencias  
- Ejecuta `ng serve` para levantar el proyecto  
- Abre el navegador en http://localhost:4200

Para ejecutar los test realizados, ejecuta `ng test` en la raíz principal del proyecto.  
Debe aparecer las pruebas hasta el momento:

### En caso de error

- Si hay errores con paquetes, ejecuta:  
  `npm cache clean --force`
  `npm install`

- Si el puerto 4200 está ocupado en tu computadora, usa:  
  `ng serve --port 4201`

y abre http://localhost:4201  
**Nota:** coloca en `--port` un puerto que tengas libre, para evitar problemas de puertos ya usados.

---

## Patrón de Arquitectura : Clean Architecture

El proyecto está organizado en capas para separar las responsabilidades, este patrón está orientado al dominio del negocio, y a los casos de uso que permiten cumplir las necesidades del mismo.

### Core

Esta capa es la base del proyecto y contiene elementos fundamentales que se usan en todo el sistema:

- `base/`: Clases abstractas y bases que otros componentes van a heredar.  
- `config/`: Configuraciones globales como URLs, constantes o variables que se usan en toda la app.  
- `factories/`: Creadores de objetos siguiendo el patrón Factory para facilitar la instanciación.  
- `guards/`: Protección de rutas, controlando acceso y permisos.  
- `interceptors/`: Interceptores HTTP que manejan las peticiones y respuestas de forma centralizada.  
- `models/`: Modelos base que otras capas extienden para sus propias necesidades.  
- `utils/`: Funciones auxiliares y utilitarias usadas en varias partes del código.  
- `validations/`: Sistema de validaciones centralizado para manejar errores y reglas comunes.  

### Data

Aquí se maneja todo lo relacionado con los datos, tanto desde APIs como almacenamiento:

- `interfaces/`: Contratos que definen cómo se debe interactuar con las fuentes de datos.  
- `mappers/`: Encargados de transformar datos de las APIs a modelos que usa la aplicación.  
- `models/`: Modelos específicos para esta capa, representando los datos tal cual vienen o se necesitan.  
- `repositories/`: Implementaciones concretas que hacen la conexión con las fuentes de datos.  
- `services/`: Servicios que realizan llamadas directas a APIs o manejan operaciones externas.  

### Domain

Esta capa contiene la lógica de negocio pura, independiente de tecnología o frameworks:

- `entities/`: Los objetos principales que representan el negocio.  
- `interfaces/`: Contratos para definir cómo debe funcionar la lógica de negocio.  
- `usecases/`: Casos de uso que implementan reglas y procesos específicos, organizados por funcionalidad (por ejemplo, cómics, personajes o favoritos).  

### Presentation

Aquí se maneja todo lo relacionado con la interfaz y experiencia de usuario:

- `components/`: Componentes reutilizables, como botones o tarjetas.  
- `constants/`: Valores fijos para UI, como estados o mensajes.  
- `directives/`: Directivas personalizadas para Angular.  
- `layouts/`: Plantillas base que forman la estructura visual, como encabezados o barras laterales.  
- `pages/`: Componentes que representan páginas completas.  
- `pipes/`: Transformadores que modifican datos para mostrarlos en pantalla.  
- `services/`: Servicios específicos para la UI.  
- `shared/`: Recursos compartidos, incluyendo componentes comunes, modelos y utilidades.

---

## Mejoras a la APP

- Más test para cubrir más casos  
- Patrón de diseño, command para separar responsabilidad del invocador y su operación de la vista.  
- Mejora en la accesibilidad  
- Optimización de imágenes  
- Quizás, un cambio de fuente de letra?  
- Detalles en el responsive, más avanzados.

---

Muchas gracias !
