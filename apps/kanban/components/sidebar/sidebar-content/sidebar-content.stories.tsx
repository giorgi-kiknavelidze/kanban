import type { Meta, StoryObj } from '@storybook/react';
import { SidebarContent } from './sidebar-content';

const meta: Meta<typeof SidebarContent> = {
  component: SidebarContent,
  title: 'SidebarContent',
};
export default meta;
type Story = StoryObj<typeof SidebarContent>;

export const Primary: Story = {
  args: {
    boardListItems: [
      { boardId: 0, title: 'First board' },
      { boardId: 1, title: 'Second board' },
      { boardId: 2, title: 'Third board' },
    ],
    selectedBoardListItemId: 0,
  },
  decorators: [
    (Story) => (
      <div className="h-[64rem]">
        <Story />
      </div>
    ),
  ],
};
