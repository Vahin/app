import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/Button/variant',
  component: Button,
  decorators: [RedisignDecorator],
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    variant: 'clear',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Cancel: Story = {
  args: {
    variant: 'cancel',
  },
};

export const Save: Story = {
  args: {
    variant: 'save',
  },
};
