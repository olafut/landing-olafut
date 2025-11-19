import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import type { PropsWithChildren } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { BASE_METADATA } from '@/constants/base-metadata';

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
  alternates: { canonical: 'https://olafut.com/' },
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
    images: [
      {
        url: '/assets/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
      },
    ],
  },
  twitter: {
    ...BASE_METADATA.twitter,
    title:
      'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
    description:
      'OLAFUT es el HUB del futbol femenil: el corazón que une gradas, canchas, micrófonos y mentes creativas.',
    images: [
      {
        url: '/assets/hero.webp',
        width: 1200,
        height: 628,
        alt: 'Olafut - El Fútbol Femenil solo necesita una comunidad dispuesta a TODO.',
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="es"
      className={`${textFont.variable} ${displayFont.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans transition-colors duration-200 ease-linear">
        <NextIntlClientProvider locale="es">
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-F06HDHE7DC" />
    </html>
  );
}
