import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
};
