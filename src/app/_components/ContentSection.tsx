'use client';
import { motion } from 'motion/react';
import { FaArrowRight, FaHandshake, FaStar, FaTrophy } from 'react-icons/fa6';
import { useTranslate } from '../hooks/useTranslate';
import { CallToActionButton } from './CallToActionButton';
import { Paragraph, Title } from './ui';

export const ContentSection = () => {
  const { t, rt } = useTranslate('WhyOlafut');

  const cardIcons = [FaTrophy, FaHandshake, FaStar];

  return (
    <section className="rounded-5xl text-background shadow-lg bg-foreground z-20 px-6 py-20 flex flex-col gap-20">
      <div className="container mx-auto flex flex-col gap-10">
        <section className="flex flex-col md:gap-10 max-w-2xl lg:max-w-3xl mx-auto">
          <Title level="h2" className="text-center pb-16 font-black">
            {t('title')}
          </Title>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[0, 1, 2].map((index) => {
              const Icon = cardIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-background/5 backdrop-blur-sm border border-background/10 flex flex-col items-center text-center gap-6 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Icon className="text-primary text-3xl lg:text-4xl" />
                  </div>
                  <Paragraph className="text-base leading-relaxed">
                    {t(`paragraphs.${index}`)}
                  </Paragraph>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="my-6 p-6 bg-linear-to-r from-foreground via-secondary/5 to-foreground">
          <Paragraph className="text-lg md:text-xl font-medium text-center">
            {rt('paragraphs.3')}
          </Paragraph>
        </div>

        <section className="flex justify-center mx-auto max-w-md w-full">
          <CallToActionButton className="mx-auto">
            {t('cta')}
            <FaArrowRight />
          </CallToActionButton>
        </section>
      </div>
    </section>
  );
};
