import { HeroSection } from './_components/HeroSection';
import { ProductsSection } from './_components/ProductsSection';
import { WhyOlafutSection } from './_components/WhyOlafutSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyOlafutSection />
      <ProductsSection />
    </main>
  );
}
