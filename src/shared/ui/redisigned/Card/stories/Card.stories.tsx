import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Text',
  },
};

export const InlineBox: Story = {
  args: {
    ...Default.args,
    inlineBlock: true,
  },
};
