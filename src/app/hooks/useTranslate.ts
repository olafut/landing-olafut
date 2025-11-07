import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { chunkFormatter } from '@/utils';

export const useTranslate = (namespace?: string) => {
  const t = useTranslations(namespace);

  const translate = (key: string): string => {
    if (!key) return '';
    if (!t.has(key)) return '';
    return t(key);
  };

  const richTranslate = (key: string): ReactNode => {
    if (!key) return null;
    if (!t.has(key)) return null;
    return t.rich(key, chunkFormatter);
  };

  return {
    t: translate,
    rt: richTranslate,
  };
};
