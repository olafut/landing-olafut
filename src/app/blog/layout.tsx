import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { BASE_METADATA } from '@/constants/base-metadata';

export const metadata: Metadata = {
  ...BASE_METADATA,
  alternates: { canonical: 'https://olafut.com/blog/' },
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
    url: 'https://olafut.com/blog',
    images: [
      {
        url: '/assets/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Blog OlaFut - Noticias y Artículos de Fútbol Femenil',
      },
    ],
    type: 'website',
  },
  twitter: {
    ...BASE_METADATA.twitter,
    title: 'Blog | OlaFut - Noticias y Artículos de Fútbol Femenil',
    description:
      'Descubre las últimas noticias, análisis y perspectivas sobre el fútbol femenil en México. Historias que inspiran, informan y celebran el talento femenino en el deporte.',
    images: [
      {
        url: '/assets/hero.webp',
        width: 1200,
        height: 628,
        alt: 'Blog OlaFut - Noticias y Artículos de Fútbol Femenil',
      },
    ],
  },
};

export default function BlogLayout({ children }: Readonly<PropsWithChildren>) {
  return children;
}
