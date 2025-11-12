import { cva } from 'class-variance-authority';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

const btnVariants = cva(
  'flex items-center justify-center gap-4 text-pretty font-alt font-medium text-lg cursor-pointer active:scale-105 transition-all duration-200 lg:scale-100 lg:hover:scale-105 border rounded-2xl px-6 py-3',
  {
    variants: {
      variant: {
        default:
          'text-primary-500 lg:hover:text-primary-600 border-primary-500',
        primary:
          'bg-primary-500 text-white lg:hover:bg-primary-600 border-primary-500',
        secondary:
          'bg-secondary-500 text-white lg:hover:bg-secondary-600 border-secondary-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ButtonProps extends BaseProps {
  variant?: 'default' | 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  style,
  variant,
}) => {
  return (
    <button
      className={twMerge(btnVariants({ variant }), className)}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};
