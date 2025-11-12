import { motion } from 'motion/react';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

interface FloatingCardProps extends BaseProps {
  delay: number;
}

export const FloatingCard: FC<FloatingCardProps> = ({
  delay,
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ scale: 1.08, y: -8 }}
      className={twMerge(
        'backdrop-blur-xl bg-background/95 border-2 border-primary-200 dark:border-primary-700  rounded-2xl p-4 shadow-[0_8px_32px_rgba(234,87,127,0.15)] hover:shadow-[0_12px_40px_rgba(234,87,127,0.25)] transition-shadow',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
