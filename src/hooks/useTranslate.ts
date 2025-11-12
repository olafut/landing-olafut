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

  /**
   * Obtiene un objeto completo de traducciones (útil para items dinámicos)
   * @example
   * const items = getObject('items'); // Retorna { followers: {...}, initiatives: {...} }
   */
  const getObject = <T = unknown>(key: string): Record<string, T> => {
    if (!key) return {};
    if (!t.has(key)) return {};
    const rawValue = t.raw(key);
    return typeof rawValue === 'object' && rawValue !== null
      ? (rawValue as Record<string, T>)
      : {};
  };

  return {
    t: translate,
    rt: richTranslate,
    getObject,
    raw: t.raw, // Exponer raw para casos avanzados
  };
};
