import './globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import type { PropsWithChildren } from 'react';
import { BASE_METADATA } from '@/constants/base-metadata';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

const displayFont = Inter({
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const textFont = Raleway({
  variable: '--font-text',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  ...BASE_METADATA,
  title:
    'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
  description:
    'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
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
      'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
    description:
      'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    images: ['/assets/hero.webp'],
  },
  twitter: {
    ...BASE_METADATA.twitter,
    title:
      'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
    description:
      'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    images: ['/assets/hero.webp'],
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="es"
      className={`${textFont.variable}  ${displayFont.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans transition-colors duration-500">
        <NextIntlClientProvider locale="es">
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
