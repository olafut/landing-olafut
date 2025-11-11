'use client';

import { motion } from 'motion/react';
import { Subtitle, Title } from '@/app/_components/ui';
import { useTranslate } from '@/app/hooks';

export const HeroSection = () => {
  const { rt, t } = useTranslate('AboutUs.Hero');

  return (
    <section className="relative flex items-center justify-center overflow-hidden mt-20 bg-foreground dark:bg-neutral-800 py-20 transition-colors duration-300 ease-linear">
      <div className="container mx-auto px-6 relative z-10 text-center text-background dark:text-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Title level="h2">{rt('title')}</Title>
          <Subtitle>{t('subtitle')}</Subtitle>
        </motion.div>
      </div>
    </section>
  );
};
