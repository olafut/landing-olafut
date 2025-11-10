import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { BASE_METADATA } from '@/constants/base-metadata';

export const metadata: Metadata = {
  ...BASE_METADATA,
  title:
    'Sobre Nosotros | OlaFut - Primer Club Femenil Independiente de México',
  description:
    'Conoce la historia de OlaFut, el primer club femenil independiente de México. Nuestra misión, visión y el equipo que hace posible esta revolución en el fútbol femenil.',
  keywords: [
    'Olafut',
    'fútbol femenil México',
    'club fútbol femenil independiente',
    'primer club femenil independiente México',
    'OLA-CAST',
    'OLA-DIGITAL',
    'OLA-GAMES',
    'OLA-MIND',
    'OLA-SCOUT',
    'fútbol femenino profesional',
    'comunidad fútbol femenil',
    'transmisiones fútbol femenil en vivo',
    'podcast fútbol femenil México',
  ],
  openGraph: {
    ...BASE_METADATA.openGraph,
    title:
      'Sobre Nosotros | OlaFut - Primer Club Femenil Independiente de México',
    description:
      'Conoce la historia de OlaFut, el primer club femenil independiente de México. Nuestra misión, visión y el equipo que hace posible esta revolución en el fútbol femenil.',
    images: ['/assets/about.jpg'],
  },
  twitter: {
    ...BASE_METADATA.twitter,
    title:
      'Sobre Nosotros | OlaFut - Primer Club Femenil Independiente de México',
    description:
      'Conoce la historia de OlaFut, el primer club femenil independiente de México. Nuestra misión, visión y el equipo que hace posible esta revolución en el fútbol femenil.',
    images: ['/assets/about.jpg'],
  },
};

export default function AboutLayout({ children }: Readonly<PropsWithChildren>) {
  return children;
}
