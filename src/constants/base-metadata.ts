import type { Metadata } from 'next';

export const BASE_METADATA: Partial<Metadata> = {
  metadataBase: new URL('https://olafut.com'),
  appleWebApp: {
    title: 'Olafut',
  },
  openGraph: {
    url: 'https://olafut.com',
    siteName: 'Olafut',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    title:
      'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
    description:
      'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    card: 'summary_large_image',
    creator: '@olafut10',
    site: '@olafut10',
  },
};
