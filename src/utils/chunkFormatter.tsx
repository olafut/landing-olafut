import Image from 'next/image';
import type { RichTagsFunction } from 'next-intl';
import type { ReactNode } from 'react';
import { Strong } from '@/app/_components/ui';
import { Description } from '@/app/_components/ui/Description';
import { Hub } from '@/app/_components/ui/Hub';
import { Important } from '@/app/_components/ui/Important';

export const chunkFormatter: Record<
  string,
  string | number | Date | RichTagsFunction
> = {
  important: (chunks: ReactNode) => <Important>{chunks}</Important>,
  b: (chunks: ReactNode) => (
    <strong className="font-black text-foreground">{chunks}</strong>
  ),
  strong: (chunks: ReactNode) => <Strong>{chunks}</Strong>,
  tag: (chunks: ReactNode) => <Hub>{chunks}</Hub>,
  description: (chunks: ReactNode) => <Description>{chunks}</Description>,
  logo: (chunks: ReactNode) => (
    <div className="inline-block align-middle relative min-w-56 min-h-18 mx-2">
      <Image
        src="/assets/olafut_white.svg"
        alt={String(chunks)}
        fill
        className="absolute"
      />
    </div>
  ),
};
