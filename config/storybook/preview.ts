import type { Preview } from '@storybook/react';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
  decorators: [
    StyleDecorator,
    ThemeDecorator(),
    StoreDecorator({}),
    RouterDecorator,
    SuspenseDecorator,
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark', 'purple'],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'rgb(199 199 199)' },
        { name: 'dark', value: 'rgb(44 44 44)' },
        { name: 'purple', value: 'rgb(248, 244, 251)' },
      ],
    },
  },
};

export default preview;
