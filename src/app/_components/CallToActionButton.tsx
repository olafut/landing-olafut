import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';
import { Button } from './ui';

export const CallToActionButton: FC<BaseProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <Button
      className={twMerge(
        'group relative px-8 py-4 bg-linear-to-r from-primary-400 via-primary-500 to-primary-600 rounded-lg font-bold text-white text-md shadow-[0_8px_24px_rgba(234,87,127,0.25)] overflow-hidden transition-all hover:shadow-[0_12px_32px_rgba(234,87,127,0.4)] hover:scale-105 active:scale-100',
        className,
      )}
      style={style}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Glow effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-primary-400/50 to-primary-600/50 blur-xl" />

      <span className="relative flex items-center justify-center gap-3">
        <Link
          href="https://chat.whatsapp.com/FuurwY2lP1jHETF5xchlmI"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2"
        >
          {children}
        </Link>
      </span>
    </Button>
  );
};
