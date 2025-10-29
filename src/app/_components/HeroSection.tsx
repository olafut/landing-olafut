import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { Button, Subtitle, Title } from './ui';

export const HeroSection = () => {
  return (
    <div className="relative pt-10 px-10 flex flex-col items-center container mx-auto">
      <div className="absolute content-[''] w-full h-1/2 md:h-4/5 lg:h-full bottom-0 md:-bottom-10 lg:top-40 bg-radial from-white from-30% via-primary via-70% md:via-60% lg:via-50% to-background to-90% blur-xl -z-50 opacity-100" />

      <Title className="text-center max-w-5xl lg:max-w-4xl mx-auto" level="h1">
        El fútbol solo necesita una comunidad dispuesta a todo
      </Title>

      <Subtitle className="mt-10 px-10">
        Creando el 1er Club Femenil Independiente de México
      </Subtitle>

      <Button>
        ¡Se parte del cambio!
        <FaArrowRight />
      </Button>

      <div className="max-w-3xl lg:max-w-4xl">
        <Image
          src="/assets/soccer.svg"
          alt="Hero Image"
          width={1600}
          height={800}
          className="rounded-t-lg shadow-2xl shadow-indigo-50/60 pointer-events-none select-none"
          decoding="sync"
          loading="eager"
        />
      </div>
    </div>
  );
};
