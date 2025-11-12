'use client';

import { motion } from 'motion/react';
import { FaFutbol, FaMicrophone, FaStar, FaUsers } from 'react-icons/fa6';
import { Paragraph, Title } from '@/components/ui';
import { useTranslate } from '@/hooks';
import type { Stat } from '../../../messages/types';

const STAT_ICONS = [FaUsers, FaStar, FaMicrophone, FaFutbol] as const;

export const StatsSection = () => {
  const { t, getObject } = useTranslate('AboutUs.Stats');
  const statsItems = getObject<Stat>('items');
  const stats = Object.values(statsItems);

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title className="mb-4">{t('title')}</Title>
          <Paragraph>{t('subtitle')}</Paragraph>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <Icon
                  className="text-4xl md:text-5xl text-primary-400 mx-auto"
                  aria-hidden="true"
                />
                <div className="text-4xl md:text-5xl font-black text-primary-400">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-background/70 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
