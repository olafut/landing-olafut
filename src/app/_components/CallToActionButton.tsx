import { cva } from 'class-variance-authority';
import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

const variants = cva(
  'relative group px-6 py-4 w-full font-alt flex items-center gap-2 justify-center cursor-pointer uppercase tracking-wider bg-linear-to-br rounded-lg font-semibold overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-100 text-sm md:text-base',
  {
    variants: {
      variant: {
        primary:
          'from-primary-400 via-primary-500 to-primary-600 text-white shadow-primary-500/80 hover:shadow-primary-500/80',
        accent:
          'from-accent-400 via-accent-500 to-accent-600 text-white shadow-accent-500/40',
        dark: 'from-foreground via-foreground to-foreground text-white shadow-foreground/30 shadow-foreground/80 hover:shadow-foreground/80',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface CallToActionButtonProps extends BaseProps {
  variant?: 'primary' | 'accent' | 'dark';
}

export const CallToActionButton: FC<CallToActionButtonProps> = ({
  variant = 'primary',
  children,
  className,
  style,
}) => {
  return (
    <button
      className={twMerge('', variants({ variant }), className)}
      style={style}
      type="button"
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent" />

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
    </button>
  );
};
