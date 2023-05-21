import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

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
    theme: ThemeButton.CLEAR,
  },
};

export const ClearDarkt: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...ClearLight.args,
  },
};

export const OutlineLight: Story = {
  args: {
    ...PrimaryLight.args,
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...OutlineLight.args,
  },
};
