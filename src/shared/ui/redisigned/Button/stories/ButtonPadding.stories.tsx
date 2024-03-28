import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/Button/padding',
  component: Button,
  decorators: [RedisignDecorator],
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PaddingNormal: Story = {
  args: {
    padding: 'normal',
  },
};

export const PaddingMin: Story = {
  args: {
    padding: 'min',
  },
};
