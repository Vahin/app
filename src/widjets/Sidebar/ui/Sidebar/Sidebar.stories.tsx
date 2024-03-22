import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';

const meta: Meta<typeof Sidebar> = {
  title: 'widjet/Sidebar',
  component: Sidebar,
  decorators: [RedisignDecorator],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const defaultState: DeepPartial<StateSchema> = {
  user: {
    authData: {
      features: {
        isAppRedisigned: true,
      },
    },
  },
};

const authState: DeepPartial<StateSchema> = {
  user: {
    authData: {
      id: '1',
      features: {
        isAppRedisigned: true,
      },
    },
  },
};

export const Default: Story = {
  decorators: [StoreDecorator(defaultState)],
};

export const DefaultWithAuth: Story = {
  decorators: [StoreDecorator(authState)],
};

export const Collapsed: Story = {
  args: {
    collapse: true,
  },
  decorators: [StoreDecorator(defaultState)],
};

export const CollapsedWithAuth: Story = {
  args: {
    collapse: true,
  },
  decorators: [StoreDecorator(authState)],
};
