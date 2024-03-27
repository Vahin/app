import type { Meta, StoryObj } from '@storybook/react';
import { Appimage } from './Appimage';
import Image from '@/shared/assets/test/ok-image-16-9.png';
import ErrorImage from '@/shared/assets/test/error-image-16-9.png';

const meta: Meta<typeof Appimage> = {
  title: 'shared/Appimage',
  component: Appimage,
};

export default meta;

type Story = StoryObj<typeof Appimage>;

export const Default: Story = {
  args: {
    src: Image,
  },
};

export const Error: Story = {
  args: {
    src: '',
    errorFallback: <img src={ErrorImage} alt='error' />,
  },
};
