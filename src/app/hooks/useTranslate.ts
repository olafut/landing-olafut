import { type TranslationValues, useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { chunkFormatter } from '@/utils';

export const useTranslate = (namespace?: string) => {
  const t = useTranslations(namespace);

  const translate = (key: string, values?: TranslationValues): string => {
    if (!key) return '';
    if (!t.has(key)) return '';
    return t(key, values);
  };

  const richTranslate = (
    key: string,
    values?: TranslationValues,
  ): ReactNode => {
    if (!key) return null;
    if (!t.has(key)) return null;
    return t.rich(key, { ...values, ...chunkFormatter });
  };

  return {
    t: translate,
    rt: richTranslate,
  };
};
