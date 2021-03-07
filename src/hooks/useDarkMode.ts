import { useState, useEffect } from 'react';
import useMedia from 'hooks/useMedia';

type Theme = 'light' | 'dark';

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setTheme(localTheme as Theme);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [prefersDarkMode]);

  const state: [Theme, () => void] = [theme, toggleTheme];

  return state;
};

export default useDarkMode;
