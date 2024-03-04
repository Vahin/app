import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link to',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    ...meta.args,
    variant: 'primary',
  },
};

export const Cancel: Story = {
  args: {
    ...Primary.args,
    variant: 'red',
  },
};
