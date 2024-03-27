import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';
import Image from '@/shared/assets/test/ImageTest.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  decorators: [RedisignDecorator],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: Image,
  },
};

export const CustomSize300: Story = {
  args: {
    size: 300,
  },
};
