import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const AnimatedCard = ({
  children,
  className,
  delay = 0,
  hover = true,
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'relative p-6 rounded-2xl bg-card border border-border transition-all duration-300',
        hover && 'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
