import type { Meta, StoryObj } from '@storybook/react';
import { BoardList } from './board-list';

const meta: Meta<typeof BoardList> = {
  component: BoardList,
  title: 'BoardList',
};
export default meta;
type Story = StoryObj<typeof BoardList>;

export const Primary: Story = {
  args: {
    items: [
      { boardId: 0, title: 'First board' },
      { boardId: 1, title: 'Second board' },
      { boardId: 2, title: 'Third board' },
    ],
    selectedItemId: 0,
  },
};
