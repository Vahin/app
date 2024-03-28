import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  decorators: [RedisignDecorator],
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    text: 'text text text',
  },
};
