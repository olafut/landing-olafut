import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { Button, Subtitle, Title } from './ui';

export const HeroSection = () => {
  return (
    <div className="relative p-10 lg:pt-20 lg:pb-30 flex flex-col items-center mx-auto container justify-center min-h-[calc(100dvh-4.5rem)]">
      <section className="grid grid-cols-1 xl:grid-cols-2 max-w-lg xl:max-w-full gap-20 justify-center items-center">
        <div className="flex flex-col text-center xl:text-left ">
          <p className="font-alt text-xs font-semibold tracking-widest mb-4">
            LANDING PAGE BUILDER
          </p>

          <Title level="h1">
            El fútbol solo necesita una comunidad dispuesta a todo
          </Title>

          <Subtitle className="my-10">
            Creando el 1er Club Femenil Independiente de México
          </Subtitle>

          <Button className="mx-auto lg:mx-0">
            ¡Se parte del cambio!
            <FaArrowRight />
          </Button>
        </div>

        <div className="mx-auto relative w-full h-full aspect-3/4 lg:aspect-4/3">
          <Image
            src="/assets/hero.webp"
            alt="Hero Image"
            fill
            className="rounded-2xl absolute object-cover"
            priority
            loading="eager"
            decoding="sync"
          />
        </div>
      </section>
    </div>
  );
};
