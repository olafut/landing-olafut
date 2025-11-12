'use client';

import { FaArrowRight, FaHandshake, FaStar, FaTrophy } from 'react-icons/fa6';
import { useTranslate } from '@/hooks';
import { CallToActionButton } from '../CallToActionButton';
import { FeaturedCard } from '../FeaturedCard';
import { Paragraph, Title } from '../ui';

const FEATURES = [
  { id: 'trophy', icon: FaTrophy, textKey: 'features.needsMoreThanPromises' },
  { id: 'handshake', icon: FaHandshake, textKey: 'features.imagineAPlace' },
  { id: 'star', icon: FaStar, textKey: 'features.womenAreTheProtagonists' },
] as const;

export const WhyOlafutSection = () => {
  const { t, rt } = useTranslate('WhyOlafut');
  const { t: commonT } = useTranslate('Common.Cta');

  return (
    <section
      className="rounded-5xl text-background dark:text-foreground shadow-lg bg-foreground dark:bg-neutral-800 py-20"
      aria-labelledby="why-olafut-title"
    >
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto">
          <Title
            id="why-olafut-title"
            level="h2"
            className="text-center font-black max-w-3xl mx-auto"
          >
            {rt('title')}
          </Title>

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

        <div className="p-6 md:p-8 bg-linear-to-r from-foreground dark:from-neutral-800 via-secondary/5 to-foreground dark:to-neutral-800 rounded-2xl border border-background/10 lg:border-none">
          <Paragraph className="text-lg! md:text-xl! font-medium text-center leading-relaxed max-w-3xl mx-auto">
            {rt('features.passionAndPurpose')}
          </Paragraph>
        </div>

        <div className="flex justify-center">
          <CallToActionButton className="w-full max-w-md">
            {commonT('join')}
            <FaArrowRight />
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
};
