import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';
import Image from '@/shared/assets/icons/copy.svg';
import { Icon } from '../../Icon';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  decorators: [RedisignDecorator],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AddonLeft: Story = {
  args: {
    addonLeft: <Icon Svg={Image} />,
  },
};

export const AddonRight: Story = {
  args: {
    addonRight: <Icon Svg={Image} />,
  },
};
