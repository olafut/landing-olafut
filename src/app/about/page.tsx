import {
  CtaSection,
  HeroSection,
  MissionSection,
  // StatsSection,
  // TimelineSection,
  // ValuesSection,
} from '@/components/about';

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      {/* <ValuesSection /> */}
      {/* <StatsSection /> */}
      {/* <TimelineSection /> */}
      <CtaSection />
    </main>
  );
}
