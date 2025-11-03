import './globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Montserrat } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

const bricolageFont = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const montserratFont = Montserrat({
  variable: '--font-space-grotesk',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Olafut',
  description: 'Creando el 1er Club Femenil Independiente de México',
  metadataBase: new URL('https://olafut.com'),
  appleWebApp: {
    title: 'Olafut',
  },
  openGraph: {
    title: 'Olafut',
    description: 'Creando el 1er Club Femenil Independiente de México',
    url: 'https://olafut.com',
    siteName: 'Olafut',
    locale: 'es_MX',
    type: 'website',
    images: '/assets/hero.webp',
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="es"
      className={`${montserratFont.variable}  ${bricolageFont.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans transition-colors duration-500">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
