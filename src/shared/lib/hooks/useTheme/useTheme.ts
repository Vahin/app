import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '@/shared/types/theme';

type SaveAction = (theme: Theme) => void;

interface UseThemeResult {
  theme: Theme;
  toggleTheme: (saveAction?: SaveAction) => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: SaveAction) => {
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

    saveAction?.(newTheme);
  };

  return {
    theme: theme || 'light',
    toggleTheme,
  };
};
