'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex items-center justify-center px-3 py-2 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors rounded-lg"
        aria-label="Toggle theme"
        type="button"
      >
        <span className="text-2xl">🌓</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center px-3 py-2 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors rounded-lg"
      aria-label="Toggle theme"
      type="button"
    >
      <span className="text-2xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
    </button>
  );
}
