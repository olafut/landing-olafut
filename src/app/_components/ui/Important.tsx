import { motion } from 'motion/react';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Important: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
      className="relative inline-block"
    >
      <span
        className={twMerge(
          'bg-linear-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent drop-shadow-sm',
          className,
        )}
        style={style}
      >
        {children}
      </span>
    </motion.div>
  );
};
