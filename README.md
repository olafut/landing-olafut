# 📖 OLAFUT - Guía Completa del Sitio Web

**¡Bienvenido!** Esta guía te enseñará cómo editar el sitio web de OLAFUT sin necesitar conocimientos de programación. Todo se hace directamente desde GitHub en tu navegador.

---

## 📑 Tabla de Contenido

1. [¿Qué puedo editar?](#-qué-puedo-editar)
2. [¿Cómo funciona el despliegue?](#-cómo-funciona-el-despliegue)
3. [Cómo editar textos del sitio](#-cómo-editar-textos-del-sitio)
   - [Paso a paso](#paso-a-paso)
   - [¿Qué archivos editar?](#qué-archivos-editar)
4. [Cómo actualizar artículos del blog (Notion)](#-cómo-actualizar-artículos-del-blog-notion)
5. [Tags especiales para dar formato](#-tags-especiales-para-dar-formato)
6. [Guía detallada por archivo](#-guía-detallada-por-archivo)
7. [Errores comunes y cómo solucionarlos](#-errores-comunes-y-cómo-solucionarlos)
8. [¿Necesitas ayuda?](#-necesitas-ayuda)

---

## 🎯 ¿Qué puedo editar?

Puedes editar **TODO el contenido de texto** del sitio web de Olafut:

- ✅ Títulos y subtítulos de todas las páginas
- ✅ Textos del menú y footer
- ✅ Descripciones de iniciativas (OLA-CAST, OLA-DIGITAL, etc.)
- ✅ Estadísticas y números de impacto
- ✅ Línea de tiempo e historia
- ✅ Valores de la organización
- ✅ Artículos del blog (desde Notion)

---

## 🚀 ¿Cómo funciona el despliegue?

El sitio web se actualiza mediante **Pull Requests** (PR) de la rama `develop` hacia `main`. El proceso siempre es:

1. **Editas archivos en la rama `develop`** → Guardas los cambios (commit)
2. **Creas un Pull Request de `develop` → `main`** → Solicitas publicar los cambios
3. **GitHub Actions se ejecuta automáticamente** → Construye el sitio, valida los cambios (tarda 3-5 minutos)
4. **Esperas que termine el proceso** → Verás un ✅ verde cuando esté listo
5. **Haces merge del Pull Request** → Los cambios se publican
6. **¡Tu contenido está en vivo!** → En 2-3 minutos después del merge

**Importante**: TODOS los cambios, ya sean textos o blog, siguen este mismo flujo de Pull Request.

---

## 📝 Cómo Editar Textos del Sitio

### Paso a Paso

#### 1️⃣ **Abre GitHub en la rama `develop`**

Ve a la carpeta de traducciones en la rama develop:

`https://github.com/olafut/landing-olafut/tree/develop/messages/es`

Verás 5 archivos que puedes editar:

```
📁 messages/es/
  📄 home.ts       ← Página de inicio
  📄 about.ts      ← Página "Acerca de"
  📄 layout.ts     ← Menú y footer
  📄 blog.ts       ← Textos del blog
  📄 notFound.ts   ← Página de error
```

#### 2️⃣ **Selecciona el archivo a editar**

Haz clic en el archivo que quieres cambiar (por ejemplo: `home.ts`)

#### 3️⃣ **Activa el modo de edición**

Busca el **ícono de lápiz (✏️)** en la esquina superior derecha y haz clic

#### 4️⃣ **Edita el texto**

- Busca el texto que quieres cambiar
- Escribe el nuevo texto
- ⚠️ **MUY IMPORTANTE**: NO borres:
  - Comillas simples (`'...'`)
  - Comas (`,`)
  - Llaves (`{`, `}`)
  - Corchetes (`[`, `]`)

**Ejemplo CORRECTO**:

```typescript
title: 'Nuevo título aquí',  // ✅ Bien
```

**Ejemplo INCORRECTO**:

```typescript
title: Nuevo título aquí,  // ❌ Faltan comillas
```

#### 5️⃣ **Guarda los cambios en `develop`**

1. Baja hasta el final de la página
2. En **"Commit message"** escribe qué cambiaste:
   - Ejemplo: `"Actualicé el título del Hero"`
   - Ejemplo: `"Agregué nueva estadística"`
3. Asegúrate de que diga **"Commit directly to the `develop` branch"**
4. Haz clic en **"Commit changes"** (botón verde)
5. ¡Listo! Tus cambios se guardaron en la rama `develop`

#### 6️⃣ **Crea el Pull Request para publicar**

Ahora necesitas crear un Pull Request para mover tus cambios de `develop` a `main`:

1. **Ve a la pestaña "Pull Requests"** en GitHub
2. Haz clic en **"New Pull Request"** (botón verde)
3. Verás que ya está seleccionado:
   - **Base**: `main`
   - **Compare**: `develop`
4. Haz clic en **"Create Pull Request"**
5. Ponle un título descriptivo: `"Actualizar textos de [sección]"`
6. Haz clic en **"Create Pull Request"** de nuevo

#### 7️⃣ **Espera y haz merge**

1. **Espera 3-5 minutos** a que GitHub Actions termine de validar y construir
2. Verás un **✅ verde** cuando esté listo
3. Haz clic en **"Merge Pull Request"**
4. Confirma con **"Confirm Merge"**
5. **¡Listo!** En 2-3 minutos tus cambios estarán en vivo 🎉

---

### ¿Qué Archivos Editar?

| 📄 Archivo        | 🎯 Qué Contiene           | 🔧 Cuándo Editarlo                        |
| ----------------- | ------------------------- | ----------------------------------------- |
| **`home.ts`**     | Página de inicio completa | Cambiar títulos, agregar iniciativas      |
| **`about.ts`**    | Página "Acerca de"        | Actualizar misión, historia, estadísticas |
| **`layout.ts`**   | Menú superior y footer    | Cambiar links, email, ubicación           |
| **`blog.ts`**     | Textos del blog           | Cambiar botones y títulos                 |
| **`notFound.ts`** | Página de error 404       | Cambiar mensaje de error                  |

> ⚠️ **NO edites**: `types.ts` ni `es.translations.ts` (son archivos técnicos)

---

## 🔄 Cómo Actualizar Artículos del Blog (Notion)

Los artículos del blog vienen de **Notion**, pero para que aparezcan en el sitio web necesitas activar el "trigger" (disparador) y crear un Pull Request.

### Proceso Completo

#### 📌 **1. Edita o crea artículos en Notion**

- Ve a tu base de datos de Notion
- Crea un artículo nuevo o edita uno existente
- Asegúrate de marcarlo como **"Publicado"**

#### 📌 **2. Activa el disparador (Trigger)**

**¿Qué es el trigger?**
Es un archivo especial (`trigger.txt`) que le dice a GitHub: _"Hey, hay cambios nuevos en Notion, descárgalos"_

**Cómo editarlo:**

1. **Abre el archivo trigger en GitHub** (rama `develop`):

   ```
   https://github.com/olafut/landing-olafut/blob/develop/trigger.txt
   ```

2. **Haz clic en el ícono de lápiz (✏️)** para editar

3. **Cambia la fecha y hora** por la actual:

   ```
   Fecha de última modificación:

   12 de noviembre de 2025, 10:30 hrs
   ```

4. **Guarda los cambios en `develop`**:
   - En "Commit message" escribe: `"Trigger: actualizar blog desde Notion"`
   - Asegúrate de que diga **"Commit directly to the `develop` branch"**
   - Haz clic en **"Commit changes"**

#### 📌 **3. Crea un Pull Request (PR)**

**¿Qué es un Pull Request?**
Es como decir: _"Tengo cambios listos, revísalos y publícalos"_

**Cómo crearlo:**

1. **Ve a la pestaña "Pull Requests"** en GitHub
2. Haz clic en **"New Pull Request"** (botón verde)
3. Verás que ya está seleccionado:
   - **Base**: `main`
   - **Compare**: `develop`
4. Haz clic en **"Create Pull Request"**
5. Ponle un título: `"Actualizar blog desde Notion - [Fecha]"`
6. Haz clic en **"Create Pull Request"** de nuevo

#### 📌 **4. Espera el proceso automático**

GitHub hará esto automáticamente:

1. ✅ Conectarse a Notion
2. ✅ Descargar los artículos nuevos/editados
3. ✅ Descargar las imágenes
4. ✅ Construir el sitio web
5. ✅ Publicar los cambios

**Esto tarda 3-5 minutos**. Verás un comentario en el PR cuando esté listo:

```
✅ Build completado exitosamente
🚀 Los cambios están desplegados en la rama `static`
📦 Las imágenes de Notion han sido descargadas
```

#### 📌 **5. Fusiona el Pull Request**

1. Una vez que veas el mensaje de éxito, haz clic en **"Merge Pull Request"**
2. Confirma haciendo clic en **"Confirm Merge"**
3. ¡Listo! En 2-3 minutos tus artículos estarán en el sitio web

---

### 🎬 Resumen Rápido del Flujo para Blog

```
1. Editas/creas artículos en Notion
   ↓
2. Editas trigger.txt en rama develop (cambias fecha)
   ↓
3. Haces commit a develop
   ↓
4. Creas Pull Request (develop → main)
   ↓
5. GitHub descarga de Notion y construye automáticamente (3-5 min)
   ↓
6. Esperas el ✅ verde
   ↓
7. Fusionas el Pull Request
   ↓
8. ¡Blog actualizado en vivo! 🎉
```

---

## ✨ Tags Especiales para Dar Formato

Algunos textos pueden tener **formato especial** usando "tags" (etiquetas). Son como códigos que hacen que las palabras se vean diferentes.

### 📌 Lista de Tags Disponibles

| Tag                            | ¿Qué Hace?                   | Ejemplo                                    |
| ------------------------------ | ---------------------------- | ------------------------------------------ |
| `<important>texto</important>` | Resalta algo MUY importante  | `El <important>Fútbol</important> Femenil` |
| `<logo>OLAFUT</logo>`          | Muestra el logo de Olafut    | `Somos <logo>Olafut</logo>`                |
| `<tag>texto</tag>`             | Muestra una etiqueta morada  | `el <tag>HUB</tag> del fútbol`             |
| `<b>texto</b>`                 | Texto en **negritas**        | `<b>OLAFUT</b> es increíble`               |
| `<strong>texto</strong>`       | Texto **extra importante**   | `<strong>PASIÓN</strong>`                  |
| `<small>texto</small>`         | Texto pequeño (aclaraciones) | `HUB <small>(centro)</small>`              |

### ⚠️ Reglas Importantes de los Tags

1. **Siempre en pares**: Cada tag de apertura necesita uno de cierre

   - ✅ CORRECTO: `<b>Hola</b>`
   - ❌ INCORRECTO: `<b>Hola` (falta `</b>`)

2. **No los anides mal**: Si abres un tag, ciérralo antes de abrir otro

   - ✅ CORRECTO: `<b>Texto</b> <important>otro</important>`
   - ❌ INCORRECTO: `<b>Texto <important>otro</b></important>`

3. **Úsalos con moderación**: Demasiados tags hacen el texto confuso

---

## 📚 Guía Detallada por Archivo

### 📄 `home.ts` - Página de Inicio

**Contiene:**

- **Hero**: Banner principal (título, subtítulo, botón)
- **WhyOlafut**: Sección "¿Por qué nace Olafut?"
- **Initiatives**: Las 5 iniciativas (OLA-CAST, OLA-DIGITAL, etc.)
- **Trust Badges**: Insignias de confianza
- **Floating Card**: Tarjeta flotante

#### 🎨 Cómo Editar una Iniciativa Existente

Puedes editar el **título** y la **descripción** de cualquier iniciativa:

```typescript
'OLA-CAST': {
  title: 'OLA-CAST Renovado',  // ✅ Puedes cambiar el título
  description: [
    'Nueva descripción del podcast.',  // ✅ Cambiar descripción
    'Ahora con más episodios semanales.',  // ✅ Agregar más párrafos
  ],
},
```

> ✅ **Puedes cambiar**: `title` y `description`
> ⚠️ **NO cambies**: La ID entre comillas (`'OLA-CAST'`) - debe permanecer igual

#### ➕ Cómo Agregar una Nueva Iniciativa

**⚠️ IMPORTANTE**: Agregar una **nueva iniciativa** requiere ayuda de un desarrollador.

**¿Por qué?** Además del texto, se necesita:

1. 🖼️ Una imagen de la iniciativa
2. 🎨 Un ícono visual
3. 📐 Configuración de layout

**Proceso:**

1. Agrega el texto en `home.ts`
2. Contacta a un desarrollador con:
   - Nombre de la iniciativa
   - Imagen que quieres usar
   - Ícono deseado
   - Si debe decir "Muy pronto..."

---

### 📄 `about.ts` - Página "Acerca de"

**Contiene:**

- **Hero**: Encabezado de la página
- **Mission**: Misión de Olafut
- **Stats**: Números de impacto (estadísticas)
- **Timeline**: Línea de tiempo e historia
- **Values**: Valores de la organización

**Ejemplo de estadística:**

```typescript
Stats: {
  items: {
    followers: {
      number: '5,000+',  // ← Cambia el número aquí
      label: 'Seguidoras',  // ← Cambia el texto aquí
    },
  },
},
```

**Cómo agregar una nueva estadística:**

```typescript
newStat: {  // ← ID única (sin espacios, sin acentos)
  number: '100+',
  label: 'Descripción',
},
```

---

### 📄 `layout.ts` - Menú y Footer

Los textos que aparecen en **TODAS** las páginas:

```typescript
Navigation: {
  home: 'Inicio',
  about: 'Acerca de',
  blog: 'Blog',
},

Footer: {
  contact: {
    email: 'olafut10@gmail.com',  // ← Cambiar email
    location: 'Ciudad de México, México',  // ← Cambiar ubicación
  },
},
```

---

### 📄 `blog.ts` - Textos del Blog

Textos de la página del blog (botones, títulos):

```typescript
Blog: {
  readArticle: 'Leer artículo',
  moreStories: 'Más historias',
  readingTime: 'min de lectura',
},
```

---

### 📄 `notFound.ts` - Página 404

Textos cuando alguien entra a una página que no existe:

```typescript
NotFound: {
  error: '404',
  title: 'Página no encontrada',
  description: 'Lo sentimos, la página que buscas no existe.',
  btnText: 'Volver al inicio',
},
```

---

## ⚠️ Errores Comunes y Cómo Solucionarlos

### 🔴 Error: "Syntax Error"

**Qué significa:** Borraste algo importante (una coma, comilla, etc.)

**Solución:**

1. Ve al historial de cambios (botón "History")
2. Haz clic en "Revert" para deshacer tus cambios
3. Inténtalo de nuevo con más cuidado

### 🔴 Error: "Los cambios no aparecen en el sitio"

**Posibles causas:**

- ¿Hiciste el Pull Request y lo fusionaste? Los cambios solo se publican después del merge
- Espera 2-3 minutos después del merge (tarda un poco en publicarse)
- Revisa que el GitHub Action haya terminado exitosamente (✅ verde)
- Verifica que editaste el archivo correcto en la rama `develop`

### 🔴 Error: "Olvidé qué cambié"

**Solución:**

1. Ve al archivo en GitHub
2. Haz clic en "History"
3. Verás todos los cambios anteriores con fechas

---

## ✅ Checklist Completo

**Antes de hacer commit:**

- [ ] ¿El texto tiene sentido?
- [ ] ¿Revisé la ortografía?
- [ ] ¿Mantuve todas las comillas y comas?
- [ ] ¿Los tags están bien cerrados? (`<b>texto</b>`)
- [ ] ¿El commit message explica qué cambié?
- [ ] ¿Estoy editando en la rama `develop`?

**Antes de hacer merge del PR:**

- [ ] ¿El GitHub Action terminó exitosamente? (✅ verde)
- [ ] ¿Revisé que los cambios son correctos?

---

## 🆘 ¿Necesitas ayuda?

Si algo no funciona o tienes dudas:

1. **Para errores en el PR**: Revisa que el GitHub Action se esté ejecutando y espera a que termine
2. **Si el GitHub Action falla (❌ rojo)**: Haz clic en "Details" para ver qué falló, o contacta al equipo de desarrollo
3. **Si los cambios no aparecen**: Verifica que hiciste el merge del Pull Request después de que terminara el proceso
4. **Para dudas sobre qué editar**: Consulta la sección "Guía detallada por archivo" de este documento

---

## 📚 Glosario

**Términos que puede que escuches:**

- **Commit**: Guardar cambios en GitHub
- **Branch (Rama)**: Una versión del código. Usamos `develop` para editar y `main` para publicar
- **`develop`**: La rama donde haces todos tus cambios y ediciones
- **`main`**: La rama principal que se publica en el sitio web en vivo
- **Pull Request (PR)**: Solicitud para mover cambios de `develop` a `main` y publicarlos
- **Merge**: Fusionar/aceptar un Pull Request para que los cambios se publiquen
- **GitHub Actions**: Proceso automático que construye y valida el sitio
- **Notion**: La plataforma donde escribes los artículos del blog
- **Trigger**: Archivo que activa la descarga de artículos desde Notion
- **Build**: Proceso de construir el sitio web
- **Deploy**: Publicar el sitio web

---

## 📂 Archivos Importantes de Referencia

| Archivo           | Ubicación         | Qué Contiene                        |
| ----------------- | ----------------- | ----------------------------------- |
| **`home.ts`**     | `messages/es/`    | Página de inicio                    |
| **`about.ts`**    | `messages/es/`    | Página "Acerca de"                  |
| **`layout.ts`**   | `messages/es/`    | Menú y footer                       |
| **`blog.ts`**     | `messages/es/`    | Textos del blog                     |
| **`notFound.ts`** | `messages/es/`    | Página 404                          |
| **`trigger.txt`** | Raíz del proyecto | Disparador para descargas de Notion |

---

**Última actualización**: Noviembre 2025
**Versión**: 3.0
**Mantenido por**: Equipo de Desarrollo de Olafut 💜
