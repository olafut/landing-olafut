import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { Button, Subtitle, Title } from './ui';

export const HeroSection = () => {
  return (
    <div className="relative p-10 lg:pt-20 lg:pb-30 flex flex-col items-center mx-auto container justify-center">
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

        <Image
          src="/assets/hero.webp"
          alt="Hero Image"
          width={1232}
          height={200}
          className="pointer-events-none select-none h-[600px] w-auto rounded-2xl mx-auto"
          priority
          loading="eager"
          decoding="sync"
        />
      </section>
    </div>
  );
};
