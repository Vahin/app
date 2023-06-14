import type { Meta, StoryObj } from '@storybook/react';
import { [FTName] } from './[FTName]';

const meta: Meta<typeof [FTName]> = {
  title: 'shared/[FTName]',
  component: [FTName],
};

export default meta;

type Story = StoryObj<typeof [FTName]>;

export const Default: Story = {}