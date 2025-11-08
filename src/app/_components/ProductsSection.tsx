import { FaArrowRight } from 'react-icons/fa6';
import { useTranslate } from '../hooks';
import { CallToActionButton } from './CallToActionButton';
import { ProductCard } from './ProductCard';
import { Title } from './ui';

export const ProductsSection = () => {
  const { t } = useTranslate('Features');

  return (
    <section className="my-12 flex flex-col gap-6 text-left container mx-auto px-6 max-w-3xl lg:max-w-5xl">
      <Title level="h2" className="py-10 max-w-2xl font-foreground">
        {t('title')}
      </Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductCard
          title={t('items.OLA-CAST.title')}
          description={[t('items.OLA-CAST.description.0')]}
          image={{
            src: '/assets/OLA-CAST.webp',
            alt: t('items.OLA-CAST.title'),
          }}
        />

        <ProductCard
          title={t('items.OLA-DIGITAL.title')}
          description={[t('items.OLA-DIGITAL.description.0')]}
          image={{
            src: '/assets/OLA-DIGITAL.webp',
            alt: t('items.OLA-DIGITAL.title'),
          }}
          rtl
        />

        <ProductCard
          title={t('items.OLA-GAMES.title')}
          description={[
            t('items.OLA-GAMES.description.0'),
            t('items.OLA-GAMES.description.1'),
          ]}
          image={{
            src: '/assets/OLA-GAMES.webp',
            alt: t('items.OLA-GAMES.title'),
          }}
          comingSoon
        />

        <ProductCard
          title={t('items.OLA-MIND.title')}
          description={[t('items.OLA-MIND.description.0')]}
          image={{
            src: '/assets/OLA-TALKS.webp',
            alt: t('items.OLA-MIND.title'),
          }}
          comingSoon
          rtl
        />

        <ProductCard
          title={t('items.OLA-SCOUT.title')}
          description={[t('items.OLA-SCOUT.description.0')]}
          image={{
            src: '/assets/OLA-SCOUT.webp',
            alt: t('items.OLA-SCOUT.title'),
          }}
          comingSoon
        />
      </div>

      <footer className="max-w-md mx-auto w-full">
        <CallToActionButton className="mx-auto my-10">
          {t('cta')}
          <FaArrowRight />
        </CallToActionButton>
      </footer>
    </section>
  );
};
