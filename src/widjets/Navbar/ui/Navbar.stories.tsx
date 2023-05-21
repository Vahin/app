import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widjet/Navbar',
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  render: () => <Navbar />,
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.dark),
  ],
  render: () => <Navbar />,
};
