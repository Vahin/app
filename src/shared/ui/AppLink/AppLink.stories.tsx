import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link to',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
  args: {
    ...meta.args,
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    ...PrimaryLight.args,
    theme: AppLinkTheme.PRIMARY,
  },
};

export const InvertedLight: Story = {
  args: {
    ...PrimaryLight.args,
    theme: AppLinkTheme.INVERTED,
  },
};

export const InvertedDark: Story = {
  decorators: [ThemeDecorator(Theme.dark)],
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};
