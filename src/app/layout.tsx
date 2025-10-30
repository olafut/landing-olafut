import './globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Montserrat } from 'next/font/google';
import type { PropsWithChildren } from 'react';
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

        <footer className="bg-foreground rounded-t-5xl p-10 h-full">
          <div className="container grid grid-cols-3 h-full">
            <p className="text-background text-center">Redes Sociales</p>
            <p className="text-background text-center">Olafut</p>
            <p className="text-background text-center">Contacto</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
