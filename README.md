# OLAFUT - Sitio Web

Bienvenido al repositorio del sitio web de OLAFUT. Este documento te guiará paso a paso para desplegar cambios en el sitio web de forma sencilla.

## ¿Cómo funciona el despliegue?

El sitio web se actualiza automáticamente cuando se hace un **Pull Request (PR)** hacia la rama `main`. GitHub se encarga de todo el proceso de construcción y despliegue automáticamente.

## Guía rápida: Cómo desplegar cambios

### Paso 1: Editar los textos del sitio

Los textos del sitio web (títulos, descripciones, etc.) se encuentran en el archivo:

📄 **`messages/es.ts`**

Simplemente edita este archivo en GitHub directamente:
1. Ve al archivo en GitHub
2. Haz clic en el botón de editar (ícono del lápiz)
3. Modifica los textos que necesites
4. Guarda los cambios

### Paso 2: Activar el despliegue

Para que GitHub detecte que hay cambios nuevos y active el proceso de despliegue, necesitas modificar el archivo:

📄 **`trigger.txt`**

Este archivo contiene una fecha que sirve como "disparador" de cambios. Solo tienes que:

1. Abre el archivo `trigger.txt` en GitHub
2. Cambia la fecha y hora por la actual
3. Guarda los cambios

**Ejemplo:**
```
Fecha de última modificación:

10 de noviembre de 2025, 14:39 hrs
```

### Paso 3: Crear el Pull Request

Una vez que hayas editado los archivos que necesites (`es.ts` y/o `trigger.txt`):

1. Ve a la sección **"Pull Requests"** en GitHub
2. Haz clic en **"New Pull Request"**
3. Selecciona tu rama con los cambios → `main`
4. Haz clic en **"Create Pull Request"**
5. Agrega un título descriptivo (ejemplo: "Actualizar textos de la sección Hero")
6. Haz clic en **"Create Pull Request"**

### Paso 4: El proceso automático se activa

Una vez creado el Pull Request:

✅ GitHub Action se ejecutará automáticamente
- Construirá el sitio web con tus cambios
- Descargará imágenes de Notion si hay nuevas
- Desplegará todo a la rama `static`
- Te dejará un comentario en el PR confirmando que todo salió bien

**¡Y listo!** Tus cambios estarán publicados.

## Archivos importantes

| Archivo | Qué contiene |
|---------|--------------|
| **`messages/es.ts`** | Todos los textos del sitio web (títulos, descripciones, botones, etc.) |
| **`trigger.txt`** | Archivo para forzar un nuevo despliegue (solo cambia la fecha) |
| **`.github/workflows/deploy.yml`** | Configuración del proceso automático (no tocar a menos que sea necesario) |

## ¿Por qué usar el archivo `trigger.txt`?

Este archivo es una solución práctica para activar despliegues sin necesidad de contratar un CMS (sistema de gestión de contenidos), lo que nos ahorra costos. Aunque no es la solución más elegante técnicamente, cumple perfectamente su función.

## ¿Necesitas ayuda?

Si algo no funciona o tienes dudas:
1. Revisa que el Pull Request se haya creado correctamente
2. Verifica que el GitHub Action se esté ejecutando (aparecerá un indicador amarillo mientras trabaja)
3. Si ves un ❌ rojo, algo falló - revisa los logs del Action para más detalles

---

**Nota:** Este proyecto está construido con Next.js y se despliega automáticamente mediante GitHub Actions.
