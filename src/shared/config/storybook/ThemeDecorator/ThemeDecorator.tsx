import { useEffect } from 'react';
import { StoryContext, StoryFn } from '@storybook/react';
import './decorator.scss';
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const { globals } = context;

  useEffect(() => {
    document.documentElement.dataset.theme = globals.theme;
  }, [globals.theme]);

  return (
    <ThemeProvider initialTheme={globals.theme}>
      <div className='viewport' id='viewport'>
        <Story />
      </div>
    </ThemeProvider>
  );
};
