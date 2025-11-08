import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslate } from '../hooks';
import { CallToActionButton } from './CallToActionButton';
import { Subtitle, Title } from './ui';

export const HeroSection = () => {
  const { t } = useTranslate('Hero');

  return (
    <div className="relative py-20 px-6 flex flex-col items-center mx-auto container justify-center min-h-[calc(100dvh-4.5rem)]">
      <section className="flex flex-col xl:flex-row items-center justify-between w-full gap-20 lg:gap-10">
        <div className="flex flex-col text-center xl:text-left max-w-lg">
          <Title level="h1">{t('title')}</Title>

          <Subtitle className="my-16">{t('subtitle')}</Subtitle>

          <CallToActionButton className="w-full">
            {t('cta')}
            <FaArrowRight />
          </CallToActionButton>
        </div>

        <div className="relative w-full h-auto aspect-3/4 lg:aspect-5/4 max-w-xl">
          <Image
            src="/assets/hero.webp"
            alt="Hero Image"
            fill
            className="rounded-xl absolute object-cover mx-auto"
            priority
            loading="eager"
            decoding="sync"
          />
        </div>
      </section>
    </div>
  );
};
