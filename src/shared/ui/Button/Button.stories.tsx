import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryLight: Story = {
  args: {
    children: 'Button',
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...PrimaryLight.args,
  },
};

export const ClearLight: Story = {
  args: {
    ...PrimaryLight.args,
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...ClearLight.args,
  },
};

export const OutlineLightS: Story = {
  args: {
    ...PrimaryLight.args,
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
  },
};

export const OutlineDarkS: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...OutlineLightS.args,
  },
};

export const OutlineLightM: Story = {
  args: {
    ...PrimaryLight.args,
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDarkM: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...OutlineLightM.args,
  },
};

export const BackgroundLight: Story = {
  args: {
    ...PrimaryLight.args,
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...BackgroundLight.args,
  },
};

export const BackgroundInvertedLight: Story = {
  args: {
    ...PrimaryLight.args,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const BackgroundInvertedDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...BackgroundInvertedLight.args,
  },
};

export const SquareLightS: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
  },
};

export const SquareDarkS: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...SquareLightS.args,
  },
};

export const SquareLightM: Story = {
  args: {
    ...SquareLightS.args,
    size: ButtonSize.M,
  },
};

export const SquareDarkM: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...SquareLightM.args,
  },
};

export const SquareLightL: Story = {
  args: {
    ...SquareLightS.args,
    size: ButtonSize.L,
  },
};

export const SquareDarkL: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...SquareLightL.args,
  },
};

export const SquareLightXL: Story = {
  args: {
    ...SquareLightS.args,
    size: ButtonSize.XL,
  },
};

export const SquareDarkXL: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...SquareLightXL.args,
  },
};
