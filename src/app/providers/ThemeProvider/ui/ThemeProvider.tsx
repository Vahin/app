import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/types/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  children: ReactNode;
  themeProps?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeProps }) => {
  const defaultTheme = useJsonSettings().theme ?? 'light';
  const [theme, setTheme] = useState<Theme>(themeProps || defaultTheme);
  const [isThemeInited, steIsThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      steIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
