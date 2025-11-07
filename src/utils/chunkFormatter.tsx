import type { RichTagsFunction } from 'next-intl';
import type { ReactNode } from 'react';
import { Strong } from '@/app/_components/ui';

export const chunkFormatter: Record<
  string,
  string | number | Date | RichTagsFunction
> = {
  important: (chunks: ReactNode) => <Strong>{chunks}</Strong>,
  b: (chunks: ReactNode) => <Strong>{chunks}</Strong>,
  strong: (chunks: ReactNode) => <Strong>{chunks}</Strong>,
};
