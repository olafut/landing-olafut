import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { BASE_METADATA } from '@/constants/base-metadata';

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: 'Blog | OlaFut - Noticias y Artículos de Fútbol Femenil',
  description:
    'Descubre las últimas noticias, análisis y perspectivas sobre el fútbol femenil en México. Historias que inspiran, informan y celebran el talento femenino en el deporte.',
  keywords: [
    'Olafut',
    'fútbol femenil México',
    'blog fútbol femenil',
    'noticias fútbol femenino',
    'artículos fútbol femenil',
    'análisis fútbol femenil',
    'comunidad fútbol femenil',
    'OLA-CAST',
    'OLA-DIGITAL',
    'primer club femenil independiente México',
    'jugadoras fútbol femenil',
    'liga fútbol femenil México',
  ],
  openGraph: {
    ...BASE_METADATA.openGraph,
    title: 'Blog | OlaFut - Noticias y Artículos de Fútbol Femenil',
    description:
      'Descubre las últimas noticias, análisis y perspectivas sobre el fútbol femenil en México. Historias que inspiran, informan y celebran el talento femenino en el deporte.',
    images: ['/assets/hero.webp'],
    type: 'website',
  },
  twitter: {
    ...BASE_METADATA.twitter,
    title: 'Blog | OlaFut - Noticias y Artículos de Fútbol Femenil',
    description:
      'Descubre las últimas noticias, análisis y perspectivas sobre el fútbol femenil en México. Historias que inspiran, informan y celebran el talento femenino en el deporte.',
    images: ['/assets/hero.webp'],
  },
};

export default function BlogLayout({ children }: Readonly<PropsWithChildren>) {
  return children;
}
