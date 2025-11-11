'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Paragraph, Title } from '@/app/_components/ui';
import { useTranslate } from '@/app/hooks';

export const MissionSection = () => {
  const { t, rt } = useTranslate('AboutUs.Mission');

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Title>{t('title')}</Title>
            <Paragraph className="text-lg leading-relaxed">
              {t('paragraph1')}
            </Paragraph>
            <Paragraph className="text-lg leading-relaxed">
              {rt('paragraph2')}
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/about.webp"
              alt="Misión de Olafut"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
