# 📖 Guía Completa para Editar el Sitio Web de Olafut

**¡Bienvenida!** Esta guía te enseñará cómo editar los textos del sitio web sin necesitar conocimientos de programación. Todo se hace directamente desde GitHub en tu navegador.

---

## 📑 Índice

1. [¿Qué puedo editar?](#-qué-puedo-editar)
2. [Cómo editar textos del sitio](#-cómo-editar-textos-del-sitio)
   - [Paso a paso con capturas](#paso-a-paso)
   - [¿Qué archivos editar?](#qué-archivos-editar)
3. [Cómo actualizar artículos del blog (Notion)](#-cómo-actualizar-artículos-del-blog-notion)
4. [Tags especiales para dar formato](#-tags-especiales-para-dar-formato)
5. [Guía detallada por archivo](#-guía-detallada-por-archivo)
6. [Errores comunes y cómo solucionarlos](#-errores-comunes-y-cómo-solucionarlos)
7. [¿Necesitas ayuda?](#-necesitas-ayuda)

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

## 📝 Cómo Editar Textos del Sitio

### Paso a Paso

#### 1️⃣ **Abre GitHub**

Ve a: `https://github.com/tu-usuario/olafut/tree/main/messages/es`

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

#### 5️⃣ **Guarda los cambios**

1. Baja hasta el final de la página
2. En **"Commit message"** escribe qué cambiaste:
   - Ejemplo: `"Actualicé el título del Hero"`
   - Ejemplo: `"Agregué nueva estadística"`
3. Haz clic en **"Commit changes"** (botón verde)
4. ¡Listo! Tus cambios se guardarán

#### 6️⃣ **Los cambios ya están publicados** 🎉

En 2-3 minutos verás tus cambios en el sitio web

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

Los artículos del blog vienen de **Notion**, pero para que aparezcan en el sitio web necesitas activar el "trigger" (disparador).

### Proceso Completo

#### 📌 **1. Edita o crea artículos en Notion**

- Ve a tu base de datos de Notion
- Crea un artículo nuevo o edita uno existente
- Asegúrate de marcarlo como **"Publicado"**

#### 📌 **2. Activa el disparador (Trigger)**

**¿Qué es el trigger?**
Es un archivo especial (`trigger.txt`) que le dice a GitHub: _"Hey, hay cambios nuevos en Notion, descárgalos"_

**Cómo editarlo:**

1. **Abre el archivo trigger en GitHub**:

   ```
   https://github.com/tu-usuario/olafut/blob/main/trigger.txt
   ```

2. **Haz clic en el ícono de lápiz (✏️)** para editar

3. **Cambia la fecha y hora** por la actual:

   ```
   Fecha de última modificación:

   12 de noviembre de 2025, 10:30 hrs
   ```

4. **Guarda los cambios**:
   - En "Commit message" escribe: `"Trigger: actualizar blog desde Notion"`
   - Haz clic en **"Commit changes"**

#### 📌 **3. Crea un Pull Request (PR)**

**¿Qué es un Pull Request?**
Es como decir: _"Tengo cambios listos, revísalos y publícalos"_

**Cómo crearlo:**

1. **Ve a la pestaña "Pull Requests"** en GitHub
2. Haz clic en **"New Pull Request"** (botón verde)
3. Selecciona:
   - **Base**: `main`
   - **Compare**: `tu-rama` (la rama donde hiciste cambios)
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

### 🎬 Resumen Rápido del Flujo

```
1. Editas en Notion
   ↓
2. Editas trigger.txt (cambias fecha)
   ↓
3. Haces commit
   ↓
4. Creas Pull Request
   ↓
5. GitHub descarga todo automáticamente (3-5 min)
   ↓
6. Fusionas el Pull Request
   ↓
7. ¡Blog actualizado! 🎉
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

### 🎨 Ejemplo Práctico

**SIN formato**:

```
OLAFUT es el HUB del fútbol femenil
```

**CON formato**:

```
<b>OLAFUT</b> es el <tag>HUB</tag> del fútbol femenil
```

**Resultado visual**:

> **OLAFUT** es el <span style="background: #7C3AED; color: white; padding: 2px 10px; border-radius: 6px; font-weight: 600;">HUB</span> del fútbol femenil

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

**Estructura del archivo:**

```typescript
export const Home = {
  Hero: {
    // Banner principal (lo primero que ven)
    badge: "Primer HUB Integral", // Insignia superior
    title: "El <important>Fútbol</important> Femenil...", // Título grande
    subtitle: "OLAFUT es el...", // Texto debajo
    ctaText: "¡Se parte del cambio!", // Botón
  },

  WhyOlafut: {
    // Sección "¿Por qué nace Olafut?"
    title: "¿Por qué nace <logo>OLAFUT</logo>?",
    features: {
      needsMoreThanPromises: "El Futbol Femenil necesita...",
      imagineAPlace: "Imagina un lugar...",
      womenAreTheProtagonists: "Queremos un espacio...",
      passionAndPurpose: "¡Unamos a todas...",
    },
  },

  Initiatives: {
    // Las 5 iniciativas (OLA-CAST, OLA-DIGITAL, etc.)
    title: "¿Cómo vamos a construir el CAMINO?",
    items: {
      "OLA-CAST": {
        title: "OLA-CAST",
        description: [
          "Primer párrafo de descripción",
          "Segundo párrafo (opcional)",
        ],
      },
      // ... más iniciativas
    },
  },
};
```

#### 🎨 Cómo Editar una Iniciativa Existente

Puedes editar libremente el **título** y la **descripción** de cualquier iniciativa existente:

**Ejemplo**:
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

---

#### ➕ Cómo Agregar una Nueva Iniciativa

**⚠️ IMPORTANTE**: Agregar una **nueva iniciativa** (no solo editar las existentes) requiere ayuda de un desarrollador.

**¿Por qué?**
Además del texto que agregas en `home.ts`, se necesita:
1. 🖼️ Una imagen de la iniciativa (en `/public/assets/`)
2. 🎨 Un ícono visual (configurado en el código)
3. 📐 Configuración de layout (izquierda/derecha, "coming soon", etc.)

**Proceso para agregar una nueva iniciativa:**

1. **Agrega el texto** en `messages/es/home.ts`:
   ```typescript
   'OLA-NUEVA': {
     title: 'OLA-NUEVA',
     description: [
       'Descripción de la nueva iniciativa aquí',
     ],
   },
   ```

2. **Contacta a un desarrollador** y proporciona:
   - ✅ El nombre de la iniciativa (ej: "OLA-NUEVA")
   - ✅ La imagen que quieres usar (archivo `.webp` o `.png`)
   - ✅ Qué ícono te gustaría (ej: micrófono, trofeo, binoculares, etc.)
   - ✅ Si quieres que diga "Muy pronto..." (coming soon)
   - ✅ Si la imagen debe ir a la izquierda o derecha

3. **El dev hará**: Agregar la metadata en `InitiativesSection.tsx` y la imagen en `/public/assets/`

4. **¡Listo!** La nueva iniciativa aparecerá en el sitio

> 💡 **Tip**: Si solo quieres **editar** una iniciativa existente, no necesitas ayuda de nadie. Solo edita el texto directamente.

---

### 📄 `about.ts` - Página "Acerca de"

**Estructura del archivo:**

```typescript
export const AboutUs = {
  Hero: {
    // Encabezado de la página
    title: "Somos <logo>Olafut</logo>",
    subtitle: "La OLA del cambio...",
  },

  Mission: {
    // Misión de Olafut
    title: "Nuestra Misión",
    paragraph1: "OLAFUT nace de...",
    paragraph2: "Somos un movimiento...",
  },

  Stats: {
    // Números de impacto
    title: "Olafut en Números",
    subtitle: "El impacto que estamos generando",
    items: {
      followers: {
        number: "5,000+", // ← Cambia el número aquí
        label: "Seguidoras", // ← Cambia el texto aquí
      },
      initiatives: {
        number: "3",
        label: "Iniciativas",
      },
      // Agrega más estadísticas aquí
    },
  },

  Timeline: {
    // Línea de tiempo
    items: {
      foundation: {
        year: "2024",
        title: "Fundación de Olafut",
        description: "Nace el primer club...",
      },
      // Agrega más hitos aquí
    },
  },

  Values: {
    // Valores de la organización
    items: {
      passion: {
        title: "Pasión",
        description: "Por el fútbol femenil...",
      },
      // Agrega más valores aquí
    },
  },
};
```

**Cómo agregar una nueva estadística:**

```typescript
newStat: {  // ← ID única (sin espacios, sin acentos)
  number: '100+',
  label: 'Descripción',
},
```

**Cómo agregar un nuevo hito a la línea de tiempo:**

```typescript
newMilestone: {  // ← ID única descriptiva
  year: '2025',
  title: 'Nombre del hito',
  description: 'Qué pasó en este momento importante',
},
```

**Cómo agregar un nuevo valor:**

```typescript
newValue: {  // ← ID única
  title: 'Nombre del valor',
  description: 'Explicación del valor',
},
```

---

### 📄 `layout.ts` - Menú y Footer

**Qué contiene:**
Los textos que aparecen en **TODAS** las páginas (menú superior y pie de página)

```typescript
export const Layout = {
  Navigation: {
    home: "Inicio", // ← Link del menú
    about: "Acerca de", // ← Link del menú
    blog: "Blog", // ← Link del menú
  },

  Footer: {
    description: "OLAFUT es el HUB...", // Descripción en el footer

    contact: {
      title: "Contacto",
      email: "olafut10@gmail.com", // ← Cambiar email
      location: "Ciudad de México, México", // ← Cambiar ubicación
    },

    copyright: "OlaFut. Todos los derechos reservados.",
  },
};
```

---

### 📄 `blog.ts` - Textos del Blog

Archivo pequeño con textos de la página del blog:

```typescript
export const Blog = {
  title: "Blog",
  description: "Descripción del blog",
  readArticle: "Leer artículo", // Botón de cada artículo
  moreStories: "Más historias", // Título de sección
  publishedArticles: "Artículos publicados",
  readingTime: "min de lectura",
};
```

---

### 📄 `notFound.ts` - Página 404

Textos que aparecen cuando alguien entra a una página que no existe:

```typescript
export const NotFound = {
  error: "404",
  title: "Página no encontrada",
  description: "Lo sentimos, la página que buscas no existe.",
  btnText: "Volver al inicio",
};
```

---

## ⚠️ Errores Comunes y Cómo Solucionarlos

### 🔴 Error: "Syntax Error"

**Qué significa:**
Borraste algo importante por accidente (una coma, comilla, etc.)

**Cómo solucionarlo:**

1. Ve al historial de cambios (botón "History")
2. Haz clic en "Revert" para deshacer tus cambios
3. Inténtalo de nuevo con más cuidado

### 🔴 Error: "Los cambios no aparecen en el sitio"

**Posibles causas:**

- Espera 2-3 minutos (tarda un poco en publicarse)
- Revisa que hiciste commit correctamente
- Verifica que editaste el archivo correcto

### 🔴 Error: "Olvidé qué cambié"

**Solución:**

1. Ve al archivo en GitHub
2. Haz clic en "History"
3. Verás todos los cambios anteriores con fechas

---

### 📖 Recursos Adicionales

- [Glosario de términos técnicos](#glosario)

---

## 📚 Glosario

**Términos que puede que escuches:**

- **Commit**: Guardar cambios en GitHub
- **Pull Request (PR)**: Solicitud para revisar y publicar cambios
- **Merge**: Fusionar cambios al sitio web principal
- **Branch**: Rama o versión del código
- **Notion**: La plataforma donde escribes los artículos del blog
- **Trigger**: Archivo que activa la descarga de artículos desde Notion
- **Build**: Proceso de construir el sitio web
- **Deploy**: Publicar el sitio web

---

## 🎓 Tips y Mejores Prácticas

### ✅ Recomendaciones

1. **Antes de editar**: Lee el texto actual completo
2. **Haz cambios pequeños**: Es más fácil encontrar errores
3. **Escribe commit messages claros**: "Actualicé título del Hero"
4. **Revisa dos veces**: Especialmente comillas y comas
5. **Prueba en staging**: Si tienes un ambiente de prueba, úsalo primero

### 🎯 Checklist Antes de Hacer Commit

- [ ] ¿El texto tiene sentido?
- [ ] ¿Revisé la ortografía?
- [ ] ¿Mantuve todas las comillas y comas?
- [ ] ¿Los tags están bien cerrados? (`<b>texto</b>`)
- [ ] ¿El commit message explica qué cambié?

---

**Última actualización**: Noviembre 2025

**Versión**: 2.0

**Mantenido por**: Equipo de Desarrollo de Olafut 💜
