import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case 'dark':
        newTheme = 'light';
        break;
      case 'light':
        newTheme = 'purple';
        break;
      case 'purple':
        newTheme = 'dark';
        break;
      default:
        newTheme = 'light';
    }
    setTheme?.(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || 'light',
    toggleTheme,
  };
};
