# Guía de Contribución

¡Gracias por tu interés en contribuir a la página web de la comunidad de Programadores y Estudiantes! Toda contribución es bienvenida.

Para asegurar un desarrollo coherente y organizado, hemos establecido una serie de guías que deben seguirse. Por favor, léelas con atención antes de empezar.

## Cómo Empezar

El flujo de trabajo para proponer cambios es a través de Pull Requests. Sigue estos pasos:

1.  **Fork del Repositorio:** Haz un `fork` de este repositorio a tu propia cuenta de GitHub.
2.  **Clona tu Fork:** Clona tu fork a tu máquina local.
    ```bash
    git clone https://github.com/tu-usuario/pye-web.git
    ```
3.  **Crea una Nueva Rama:** Antes de hacer cualquier cambio, crea una nueva rama descriptiva. Usa el tipo de commit como prefijo.
    ```bash
    git checkout -b <tipo>/<nombre-descriptivo>
    # Ejemplo: git checkout -b feat/nueva-pagina-contacto
    ```
4.  **Realiza tus Cambios:** Implementa tus mejoras o correcciones en la nueva rama.
5.  **Envía un Pull Request:** Una vez que termines, sube tus cambios a tu fork y abre un Pull Request desde tu rama hacia la rama `main` del repositorio original.

## Mensajes de Commit

Utilizamos el estándar de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para mantener un historial de cambios limpio y legible. Esto es obligatorio, ya que nuestro `CHANGELOG.md` se genera automáticamente a partir de estos mensajes con `git-cliff`.

La estructura de un mensaje de commit debe ser la siguiente:

```
<tipo>(<ámbito>): <descripción>
```

-   **tipo:** Describe la naturaleza del cambio. Los tipos permitidos son:
    -   `feat`: Para nuevas funcionalidades.
    -   `fix`: Para correcciones de errores (bugs).
    -   `docs`: Para cambios en la documentación.
    -   `style`: Para cambios de formato, espaciado, etc. (sin afectar la lógica).
    -   `refactor`: Para reestructuraciones de código que no alteran su comportamiento.
    -   `perf`: Para mejoras de rendimiento.
    -   `test`: Para añadir o corregir pruebas.
    -   `chore`: Para tareas rutinarias, configuración, etc.
    -   `ci`: Para cambios relacionados con la integración continua.
    -   `build`: Para cambios que afectan el sistema de build o dependencias.
-   **ámbito (opcional):** Especifica la parte del código afectada (ej. `frontend`, `backend`, `auth`, `ui`).
-   **descripción:** Un resumen conciso de los cambios en minúsculas y sin punto final.

**Ejemplo:**

```
feat(frontend): agregar seccion de perfil de usuario
```

### Filosofía de Commits: Atomicidad y Claridad

Más allá del formato, es crucial que cada commit sea **atómico**, es decir, que contenga cambios relacionados a una única tarea o funcionalidad. Un commit debe ser una unidad lógica de cambio.

-   **Mensajes Concisos:** El resumen del commit debe ser claro y no superar idealmente los 72 caracteres. Un mensaje largo o un commit con muchos cambios puede indicar que se están realizando múltiples tareas a la vez.
-   **Commits Pequeños:** Si estás trabajando en varios cambios no relacionados (ej. una nueva función y una corrección de un bug), divídelos en commits separados. Esto facilita enormemente la revisión de código y el seguimiento del historial.

En resumen, la clave es la práctica de hacer commits pequeños, bien definidos y con mensajes claros para facilitar la revisión, el mantenimiento y el seguimiento del código a largo plazo.

## Estilo de Código y Formateo

Para mantener la consistencia y la calidad del código, este proyecto utiliza [Biome](https://biomejs.dev/) para el formateo, linting y organización de importaciones. Es fundamental que todo el código cumpla con estos estándares antes de ser integrado.

Antes de realizar un commit, asegúrate de que tu código cumple con las reglas del proyecto ejecutando los siguientes comandos:

-   `pnpm fmt`: Formatea automáticamente el código para adherirse a los estándares definidos.
-   `pnpm lint`: Identifica y reporta problemas de estilo y posibles errores lógicos.
-   `pnpm check`: Realiza una verificación completa, incluyendo formato y linting.

Para aquellos que prefieren la eficiencia, Biome puede aplicar muchas de estas correcciones automáticamente. Puedes usar los siguientes comandos para intentar solucionar los problemas detectados:

-   `pnpm fmt:check`: Verifica el formato sin aplicar cambios.
-   `pnpm lint:fix`: Intenta corregir automáticamente los problemas de linting.
-   `pnpm check:fix`: Ejecuta una verificación completa y aplica todas las correcciones automáticas posibles.

Asegúrate de que tu código pase todas las verificaciones antes de enviar un Pull Request.

## Reglas para el Frontend

La sección del frontend está construida con Astro y sigue una arquitectura específica. La intención es implementar progresivamente los principios de **Clean Architecture**, por lo que se espera que las nuevas contribuciones se alineen con esta idea.

-   **Estructura de Componentes:** Sigue la metodología de Atomic Design. Los nuevos componentes deben ubicarse en `src/frontend/src/components/` dentro de las carpetas `atoms`, `molecules` u `organism` según corresponda.
-   **Props de Componentes:** Las interfaces para las `props` de los componentes deben definirse en la carpeta `src/frontend/src/schemas/`.
-   **Modelos de Datos:** Las interfaces para los modelos de datos globales de la aplicación (ej. `User`) se encuentran en `src/frontend/src/models/`.
-   **Iconos:** El directorio `src/frontend/src/icons/` está destinado exclusivamente para iconos en formato SVG.
-   **TypeScript:** Todo el código debe estar tipado correctamente.
-   **Nomenclatura:** Los archivos de componentes de Astro deben usar `PascalCase.astro`.

## Reglas para el Backend

El backend de este proyecto, desarrollado con NestJS, representa una pieza fundamental en nuestra arquitectura a futuro. Actualmente, esta sección se encuentra en una fase inicial de conceptualización y **aún no está funcional**. No se han realizado modificaciones significativas en esta área desde el inicio del proyecto.

Para asegurar una progresión ordenada y evitar conflictos, **solicitamos amablemente que las contribuciones directas al código del backend se realicen únicamente tras una coordinación y aprobación explícita del equipo**.

Sin embargo, valoramos enormemente tus ideas y perspectivas. Si tienes propuestas para nuevas funcionalidades, mejoras o cualquier sugerencia relacionada con el backend, te invitamos a abrir una `Issue` en el repositorio. Esto nos permitirá discutir tus aportes, integrarlos en nuestra hoja de ruta y colaborar de manera efectiva. Tu visión es crucial para el crecimiento del proyecto.


