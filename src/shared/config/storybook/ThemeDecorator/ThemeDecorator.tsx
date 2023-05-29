import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './decorator.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (invetred?: boolean) => (Story: StoryFn, context: StoryContext) => {
  const { globals } = context;

  const mods: Record<string, boolean> = {
    inverted: invetred,
  };

  return (
    <ThemeProvider themeProps={globals.theme}>
      <div className={classNames('viewport', mods)}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
