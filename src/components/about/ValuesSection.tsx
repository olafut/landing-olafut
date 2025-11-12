'use client';

import { motion } from 'motion/react';
import { FaHeart, FaTrophy, FaUsers } from 'react-icons/fa6';
import { Paragraph, Title } from '@/components/ui';
import { useTranslate } from '@/hooks';
import type { Value } from '../../../messages/types';

const VALUE_ICONS = [FaHeart, FaUsers, FaTrophy] as const;

export const ValuesSection = () => {
  const { t, getObject } = useTranslate('AboutUs.Values');
  const valuesItems = getObject<Value>('items');
  const values = Object.values(valuesItems);

  return (
    <section className="py-20 md:py-28 bg-foreground/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level="h3" className="mb-4">
            {t('title')}
          </Title>
          <Paragraph className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </Paragraph>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-linear-to-br from-primary-300 to-primary-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-3xl text-white" aria-hidden="true" />
                </div>
                <Title level="h4" className="text-center mb-4">
                  {value.title}
                </Title>
                <Paragraph className="text-foreground/80 text-center leading-relaxed">
                  {value.description}
                </Paragraph>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
