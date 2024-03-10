import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card/variant',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    children: 'Text',
  },
};

export const Outlined: Story = {
  args: {
    ...Normal.args,
    variant: 'outlined',
  },
};

export const Light: Story = {
  args: {
    ...Normal.args,
    variant: 'light',
  },
};
