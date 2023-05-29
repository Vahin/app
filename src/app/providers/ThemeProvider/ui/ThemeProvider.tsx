import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';

interface ThemeProviderProps {
  children: ReactNode;
  themeProps?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeProps }) => {
  const [theme, setTheme] = useState<Theme>(themeProps || defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = themeProps || theme;
  }, [theme, themeProps]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
