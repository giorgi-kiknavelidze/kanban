import type { Meta, StoryObj } from '@storybook/react';
import { BoardListItem } from './board-list-item';

const meta: Meta<typeof BoardListItem> = {
  component: BoardListItem,
  title: 'BoardListItem',
};
export default meta;
type Story = StoryObj<typeof BoardListItem>;

export const Selected: Story = {
  args: {
    label: 'Example Board',
    variant: 'selected',
  },
};

export const Unselected: Story = {
  args: {
    label: 'Example Board',
    variant: 'unselected',
  },
};

export const Add: Story = {
  args: {
    label: '+ Create New Board',
    variant: 'add',
  },
};
