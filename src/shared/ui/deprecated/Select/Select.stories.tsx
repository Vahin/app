import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/deprecated/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Label',
    options: [
      {
        content: 'option 1',
        value: 'o1',
      },
      {
        content: 'option 2',
        value: 'o2',
      },
      {
        content: 'option 3',
        value: 'o3',
      },
    ],
  },
};
