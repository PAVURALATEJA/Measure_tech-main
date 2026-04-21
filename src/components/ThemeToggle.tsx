import { motion } from 'framer-motion';
import { Zap, Square } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isBrutalist = theme === 'brutalist';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${isBrutalist ? 'futuristic' : 'brutalist'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isBrutalist ? 0 : 360,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isBrutalist ? (
          <Square className="w-4 h-4 text-foreground" />
        ) : (
          <Zap className="w-4 h-4 text-primary" />
        )}
      </motion.div>
      <span className="text-sm font-medium text-foreground">
        {isBrutalist ? 'Brutalist' : 'Futuristic'}
      </span>
    </motion.button>
  );
};
