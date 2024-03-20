import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AddCommentFormDeprecated } from './AddCommentFormDeprecated';

const meta: Meta<typeof AddCommentFormDeprecated> = {
  title: 'features/deprecated/AddCommentForm',
  component: AddCommentFormDeprecated,
};

export default meta;

type Story = StoryObj<typeof AddCommentFormDeprecated>;

export const Default: Story = {
  decorators: [
    StoreDecorator({
      addCommentForm: {
        text: 'some text',
        error: undefined,
      },
    }),
  ],
};
