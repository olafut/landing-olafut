import { ContentSection } from './_components/ContentSection';
import { HeroSection } from './_components/HeroSection';
import { ProductsSection } from './_components/ProductsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <ProductsSection />
    </main>
  );
}
