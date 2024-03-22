import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/types/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [themeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || 'light',
  );

  useEffect(() => {
    if (!themeInited && initialTheme) {
      setTheme(initialTheme);
      setThemeInited(true);
    }
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme, setTheme, setThemeInited, themeInited, initialTheme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
