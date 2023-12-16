import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TabItem, Tabs, TabsProps } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabs: TabItem[] = [
  {
    value: 'tab 1',
    content: 'tab 1',
  },
  {
    value: 'tab 2',
    content: 'tab 2',
  },
  {
    value: 'tab 3',
    content: 'tab 3',
  },
];

export const Default: Story = {
  args: {
    tabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
  },
};
