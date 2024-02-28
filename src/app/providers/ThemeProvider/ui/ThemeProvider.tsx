import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/types/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const defaultTheme = useJsonSettings().theme;
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || 'light',
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
    document.documentElement.dataset.theme = theme;
  }, [defaultTheme, isThemeInited, theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
