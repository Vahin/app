import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import Image from '@/shared/assets/icons/Info.svg';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  decorators: [RedisignDecorator],
  args: {
    Svg: Image,
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
