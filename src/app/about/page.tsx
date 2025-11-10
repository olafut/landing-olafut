import {
  CtaSection,
  HeroSection,
  MissionSection,
  // StatsSection,
  // TimelineSection,
  // ValuesSection,
} from './_components';

export default function AboutPage() {
  return (
    <main className="bg-background overflow-hidden">
      <HeroSection />
      <MissionSection />
      {/* <ValuesSection /> */}
      {/* <StatsSection /> */}
      {/* <TimelineSection /> */}
      <CtaSection />
    </main>
  );
}
