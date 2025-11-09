'use client';

import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslate } from '../hooks';
import { CallToActionButton } from './CallToActionButton';
import { InitiativeCard } from './InitiativeCard';
import { Title } from './ui';

const INITIATIVES = [
  {
    key: 'OLA-CAST',
    image: '/assets/OLA-CAST.webp',
    rtl: false,
    comingSoon: false,
  },
  {
    key: 'OLA-DIGITAL',
    image: '/assets/OLA-DIGITAL.webp',
    rtl: true,
    comingSoon: false,
  },
  {
    key: 'OLA-GAMES',
    image: '/assets/OLA-GAMES.webp',
    rtl: false,
    comingSoon: true,
  },
  {
    key: 'OLA-MIND',
    image: '/assets/OLA-TALKS.webp',
    rtl: true,
    comingSoon: true,
  },
  {
    key: 'OLA-SCOUT',
    image: '/assets/OLA-SCOUT.webp',
    rtl: false,
    comingSoon: true,
  },
] as const;

export const InitiativesSection = () => {
  const { t } = useTranslate('Features');

  return (
    <section
      className="py-16 md:py-20 container mx-auto px-6"
      aria-labelledby="initiatives-title"
    >
      <div className="flex flex-col gap-12">
        {/* Title con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title
            id="initiatives-title"
            level="h2"
            className="text-foreground font-black text-4xl md:text-5xl max-w-3xl"
          >
            {t('title')}
          </Title>
        </motion.div>

        {/* Grid con altura uniforme ✨ */}
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] auto-rows-fr gap-6 md:gap-8">
          {INITIATIVES.map((initiative, index) => {
            const descriptions = [
              t(`items.${initiative.key}.description.0`),
              t(`items.${initiative.key}.description.1`),
            ].filter(Boolean);

            return (
              <motion.div
                key={initiative.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="h-full" // ✨ Importante para que funcione auto-rows-fr
              >
                <InitiativeCard
                  title={t(`items.${initiative.key}.title`)}
                  description={descriptions}
                  image={{
                    src: initiative.image,
                    alt: t(`items.${initiative.key}.title`),
                  }}
                  rtl={initiative.rtl}
                  comingSoon={initiative.comingSoon}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA con animación */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CallToActionButton className="w-full max-w-md">
            {t('cta')}
            <FaArrowRight />
          </CallToActionButton>
        </motion.div>
      </div>
    </section>
  );
};
