import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Avatar from 'shared/assets/test/medoed.jpeg';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'features/ArticleDetailsComments',
  component: ArticleDetailsComments,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

const data = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      text: 'some text',
      user: {
        id: '1',
        username: 'username',
        avatar: Avatar,
      },
    },
    2: {
      id: '2',
      text: 'some text',
      user: {
        id: '2',
        username: 'admin',
        avatar: Avatar,
      },
    },
  },
};

export const Default: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({
    articleDetailsComments: data,
  })],
};

export const Loading: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({
    articleDetailsComments: { ...data, isLoading: true },
  })],
};
