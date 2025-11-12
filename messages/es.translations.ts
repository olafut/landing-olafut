import { Home, Layout } from './es';
import type { Translations } from './types';

const translations: Translations = {
  Layout,
  Home,
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
        'Somos un movimiento que paso a paso construye el primer <strong>HUB</strong> <small>(centro, núcleo)</small> del fútbol femenil que busca brindar un espacio seguro, dar voz, recompensar, fomentar competencia sana, dar conocimientos y ayudar a crecer a todas las mujeres que formen parte a través de diferentes pilares y estrategias.',
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
    btnText: 'Volver al Inicio',
  },
};

export default translations;
