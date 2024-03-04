import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widjet/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          features: {
            isAppRedisigned: true,
          },
        },
      },
    }),
  ],
};

export const WithoutAuth: Story = {
  decorators: [
    StoreDecorator({
      user: {},
    }),
  ],
};
