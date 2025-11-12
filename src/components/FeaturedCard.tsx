import { motion } from 'motion/react';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import type { BaseProps } from '@/interfaces/base';
import { Paragraph } from './ui';

interface FeaturedCardProps extends BaseProps {
  icon: IconType;
  text: string;
  delay?: number;
}

export const FeaturedCard: FC<FeaturedCardProps> = ({
  icon: Icon,
  text,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className=" p-8 rounded-3xl bg-background/5 dark:bg-neutral-700 backdrop-blur-sm border border-background/10 flex flex-col items-center text-center gap-6 active:scale-95 lg:active:scale-100 lg:hover:shadow-2xl lg:hover:shadow-primary/20 lg:hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center transition-transform duration-300 lg:group-hover:scale-110">
        <Icon
          className="text-primary text-6xl lg:text-7xl"
          aria-hidden="true"
        />
      </div>

      <Paragraph className="leading-relaxed">{text}</Paragraph>
    </motion.div>
  );
};
