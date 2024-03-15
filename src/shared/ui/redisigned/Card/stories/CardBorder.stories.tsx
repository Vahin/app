import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card/border',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const BorderNormal: Story = {
  args: {
    children: 'Text',
    border: 'normal',
  },
};

export const BorderRound: Story = {
  args: {
    ...BorderNormal.args,
    border: 'round',
  },
};

export const BorderMedium: Story = {
  args: {
    ...BorderNormal.args,
    border: 'medium',
  },
};
