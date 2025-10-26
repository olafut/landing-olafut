import './globals.css';
import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';
import { Header } from './_components/Header';

const uxumFont = localFont({
  variable: '--font-uxum',
  src: [
    {
      path: '../fonts/uxumregular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/uxumlight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/uxumbold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});

const spaceGroteskFont = Host_Grotesk({
  variable: '--font-space-grotesk',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Olafut',
  description: 'Landing page de Olafut',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="es"
      className={`${spaceGroteskFont.variable} ${uxumFont.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans transition-colors duration-500 min-h-[200dvh]">
        <Header />
        {children}
      </body>
    </html>
  );
}
