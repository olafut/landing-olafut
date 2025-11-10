import type { Translations } from './translations';

const translations: Translations = {
  Common: {
    Navigation: {
      home: 'Inicio',
      about: 'Acerca de',
      blog: 'Blog',
    },
    Cta: {
      join: '¡Únete!',
      joinTheCommunity: '¡Únete a la OLA!',
      backToHome: 'Volver al inicio',
      bePartOfChange: '¡Se parte del cambio!',
      dontMissOut: '¡No te pierdas la oportunidad!',
    },
  },
  Hero: {
    badge: 'Primer HUB Integral',
    title:
      'El <important>Fútbol</important> <important>Femenil</important> solo necesita una comunidad dispuesta <important>a TODO</important>',
    subtitle:
      '<strong>OLAFUT</strong> es el <tag>HUB</tag> del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    trustBadges: {
      activeCommunity: 'Comunidad activa',
      weeklyPodcast: 'Podcast semanal',
      everyoneCounts: 'Todas cuentan',
    },
    floatingCard: {
      title: 'Más que un club',
      subtitle: 'Un movimiento',
    },
    buildingHistory: '💜 Construyendo historia juntas',
  },
  WhyOlafut: {
    title: '¿Por qué nace <logo>OLAFUT</logo>?',
    paragraphs: [
      'El Futbol Femenil necesita más que promesas.',
      'Imagina un lugar donde el fútbol femenil no compite, sino que colabora.',
      'Queremos un espacio donde las mujeres sean las protagonistas.',
      '¡Unamos a todas las que viven el fútbol con <strong>PASIÓN Y PROPÓSITO!</strong>',
    ],
  },
  Features: {
    title: '¿Cómo vamos a construir el CAMINO?',
    items: {
      'OLA-CAST': {
        title: 'OLA-CAST',
        description: [
          'El micrófono puede ser tuyo. Participa para ser parte de las transmisiones en vivo y de nuestro Podcast.',
        ],
      },
      'OLA-DIGITAL': {
        title: 'OLA-DIGITAL',
        description: [
          'Únete a la conversación, puntos de vista e información sobre todo lo relacionado con el FUT! ⚽️🚺',
        ],
      },
      'OLA-GAMES': {
        title: 'OLA-GAMES',
        description: [
          'Torneos y eventos con formatos innovadores.',
          '5x5 , 7x7, retos de habilidad que den la puntuación final del resultado.',
        ],
      },
      'OLA-MIND': {
        title: 'OLA-MIND',
        description: [
          'Crecimiento personal y profesional a través de pláticas, cursos y clases impartidas por las más expertas en la industria deportiva.',
        ],
      },
      'OLA-SCOUT': {
        title: 'OLA-SCOUT',
        description: [
          'El lente y lugar para dar a conocer y apoyar en el camino al próximo talento del fútbol femenil profesional.',
        ],
      },
    },
    comingSoon: 'Muy pronto...',
  },
  AboutUs: {
    Hero: {
      title: 'Somos <logo>Olafut</logo>',
      subtitle: 'La OLA del cambio del Fútbol Femenil',
    },
    Mission: {
      title: 'Nuestra Misión',
      paragraph1:
        'OLAFUT nace de la pasión por el fútbol, el deporte y la convicción de que las mujeres merecen un espacio propio e independiente.',
      paragraph2:
        'Somos un movimiento que paso a paso construye el primer <strong>HUB</strong> del fútbol femenil que busca brindar un espacio seguro, dar voz, recompensar, fomentar competencia sana, dar conocimientos y ayudar a crecer a todas las mujeres que formen parte a través de diferentes pilares y estrategias.',
      hubNote: '(centro, núcleo)',
    },
    Stats: {
      title: 'Olafut en Números',
      subtitle: 'El impacto que estamos generando juntas',
      items: [
        { number: '5,000+', label: 'Seguidoras' },
        { number: '3', label: 'Iniciativas' },
        { number: '47', label: 'Episodios' },
        { number: '100%', label: 'Independiente' },
      ],
    },
    Timeline: {
      title: 'Nuestra Historia',
      subtitle: 'Los hitos más importantes en el camino de Olafut',
      items: [
        {
          year: '2024',
          title: 'Fundación de Olafut',
          description:
            'Nace el primer club femenil independiente de México con la misión de revolucionar el fútbol femenil.',
        },
        {
          year: '2024',
          title: 'Lanzamiento OLA-CAST',
          description:
            'Iniciamos nuestro podcast para dar voz a las protagonistas del fútbol femenil.',
        },
        {
          year: '2024',
          title: 'Comunidad de 5K+',
          description:
            'Alcanzamos más de 5,000 seguidoras comprometidas con el cambio.',
        },
      ],
    },
    Values: {
      title: 'Nuestros Valores',
      subtitle: 'Los principios que guían cada decisión y acción en Olafut',
      items: [
        {
          title: 'Pasión',
          description:
            'Por el fútbol femenil y por construir un futuro más equitativo en el deporte.',
        },
        {
          title: 'Comunidad',
          description:
            'Creemos en el poder de la unión. Juntas somos más fuertes.',
        },
        {
          title: 'Excelencia',
          description:
            'Buscamos la calidad en cada aspecto: dentro y fuera de la cancha.',
        },
      ],
    },
    Cta: {
      title: '¿Lista para ser parte del cambio?',
      description:
        'Únete a la comunidad que está revolucionando el fútbol femenil en México. Cada voz cuenta, cada acción suma.',
    },
  },
  Blog: {
    title: 'Blog',
    description:
      'Descubre las últimas noticias, análisis y perspectivas sobre el fútbol femenil en México. Historias que inspiran, informan y celebran el talento femenino en el deporte.',
    publishedArticles:
      '{count, plural, =0 {no hay artículos} =1 {# artículo publicado} other {# artículos publicados}}',
    readingTime:
      '{minutes, plural, =1 {# min de lectura} other {# min de lectura}}',
    readArticle: 'Leer artículo completo',
    moreStories: 'Más Artículos',
  },
  NotFound: {
    error: '404 Error - Página no encontrada',
    title: 'No podemos encontrar esa página.',
    description:
      'Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.',
  },
  Footer: {
    description:
      'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    navigation: {
      title: 'Navega',
    },
    social: {
      title: 'Síguenos',
    },
    contact: {
      title: 'Contacto',
      email: 'olafut10@gmail.com',
      location: 'Ciudad de México, México',
    },
    copyright: 'OlaFut. Todos los derechos reservados.',
    logoAlt: 'OlaFut - Primer club femenil independiente de México',
    logoAriaLabel: 'Ir a la página principal de Olafut',
  },
};

export default translations;
