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
  description: 'Landing page de Olafut',
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
