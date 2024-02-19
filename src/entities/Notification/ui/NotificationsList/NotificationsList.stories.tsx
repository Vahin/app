import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationsList> = {
  title: 'entities/Notifications/NotificationsList',
  component: NotificationsList,
};

export default meta;

type Story = StoryObj<typeof NotificationsList>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Notification',
            description: 'Hello from mock notifications',
          },
          {
            id: '2',
            title: 'Notification',
            description: 'Hello from mock notifications',
          },
          {
            id: '3',
            title: 'Notification',
            description: 'Hello from mock notifications',
          },
          {
            id: '4',
            title: 'Notification',
            description: 'Hello from mock notifications',
          },
        ],
      },
    ],
  },
};

export const Loading: Story = {
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        delay: 100000,
        response: [],
      },
    ],
  },
};
