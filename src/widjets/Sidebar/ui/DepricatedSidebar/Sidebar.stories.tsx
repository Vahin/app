import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { DepricatedSidebar } from './Sidebar';

const meta: Meta<typeof DepricatedSidebar> = {
  title: 'widjet/Sidebar',
  component: DepricatedSidebar,
};

export default meta;

type Story = StoryObj<typeof DepricatedSidebar>;

export const Default: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} },
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
