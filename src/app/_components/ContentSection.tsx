import { FaArrowRight } from 'react-icons/fa6';
import { useTranslate } from '../hooks/useTranslate';
import { CallToActionButton } from './CallToActionButton';
import { Paragraph, Title } from './ui';

export const ContentSection = () => {
  const { t, rt } = useTranslate('WhyOlafut');

  return (
    <section className="rounded-5xl text-background shadow-lg bg-foreground z-20 p-10 md:py-20 flex flex-col gap-20">
      <div className="container mx-auto flex flex-col gap-10">
        <section className="flex flex-col md:gap-10">
          <Title
            level="h2"
            className="text-center py-10 text-4xl lg:text-6xl max-w-3xl font-black mx-auto"
          >
            {t('title')}
          </Title>
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <Paragraph>{t('paragraphs.0')}</Paragraph>
            <Paragraph>{t('paragraphs.1')}</Paragraph>
            <Paragraph>{t('paragraphs.2')}</Paragraph>
            <Paragraph>{rt('paragraphs.3')}</Paragraph>
          </div>
        </section>

        <section className="flex justify-center my-10">
          <CallToActionButton className="mx-auto">
            {t('cta')}
            <FaArrowRight />
          </CallToActionButton>
        </section>
      </div>
    </section>
  );
};
