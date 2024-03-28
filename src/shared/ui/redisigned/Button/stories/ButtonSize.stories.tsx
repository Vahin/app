import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/Button/size',
  component: Button,
  decorators: [RedisignDecorator],
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const SizeM: Story = {
  args: {
    size: 'm',
  },
};

export const SizeL: Story = {
  args: {
    size: 'l',
  },
};

export const SizeXL: Story = {
  args: {
    size: 'xl',
  },
};
