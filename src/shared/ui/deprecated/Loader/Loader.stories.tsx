import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/deprecated/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  render: () => <Loader />,
};
