import './globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import type { PropsWithChildren } from 'react';
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
  title: 'Olafut - Creando el 1er Club Femenil Independiente de México',
  description: 'El fútbol solo necesita una comunidad dispuesta a todo',
  metadataBase: new URL('https://olafut.com'),
  appleWebApp: {
    title: 'Olafut',
  },
  openGraph: {
    title: 'Olafut - Creando el 1er Club Femenil Independiente de México',
    description: 'El fútbol solo necesita una comunidad dispuesta a todo',
    url: 'https://olafut.com',
    siteName: 'Olafut',
    locale: 'es_MX',
    type: 'website',
    images: ['/assets/hero.webp'],
  },
  twitter: {
    title: 'Olafut - Creando el 1er Club Femenil Independiente de México',
    description: 'El fútbol solo necesita una comunidad dispuesta a todo',
    card: 'summary_large_image',
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
