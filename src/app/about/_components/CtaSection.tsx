'use client';

import { motion } from 'motion/react';
import { CallToActionButton } from '@/app/_components/CallToActionButton';

export const CtaSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-black">
            ¿Lista para ser parte del cambio?
          </h2>
          <p className="text-lg leading-relaxed font-alt">
            Únete a la comunidad que está revolucionando el fútbol femenil en
            México. Cada voz cuenta, cada acción suma.
          </p>
          <CallToActionButton variant="primary">
            ¡Únete a la OLA!
          </CallToActionButton>
        </motion.div>
      </div>
    </section>
  );
};
