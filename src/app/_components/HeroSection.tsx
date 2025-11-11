'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslate } from '../hooks';
import { CallToActionButton } from './CallToActionButton';
import { FloatingCard } from './FloatingCard';
import { TrustBadge } from './TrustBadge';
import { Subtitle, Title } from './ui';

export const HeroSection = () => {
  const { t, rt } = useTranslate('Hero');
  const { t: tCta } = useTranslate('Common.Cta');

  return (
    <section className="relative min-h-175 lg:min-h-[min(850px,calc(100dvh-4.5rem))] bg-background overflow-hidden flex items-center">
      <div className="container mx-auto py-16 relative z-10 px-6 xl:px-0">
        <div className="grid xl:grid-cols-12 gap-12 xl:gap-20 items-center">
          <motion.div
            className="xl:col-span-5 space-y-8 text-center xl:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-background border-2 border-primary-400 rounded-full shadow-sm">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_8px_rgba(234,87,127,0.6)]"
                />
                <span className="text-xs font-bold text-foreground tracking-wider uppercase">
                  {t('badge')}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8 max-w-2xl mx-auto xl:mx-0"
            >
              <Title
                level="h1"
                className="font-bold leading-tight tracking-tight text-foreground"
              >
                {rt('title')}
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-4"
            >
              <Subtitle className="text-xl md:text-[1.3rem]! text-foreground/80 leading-relaxed max-w-xl mx-auto xl:mx-0 font-medium group">
                {rt('subtitle')}
              </Subtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="pt-4 flex justify-center xl:justify-start max-w-md mx-auto xl:mx-0"
            >
              <CallToActionButton>
                {tCta('bePartOfChange')}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </CallToActionButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap justify-center xl:justify-start gap-6 pt-8 border-t-2 border-secondary"
            >
              <TrustBadge
                icon="⚡"
                label={t('trustBadges.activeCommunity')}
                delay={1.2}
              />
              <TrustBadge
                icon="🎙️"
                label={t('trustBadges.weeklyPodcast')}
                delay={1.3}
              />
              <TrustBadge
                icon="⚽"
                label={t('trustBadges.everyoneCounts')}
                delay={1.4}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="xl:col-span-7 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative aspect-3/4 md:aspect-8/7 rounded-xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/assets/hero.webp"
                  alt="Equipo Olafut en acción - Primer club femenil independiente"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
                />

                <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />

                <div className="absolute inset-0 rounded-5xl ring-1 ring-primary-300/30" />
              </motion.div>

              <FloatingCard delay={1.5} className="absolute top-8 right-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-400 to-primary-600 flex items-center justify-center text-xl shadow-lg">
                    ⚽
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {t('floatingCard.title')}
                    </div>
                    <div className="text-xs text-foreground/50">
                      {t('floatingCard.subtitle')}
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2xs"
            >
              <div className="px-6 py-3 bg-background/90 backdrop-blur-md border-2 border-primary-200 dark:border-primary-700 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-foreground">
                  {t('buildingHistory')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
