'use client';

import { FaArrowRight, FaHandshake, FaStar, FaTrophy } from 'react-icons/fa6';
import { useTranslate } from '../hooks/useTranslate';
import { CallToActionButton } from './CallToActionButton';
import { FeaturedCard } from './FeaturedCard';
import { Paragraph, Title } from './ui';

const FEATURES = [
  { id: 'trophy', icon: FaTrophy, textKey: 'paragraphs.0' },
  { id: 'handshake', icon: FaHandshake, textKey: 'paragraphs.1' },
  { id: 'star', icon: FaStar, textKey: 'paragraphs.2' },
] as const;

export const WhyOlafutSection = () => {
  const { t, rt } = useTranslate('WhyOlafut');

  return (
    <section
      className="rounded-5xl text-background shadow-lg bg-foreground py-20"
      aria-labelledby="why-olafut-title"
    >
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        {/* Header + Cards */}
        <div className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Title */}
          <Title
            id="why-olafut-title"
            level="h2"
            className="text-center font-black max-w-3xl mx-auto"
          >
            {rt('title')}
          </Title>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon, id, textKey }, index) => (
              <FeaturedCard
                key={id}
                icon={icon}
                text={t(textKey)}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="p-6 md:p-8 bg-linear-to-r from-foreground via-secondary/5 to-foreground rounded-2xl border border-background/10">
          <Paragraph className="text-lg md:text-xl font-medium text-center leading-relaxed max-w-3xl mx-auto">
            {rt('paragraphs.3')}
          </Paragraph>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CallToActionButton className="w-full max-w-md">
            {t('cta')}
            <FaArrowRight />
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
};
