import { StoryContext, StoryFn } from '@storybook/react';
// eslint-disable-next-line fsd-vakhr/layers-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import './decorator.scss';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

export const ThemeDecorator =
  (invetred?: boolean) => (Story: StoryFn, context: StoryContext) => {
    const { globals } = context;

    const mods: Mods = {
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
