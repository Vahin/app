import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card/padding',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Padding0: Story = {
  args: {
    children: 'Text',
    padding: '0',
  },
};

export const Padding4: Story = {
  args: {
    ...Padding0.args,
    padding: '4',
  },
};

export const Padding8: Story = {
  args: {
    ...Padding0.args,
    padding: '8',
  },
};

export const Padding12: Story = {
  args: {
    ...Padding0.args,
    padding: '12',
  },
};

export const Padding16: Story = {
  args: {
    ...Padding0.args,
    padding: '16',
  },
};

export const Padding20: Story = {
  args: {
    ...Padding0.args,
    padding: '20',
  },
};

export const Padding24: Story = {
  args: {
    ...Padding0.args,
    padding: '24',
  },
};
