/**
 * Item de una iniciativa (OLA-CAST, OLA-DIGITAL, etc.)
 */
export type InitiativeItem = {
  /** Nombre de la iniciativa */
  title: string;
  /** Descripción en párrafos (cada string es un párrafo) */
  description: string[];
};

/**
 * Item de la línea de tiempo (timeline)
 */
export type TimelineItem = {
  /** Año del evento (ej: "2024") */
  year: string;
  /** Título del hito */
  title: string;
  /** Descripción del evento */
  description: string;
};

/**
 * Valor de la organización
 */
export type Value = {
  /** Nombre del valor (ej: "Pasión", "Comunidad") */
  title: string;
  /** Descripción del valor */
  description: string;
};

/**
 * Estadística numérica
 */
export type Stat = {
  /** Número a mostrar (ej: "5,000+", "100%") */
  number: string;
  /** Etiqueta explicativa (ej: "Seguidoras") */
  label: string;
};

/**
 * Tipo base para CTAs (Call To Action)
 */
export type CtaType = {
  /** Texto del botón de CTA */
  ctaText: string;
};

/**
 * Tipo base para items del footer
 */
export type FooterItemType = {
  /** Título de la sección */
  title: string;
};

/**
 * Información de contacto en el footer
 */
export type ContactItemType = FooterItemType & {
  /** Email de contacto */
  email: string;
  /** Ubicación física */
  location: string;
};

/**
 * Sección de iniciativas de Olafut
 */
export type InitiativesType = CtaType & {
  /** Título principal de la sección */
  title: string;
  /** Cada iniciativa por su ID (OLA-CAST, OLA-DIGITAL, etc.) */
  items: Record<string, InitiativeItem>;
  /** Texto para iniciativas que vienen pronto */
  comingSoon: string;
};

/**
 * Textos del layout principal (navegación y footer)
 */
export type LayoutType = {
  /** Barra de navegación */
  Navigation: {
    /** Link a Inicio */
    home: string;
    /** Link a Acerca de */
    about: string;
    /** Link a Blog */
    blog: string;
  };
  /** Footer del sitio */
  Footer: {
    /** Descripción de Olafut */
    description: string;
    /** Sección de navegación */
    navigation: FooterItemType;
    /** Sección de redes sociales */
    social: FooterItemType;
    /** Información de contacto */
    contact: ContactItemType;
    /** Texto de copyright */
    copyright: string;
    /** Alt text del logo */
    logoAlt: string;
    /** Aria label del logo */
    logoAriaLabel: string;
  };
};

/**
 * Textos de la página de inicio
 */
export type HomeType = {
  /** Sección Hero (banner principal) */
  Hero: CtaType & {
    /** Texto en la insignia superior */
    badge: string;
    /** Título principal (puede incluir tags <important>) */
    title: string;
    /** Subtítulo explicativo (puede incluir <b>, <tag>) */
    subtitle: string;
    /** Badges de confianza debajo del CTA */
    trustBadges: {
      /** "Comunidad activa" */
      activeCommunity: string;
      /** "Podcast semanal" */
      weeklyPodcast: string;
      /** "Todas cuentan" */
      everyoneCounts: string;
    };
    /** Tarjeta flotante decorativa */
    floatingCard: {
      title: string;
      subtitle: string;
    };
    /** Texto de "Construyendo historia juntas" */
    buildingHistory: string;
  };
  /** Sección "¿Por qué nace Olafut?" */
  WhyOlafut: CtaType & {
    /** Título de la sección (puede incluir tag <logo>) */
    title: string;
    /** Las 4 razones principales */
    features: {
      needsMoreThanPromises: string;
      imagineAPlace: string;
      womenAreTheProtagonists: string;
      passionAndPurpose: string;
    };
  };
  /** Sección de iniciativas (OLA-CAST, OLA-DIGITAL, etc.) */
  Initiatives: InitiativesType;
};

/**
 * Tipo base para secciones con items en AboutUs
 */
export type AboutUsItemType<T = unknown> = {
  /** Título de la sección */
  title: string;
  /** Subtítulo descriptivo */
  subtitle: string;
  /** Items organizados por ID descriptivo */
  items: Record<string, T>;
};

/**
 * Textos de la página "Acerca de"
 */
export type AboutUsType = {
  /** Hero de About Us */
  Hero: {
    /** Título principal (puede incluir tag <logo>) */
    title: string;
    /** Subtítulo */
    subtitle: string;
  };
  /** Sección de misión */
  Mission: {
    /** Título "Nuestra Misión" */
    title: string;
    /** Primer párrafo */
    paragraph1: string;
    /** Segundo párrafo (puede incluir <strong>, <small>) */
    paragraph2: string;
  };
  /** Estadísticas de Olafut (seguidoras, iniciativas, etc.) */
  Stats: AboutUsItemType<Stat>;
  /** Línea de tiempo de hitos importantes */
  Timeline: AboutUsItemType<TimelineItem>;
  /** Valores de la organización */
  Values: AboutUsItemType<Value>;
  /** Call to action final */
  Cta: {
    /** Título del CTA */
    title: string;
    /** Descripción */
    description: string;
    /** Texto del botón */
    btnText: string;
  };
};

/**
 * Textos de la página de Blog
 */
export type BlogType = {
  /** Título "Blog" */
  title: string;
  /** Descripción del blog */
  description: string;
  /** Texto "Artículos publicados" */
  publishedArticles: string;
  /** Texto "min de lectura" */
  readingTime: string;
  /** Texto del botón "Leer artículo" */
  readArticle: string;
  /** Título de sección "Más historias" */
  moreStories: string;
};

/**
 * Textos de la página 404 (No encontrado)
 */
export type NotFoundType = {
  /** Código de error "404" */
  error: string;
  /** Título "Página no encontrada" */
  title: string;
  /** Descripción del error */
  description: string;
  /** Texto del botón para volver */
  btnText: string;
};

/**
 * Tipo principal que agrupa todas las traducciones del sitio
 *
 * @example
 * ```typescript
 * import type { Translations } from './types';
 *
 * export const es: Translations = {
 *   Layout: { ... },
 *   Home: { ... },
 *   // ...
 * };
 * ```
 */
export type Translations = {
  /** Textos del layout (navegación y footer) */
  Layout: LayoutType;
  /** Textos de la página de inicio */
  Home: HomeType;
  /** Textos de la página "Acerca de" */
  AboutUs: AboutUsType;
  /** Textos de la página de blog */
  Blog: BlogType;
  /** Textos de la página 404 */
  NotFound: NotFoundType;
};
