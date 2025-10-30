import { ContentSection } from './_components/ContentSection';
import { HeroSection } from './_components/HeroSection';
import { Button, Paragraph, Title } from './_components/ui';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentSection />

      <section className="my-12 flex flex-col gap-6 text-left container mx-auto px-6 md:px-14">
        <Title
          level="h2"
          className="py-10 text-4xl lg:text-6xl max-w-2xl font-black"
        >
          ¿Cómo vamos a construir el CAMINO?
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="bg-neutral-600/40 min-h-72 backdrop-blur-2xl p-10 rounded-3xl shadow-md flex flex-col gap-4">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-CAST
            </Title>
            <Paragraph>
              El micrófono puede ser tuyo. Participa para ser parte de las
              transmisiones en vivo y de nuestro Podcast.
            </Paragraph>
          </article>
          <article className="bg-neutral-600/40 min-h-72 backdrop-blur-2xl p-10 rounded-3xl shadow-md flex flex-col gap-4">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-GAMES
            </Title>
            <Paragraph>Torneos y eventos con formatos innovadores</Paragraph>
          </article>
          <article className="bg-neutral-600/40 min-h-72 backdrop-blur-2xl p-10 rounded-3xl shadow-md flex flex-col gap-4">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-MIND
            </Title>
            <Paragraph>
              Crecimiento personal y profesional a través de pláticas, cursos y
              clases impartidas por las más expertas en la industria deportiva.
            </Paragraph>
          </article>
          <article className="bg-neutral-600/40 min-h-72 backdrop-blur-2xl p-10 rounded-3xl shadow-md flex flex-col gap-4">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-SCOUT
            </Title>
            <Paragraph>
              El lente y lugar para dar a conocer y apoyar en el camino al
              próximo talento del fútbol femenil profesional.
            </Paragraph>
          </article>
        </div>

        <Button className="mx-auto my-10">
          ¡No te pierdas la oportunidad!
        </Button>
      </section>
    </main>
  );
}
