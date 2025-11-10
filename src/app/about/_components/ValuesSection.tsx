'use client';

import { motion } from 'motion/react';
import { FaHeart, FaTrophy, FaUsers } from 'react-icons/fa6';
import { Paragraph, Title } from '@/app/_components/ui';

const VALUES = [
  {
    icon: FaHeart,
    title: 'Pasión',
    description:
      'Por el fútbol femenil y por construir un futuro más equitativo en el deporte.',
  },
  {
    icon: FaUsers,
    title: 'Comunidad',
    description: 'Creemos en el poder de la unión. Juntas somos más fuertes.',
  },
  {
    icon: FaTrophy,
    title: 'Excelencia',
    description:
      'Buscamos la calidad en cada aspecto: dentro y fuera de la cancha.',
  },
] as const;

export const ValuesSection = () => {
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
            Nuestros Valores
          </Title>
          <Paragraph className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Los principios que guían cada decisión y acción en Olafut
          </Paragraph>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
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
