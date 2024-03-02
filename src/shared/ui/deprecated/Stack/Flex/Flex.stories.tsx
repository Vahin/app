import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>FLEX</div>
        <div>FLEX</div>
        <div>FLEX</div>
        <div>FLEX</div>
      </>
    ),
  },
};

export const Gap0: Story = {
  args: {
    ...Default.args,
  },
};

export const Gap4: Story = {
  args: {
    ...Default.args,
    gap: '4',
  },
};

export const Gap8: Story = {
  args: {
    ...Default.args,
    gap: '8',
  },
};

export const Gap16: Story = {
  args: {
    ...Default.args,
    gap: '16',
  },
};

export const Gap32: Story = {
  args: {
    ...Default.args,
    gap: '32',
  },
};

export const JustifyStart: Story = {
  args: {
    ...Default.args,
  },
};

export const JustifyCenter: Story = {
  args: {
    ...Default.args,
    justify: 'center',
  },
};

export const JustifySpaceBetween: Story = {
  args: {
    ...Default.args,
    justify: 'spaceBetween',
  },
};

export const JustifyEnd: Story = {
  args: {
    ...Default.args,
    justify: 'flexEnd',
  },
};

export const AlignStart: Story = {
  args: {
    ...Default.args,
    align: 'start',
  },
};

export const AlignCenter: Story = {
  args: {
    ...Default.args,
    align: 'center',
  },
};

export const AlignEnd: Story = {
  args: {
    ...Default.args,
    align: 'end',
  },
};

export const DirectionRow: Story = {
  args: {
    ...Default.args,
    direction: 'row',
  },
};

export const DirectionRowReverse: Story = {
  args: {
    ...Default.args,
    direction: 'rowReverse',
  },
};

export const DirectionColumn: Story = {
  args: {
    ...Default.args,
    direction: 'column',
  },
};

export const DirectionColumnReverse: Story = {
  args: {
    ...Default.args,
    direction: 'columReverse',
  },
};
