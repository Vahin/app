import type { Meta, StoryObj } from '@storybook/react';
import { AppimageWrapper } from './AppimageWrapper';
import Image from '@/shared/assets/test/ImageTest.png';
import { RedisignDecorator } from '@/shared/config/storybook/RedisignDecorator/RedisignDecorator';
import cls from './AppimageWrapper.module.scss';

const meta: Meta<typeof AppimageWrapper> = {
  title: 'shared/AppimageWrapper',
  component: AppimageWrapper,
  decorators: [RedisignDecorator],
};

export default meta;

type Story = StoryObj<typeof AppimageWrapper>;

export const Default: Story = {
  args: {
    src: Image,
    classNameContainer: cls.containerStorybook,
  },
};

export const HorizontalCover: Story = {
  args: {
    ...Default.args,
    ratio: 'horizontal',
  },
};

export const HorizontalWideCover: Story = {
  args: {
    ...Default.args,
    ratio: 'horizontal-wide',
  },
};

export const VerticalCover: Story = {
  args: {
    ...Default.args,
    ratio: 'vertical',
  },
};

export const VerticalWideCover: Story = {
  args: {
    ...Default.args,
    ratio: 'vertical-wide',
  },
};

export const HorizontalContain: Story = {
  args: {
    ...Default.args,
    ratio: 'horizontal',
    objectFit: 'contain',
  },
};

export const HorizontalWideContain: Story = {
  args: {
    ...Default.args,
    ratio: 'horizontal-wide',
    objectFit: 'contain',
  },
};

export const VerticalContain: Story = {
  args: {
    ...Default.args,
    ratio: 'vertical',
    objectFit: 'contain',
  },
};

export const VerticalWideContain: Story = {
  args: {
    ...Default.args,
    ratio: 'vertical-wide',
    objectFit: 'contain',
  },
};
