'use client';

import { motion } from 'motion/react';
import { Subtitle, Title } from '@/app/_components/ui';
import { useTranslate } from '@/app/hooks';

export const HeroSection = () => {
  const { rt, t } = useTranslate('AboutUs.Hero');

  return (
    <section className="relative flex items-center justify-center overflow-hidden mt-20 bg-foreground py-10">
      <div className="container mx-auto px-6 relative z-10 text-center text-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Title level="h2">{rt('title')}</Title>
          <Subtitle>{t('subtitle')}</Subtitle>
          <p className="text-lg md:text-xl text-background max-w-2xl mx-auto leading-relaxed font-alt"></p>
        </motion.div>
      </div>
    </section>
  );
};
