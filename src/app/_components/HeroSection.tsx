'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslate } from '../hooks';
import { CallToActionButton } from './CallToActionButton';
import { Subtitle, Title } from './ui';

export const HeroSection = () => {
  const { t } = useTranslate('Hero');

  return (
    <div className="relative py-20 px-6 flex flex-col items-center mx-auto container justify-center min-h-[calc(100dvh-4.5rem)]">
      <section className="flex flex-col xl:flex-row items-center justify-around w-full gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center xl:text-left max-w-lg relative"
        >
          <Title level="h1">{t('title')}</Title>

          <Subtitle className="my-16">{t('subtitle')}</Subtitle>

          <CallToActionButton className="w-full">
            {t('cta')}
            <FaArrowRight />
          </CallToActionButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-auto aspect-3/4 lg:aspect-5/4 max-w-xl"
        >
          {/* <div className="absolute -top-6 -left-6 bg-background shadow-2xl rounded-2xl p-4 border border-primary/20 hover:scale-110 transition-transform duration-300 z-20 hidden lg:block">
            <div className="text-3xl font-black text-primary">1K+</div>
            <div className="text-xs text-foreground/70">Jugadoras</div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-background shadow-2xl rounded-2xl p-4 border border-secondary/20 hover:scale-110 transition-transform duration-300 z-20 hidden lg:block">
            <div className="text-3xl font-black text-neutral-500">50+</div>
            <div className="text-xs text-foreground/70">Equipos</div>
          </div> */}

          <Image
            src="/assets/hero.webp"
            alt="Hero Image"
            fill
            className="rounded-xl absolute object-cover mx-auto"
            priority
            loading="eager"
            decoding="sync"
          />
        </motion.div>
      </section>
    </div>
  );
};
