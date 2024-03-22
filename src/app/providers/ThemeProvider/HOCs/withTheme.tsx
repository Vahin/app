import { useUserTheme } from '@/entities/User';
import ThemeProvider from '../ui/ThemeProvider';

export const withTheme = (Component: React.ComponentType) => () => {
  const theme = useUserTheme();

  return (
    <ThemeProvider initialTheme={theme}>
      <Component />
    </ThemeProvider>
  );
};
