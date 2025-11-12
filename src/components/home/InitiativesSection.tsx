'use client';

import { motion } from 'motion/react';
import { FaMobileAlt } from 'react-icons/fa';
import {
  FaArrowRight,
  FaBinoculars,
  FaGraduationCap,
  FaMicrophone,
  FaTrophy,
} from 'react-icons/fa6';
import type { Initiative } from '@/interfaces';
import { useTranslate } from '../../hooks';
import { CallToActionButton } from '../CallToActionButton';
import { InitiativeCard } from '../InitiativeCard';
import { Title } from '../ui';

const INITIATIVES: Initiative[] = [
  {
    key: 'OLA-CAST',
    image: '/assets/OLA-CAST.webp',
    rtl: false,
    comingSoon: false,
    icon: FaMicrophone,
  },
  {
    key: 'OLA-DIGITAL',
    image: '/assets/OLA-DIGITAL.webp',
    rtl: true,
    comingSoon: false,
    icon: FaMobileAlt,
  },
  {
    key: 'OLA-GAMES',
    image: '/assets/OLA-GAMES.webp',
    rtl: false,
    comingSoon: true,
    icon: FaTrophy,
  },
  {
    key: 'OLA-MIND',
    image: '/assets/OLA-TALKS.webp',
    rtl: true,
    comingSoon: true,
    icon: FaGraduationCap,
  },
  {
    key: 'OLA-SCOUT',
    image: '/assets/OLA-SCOUT.webp',
    rtl: false,
    comingSoon: true,
    icon: FaBinoculars,
  },
] as const;

export const InitiativesSection = () => {
  const { t } = useTranslate('Features');
  const { t: commonT } = useTranslate('Common.Cta');

  return (
    <section
      className="py-16 md:py-20 container mx-auto px-6"
      aria-labelledby="initiatives-title"
    >
      <div className="flex flex-col gap-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] auto-rows-fr gap-6 md:gap-8">
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
                className="h-full"
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
                  icon={initiative.icon}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CallToActionButton className="w-full max-w-md">
            {commonT('dontMissOut')}
            <FaArrowRight />
          </CallToActionButton>
        </motion.div>
      </div>
    </section>
  );
};
