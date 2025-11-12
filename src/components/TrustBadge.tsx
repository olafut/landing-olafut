import { motion } from 'motion/react';
import type { FC } from 'react';

interface TrustBadgeProps {
  icon: string;
  label: string;
  delay: number;
}

export const TrustBadge: FC<TrustBadgeProps> = ({ delay, icon, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </motion.div>
  );
};
