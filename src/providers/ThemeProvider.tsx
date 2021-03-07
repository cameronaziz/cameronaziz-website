import React, { createContext } from 'react';
import useDarkMode from 'hooks/useDarkMode';

type Theme = 'light' | 'dark';

interface ThemeValue {
  theme: Theme;
  toggleTheme(): void;
}

const defaultValue = {
  theme: 'dark',
} as ThemeValue;

export const ThemeContext = createContext(defaultValue);

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
