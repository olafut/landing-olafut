import type { Translations } from './translations';

const translations: Translations = {
  Hero: {
    title:
      'El <important>Fútbol</important> <important>Femenil</important> solo necesita una comunidad dispuesta <important>a TODO</important>',
    subtitle:
      'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    cta: '¡Se parte del cambio!',
  },
  WhyOlafut: {
    title: '¿Por qué nace <logo>OLAFUT</logo>?',
    paragraphs: [
      'El Futbol Femenil necesita más que promesas.',
      'Imagina un lugar donde el fútbol femenil no compite, sino que colabora.',
      'Queremos un espacio donde las mujeres sean las protagonistas.',
      '¡Unamos a todas las que viven el fútbol con <strong>PASIÓN Y PROPÓSITO!</strong>',
    ],
    cta: '¡Únete!',
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
    cta: '¡No te pierdas la oportunidad!',
    comingSoon: 'MUY PRONTO...',
  },
  AboutUs: {
    Hero: {
      title: 'Somos <logo>Olafut</logo>',
      subtitle: 'La OLA del cambio del Fútbol Femenil',
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
  },
};

export default translations;
