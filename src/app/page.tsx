import { HeroSection } from './_components/HeroSection';
import { InitiativesSection } from './_components/InitiativesSection';
import { WhyOlafutSection } from './_components/WhyOlafutSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyOlafutSection />
      <InitiativesSection />
    </main>
  );
}
