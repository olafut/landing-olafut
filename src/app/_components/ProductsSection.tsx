import { FaArrowRight } from 'react-icons/fa6';
import { ProductCard } from './ProductCard';
import { Button, Title } from './ui';

export const ProductsSection = () => {
  return (
    <section className="my-12 flex flex-col gap-6 text-left container mx-auto px-6 md:px-14">
      <Title
        level="h2"
        className="py-10 text-4xl lg:text-6xl max-w-2xl font-black"
      >
        ¿Cómo vamos a construir el CAMINO?
      </Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductCard
          title="OLA-CAST"
          description="El micrófono puede ser tuyo. Participa para ser parte de las transmisiones en vivo y de nuestro Podcast."
          image={{
            src: '/assets/OLA-DIGITAL.webp',
            alt: 'Ola-Cast',
          }}
        />

        <ProductCard
          title="OLA-GAMES"
          description="Torneos y eventos con formatos innovadores"
          image={{
            src: '/assets/OLA-GAMES.webp',
            alt: 'Ola-Games',
          }}
        />
        <ProductCard
          title="OLA-MIND"
          description="Crecimiento personal y profesional a través de pláticas, cursos y clases impartidas por las más expertas en la industria deportiva."
          image={{
            src: '/assets/OLA-TALKS.webp',
            alt: 'Ola-Mind',
          }}
        />

        <ProductCard
          title="OLA-SCOUT"
          description="El lente y lugar para dar a conocer y apoyar en el camino al próximo talento del fútbol femenil profesional."
          image={{
            src: '/assets/OLA-SCOUT.webp',
            alt: 'Ola-Scout',
          }}
        />
      </div>

      <Button className="mx-auto my-10">
        ¡No te pierdas la oportunidad!
        <FaArrowRight />
      </Button>
    </section>
  );
};
