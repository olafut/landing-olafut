import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { Button, Paragraph, Strong, Title } from './ui';

export const ContentSection = () => {
  return (
    <section className="rounded-5xl text-background shadow-lg bg-foreground z-20 p-10 md:py-20 flex flex-col gap-20">
      <div className="container mx-auto flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          <Title
            level="h2"
            className="text-center py-10 text-4xl lg:text-6xl max-w-2xl font-black mx-auto"
          >
            ¿Por qué nace Olafut?
          </Title>
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <Paragraph>
              Esto no solo es un CLUB, es el inicio de una historia que empieza
              desde la afición y no al revés. Queremos un espacio donde las
              mujeres sean las protagonistas:
            </Paragraph>

            <Paragraph>
              En la <Strong>CANCHA</Strong>, <Strong>GRADA</Strong>, en los{' '}
              <Strong>MICRÓFONOS</Strong> y en la industria en general.
            </Paragraph>

            <Paragraph>
              ¡Unamos a todas las que viven el fútbol con{' '}
              <Strong>PASIÓN Y PROPÓSITO</Strong>!
            </Paragraph>
          </div>
        </section>

        <section className="flex justify-center my-10">
          <Button>
            ¡Únete!
            <FaArrowRight />
          </Button>
        </section>
      </div>

      <div className="container mx-auto px-0 lg:px-10 gap-20 flex flex-col">
        <Title level="h2" className="font-black text-center">
          ¿Cómo vamos a construir el CAMINO?
        </Title>

        <article className="flex flex-col lg:grid lg:grid-cols-5 gap-10 items-center">
          <div className="col-span-2 flex flex-col gap-4 w-full">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-CAST
            </Title>
            <Paragraph>
              El micrófono puede ser tuyo. Participa para ser parte de las
              transmisiones en vivo y de nuestro Podcast.
            </Paragraph>
          </div>
          <div className="relative col-span-3 w-96 h-96 mx-auto rounded-2xl">
            <Image
              src="/assets/OLA-DIGITAL.webp"
              alt="Ola-Cast"
              fill
              className="absolute rounded-2xl object-cover"
            />
          </div>
        </article>

        <article className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-10 items-center">
          <div className="relative col-span-3 w-96 h-96 mx-auto rounded-2xl">
            <Image
              src="/assets/OLA-GAMES.webp"
              alt="Ola-Games"
              fill
              className="absolute rounded-2xl object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 w-full">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-GAMES
            </Title>
            <Paragraph>Torneos y eventos con formatos innovadores</Paragraph>
          </div>
        </article>

        <article className="flex flex-col lg:grid lg:grid-cols-5 gap-10 items-center">
          <div className="col-span-2 flex flex-col gap-4 w-full">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-MIND
            </Title>
            <Paragraph>
              Crecimiento personal y profesional a través de pláticas, cursos y
              clases impartidas por las más expertas en la industria deportiva.
            </Paragraph>
          </div>
          <div className="relative col-span-3 w-96 h-96 mx-auto rounded-2xl">
            <Image
              src="/assets/OLA-TALKS.webp"
              alt="Ola-Mind"
              fill
              className="absolute rounded-2xl object-cover"
            />
          </div>
        </article>

        <article className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-10 items-center">
          <div className="relative col-span-3 w-96 h-96 mx-auto rounded-2xl">
            <Image
              src="/assets/OLA-SCOUT.webp"
              alt="Ola-Scout"
              fill
              className="absolute rounded-2xl object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 w-full">
            <Title level="h4" className="text-3xl lg:text-4xl font-black">
              OLA-SCOUT
            </Title>
            <Paragraph>
              El lente y lugar para dar a conocer y apoyar en el camino al
              próximo talento del fútbol femenil profesional.
            </Paragraph>
          </div>
        </article>
      </div>

      <section className="flex justify-center mb-10">
        <Button className="mx-auto">
          ¡No te pierdas la oportunidad!
          <FaArrowRight />
        </Button>
      </section>
    </section>
  );
};
