import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { Button, Subtitle, Title } from './ui';

export const HeroSection = () => {
  return (
    <div className="relative px-6 py-10 md:py-20 flex flex-col items-center mx-auto container justify-center">
      <div className="absolute content-[''] w-1/3 h-full right-0 bg-radial from-0% from-primary to-background to-100% blur-xl -z-50 opacity-100 hidden lg:block" />

      <section className="grid grid-cols-1 xl:grid-cols-2 max-w-lg lg:max-w-full gap-20 justify-center">
        <div className="flex flex-col text-center lg:text-left ">
          <p className="font-alt text-xs font-semibold tracking-widest mb-4">
            LANDING PAGE BUILDER
          </p>

          <Title level="h1">
            El fútbol solo necesita una comunidad dispuesta a todo
          </Title>

          <Subtitle className="my-10">
            Creando el 1er Club Femenil Independiente de México
          </Subtitle>

          <Button>
            ¡Se parte del cambio!
            <FaArrowRight />
          </Button>
        </div>

        <Image
          src="/assets/hero.webp"
          alt="Hero Image"
          width={1232}
          height={430}
          className="pointer-events-none select-none object-fill h-full w-full"
          priority
          loading="eager"
          decoding="sync"
        />
      </section>
    </div>
  );
};
