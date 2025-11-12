'use client';

import { motion } from 'motion/react';
import { Paragraph } from '@/components/ui';
import { useTranslate } from '@/hooks';
import type { TimelineItem } from '../../../messages/types';

export const TimelineSection = () => {
  const { t, getObject } = useTranslate('AboutUs.Timeline');
  const timelineItems = getObject<TimelineItem>('items');
  const timeline = Object.values(timelineItems);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {t('title')}
          </h2>
          <Paragraph>{t('subtitle')}</Paragraph>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {timeline.map((milestone, index) => (
            <motion.div
              key={index.toString()}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="shrink-0 w-20 h-20 bg-linear-to-br from-accent-300 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {milestone.year}
                </span>
              </div>

              <div className="bg-foreground/5 p-6 rounded-2xl flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <Paragraph>{milestone.description}</Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
