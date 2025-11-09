import type { RichTagsFunction } from 'next-intl';
import type { ReactNode } from 'react';
import { Strong } from '@/app/_components/ui';
import { Hub } from '@/app/_components/ui/Hub';
import { Important } from '@/app/_components/ui/Important';

export const chunkFormatter: Record<
  string,
  string | number | Date | RichTagsFunction
> = {
  important: (chunks: ReactNode) => <Important>{chunks}</Important>,
  b: (chunks: ReactNode) => <Strong>{chunks}</Strong>,
  strong: (chunks: ReactNode) => <Strong>{chunks}</Strong>,
  tag: (chunks: ReactNode) => <Hub>{chunks}</Hub>,
};
