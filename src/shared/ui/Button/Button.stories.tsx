import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    ...Default.args,
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    ...Default.args,
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(true)],
};

export const OutlineSizeS: Story = {
  args: {
    ...Default.args,
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
  },
};

export const OutlineSizeM: Story = {
  args: {
    ...Default.args,
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};

export const Background: Story = {
  args: {
    ...Default.args,
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(true)],
};

export const BackgroundInverted: Story = {
  args: {
    ...Default.args,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSizeS: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
  },
};

export const SquareSizeM: Story = {
  args: {
    ...SquareSizeS.args,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    ...SquareSizeS.args,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    ...SquareSizeS.args,
    size: ButtonSize.XL,
  },
};
