import type { Meta, StoryObj } from '@storybook/react';
import Avatar from 'shared/assets/test/medoed.jpeg';
import { CommentType } from '../../model/types/comment';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
};

export default meta;

type Story = StoryObj<typeof CommentList>;

const comments: CommentType[] = [{
  id: '1',
  text: 'test 1',
  user: {
    id: '1',
    username: 'Username',
    avatar: Avatar,
  },
}, {
  id: '2',
  text: 'test 2',
  user: {
    id: '2',
    username: 'Admin',
    avatar: Avatar,
  },
}, {
  id: '1',
  text: 'test 3',
  user: {
    id: '1',
    username: 'Username',
    avatar: Avatar,
  },
}];

export const Default: Story = {
  args: {
    comments,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
