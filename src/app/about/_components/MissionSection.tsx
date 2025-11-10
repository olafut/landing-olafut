'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Paragraph, Strong, Title } from '@/app/_components/ui';

export const MissionSection = () => {
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
            <Title>Nuestra Misión</Title>
            <Paragraph className="text-lg leading-relaxed">
              OLAFUT nace de la pasión por el fútbol, el deporte y la convicción
              de que las mujeres merecen un espacio propio e independiente.
            </Paragraph>
            <Paragraph className="text-lg leading-relaxed">
              Somos un movimiento que paso a paso construye el primer{' '}
              <Strong>HUB</Strong>{' '}
              <span className="text-xs italic">(centro, núcleo)</span> del
              fútbol femenil que busca brindar un espacio seguro, dar voz,
              recompensar, fomentar competencia sana, dar conocimientos y ayudar
              a crecer a todas las mujeres que formen parte a través de
              diferentes pilares y estrategias.
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
              src="/assets/about.jpg"
              alt="Misión de Olafut"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
