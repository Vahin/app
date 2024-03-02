import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt totam animi temporibus veniam voluptates, quisquam nisi facilis natus ad maxime ipsam explicabo impedit voluptatum neque voluptate provident molestias sint aliquid. Voluptatem, molestiae obcaecati autem qui minima doloremque laboriosam rerum totam! Totam inventore in quo sed provident facere, minima qui.',
    isOpen: true,
  },
};
