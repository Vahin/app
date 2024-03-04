import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import ava from './assets/medoed.jpeg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/deprecated/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 150,
    src: ava,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: ava,
  },
};
