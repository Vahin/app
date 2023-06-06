import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorum possimus voluptatem, fuga saepe laboriosam repellendus soluta non excepturi recusandae.',
  },
};

export const DefaultError: Story = {
  args: {
    ...Default.args,
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyTitleError: Story = {
  args: {
    ...OnlyTitle.args,
    theme: TextTheme.ERROR,
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorum possimus voluptatem, fuga saepe laboriosam repellendus soluta non excepturi recusandae.',
  },
};

export const OnlyTextError: Story = {
  args: {
    ...OnlyText.args,
    theme: TextTheme.ERROR,
  },
};
