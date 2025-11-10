import type { Metadata } from 'next';
import {
  CtaSection,
  HeroSection,
  MissionSection,
  StatsSection,
  TimelineSection,
  ValuesSection,
} from './_components';

export const metadata: Metadata = {
  title:
    'Sobre Nosotros | OlaFut - Primer Club Femenil Independiente de México',
  description:
    'Conoce la historia de OlaFut, el primer club femenil independiente de México. Nuestra misión, visión y el equipo que hace posible esta revolución en el fútbol femenil.',
  openGraph: {
    title: 'Sobre Nosotros | OlaFut',
    description: 'La historia del primer club femenil independiente de México',
    images: ['/assets/about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background overflow-hidden">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      {/* <StatsSection /> */}
      {/* <TimelineSection /> */}
      <CtaSection />
    </main>
  );
}
