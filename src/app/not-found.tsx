import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaHouse } from 'react-icons/fa6';
import { Button } from '@/components/ui';
import { BASE_METADATA } from '@/constants/base-metadata';

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: '404 - Página no encontrada | Olafut',
  description: 'La página que buscas no existe o ha sido movida.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const t = useTranslations('NotFound');
  const tCta = useTranslations('Common.Cta');

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20 lg:py-28 px-10 text-center container mx-auto min-h-[70dvh]">
      <p className="uppercase text-xs font-alt">{t('error')}</p>
      <h2 className="text-5xl font-bold">{t('title')}</h2>
      <p className="font-alt max-w-lg">{t('description')}</p>

      <Link href="/" className="mt-10 w-full">
        <Button className="w-full mx-auto max-w-md" variant="primary">
          <FaHouse />
          {tCta('backToHome')}
        </Button>
      </Link>
    </div>
  );
}
