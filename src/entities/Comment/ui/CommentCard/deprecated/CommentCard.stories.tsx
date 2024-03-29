import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/shared/assets/test/medoed.jpeg';
import { CommentType } from '../../../model/types/comment';
import { CommentCardDeprecated } from './CommentCardDeprecated';

const meta: Meta<typeof CommentCardDeprecated> = {
  title: 'entities/deprecated/CommentCard',
  component: CommentCardDeprecated,
};

export default meta;

type Story = StoryObj<typeof CommentCardDeprecated>;

const comment: CommentType = {
  id: '1',
  text: 'test case',
  user: {
    id: '1',
    username: 'Username',
    avatar: Avatar,
  },
};

export const Default: Story = {
  args: {
    comment,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
