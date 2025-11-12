'use client';

import { motion } from 'motion/react';
import { CallToActionButton } from '@/components/CallToActionButton';
import { useTranslate } from '@/hooks';

export const CtaSection = () => {
  const { t } = useTranslate('AboutUs.Cta');
  const { t: tCta } = useTranslate('Common.Cta');

  return (
    <section className="py-20 md:py-28 text-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black">{t('title')}</h2>
          <p className="text-lg leading-relaxed font-alt">{t('description')}</p>
          <CallToActionButton variant="primary">
            {tCta('joinTheCommunity')}
          </CallToActionButton>
        </motion.div>
      </div>
    </section>
  );
};
