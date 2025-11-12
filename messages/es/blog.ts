import type { Translations } from '../types';

export const Blog: Translations['Blog'] = {
  title: 'Blog',
  description:
    'Descubre las últimas noticias, análisis y perspectivas sobre el fútbol femenil en México. Historias que inspiran, informan y celebran el talento femenino en el deporte.',
  publishedArticles:
    '{count, plural, =0 {no hay artículos} =1 {# artículo publicado} other {# artículos publicados}}',
  readingTime:
    '{minutes, plural, =1 {# min de lectura} other {# min de lectura}}',
  readArticle: 'Leer artículo completo',
  moreStories: 'Más Artículos',
};
