import type { Meta, StoryObj } from '@storybook/react';
import { SidebarOpen } from './sidebar-open';

const meta: Meta<typeof SidebarOpen> = {
  component: SidebarOpen,
  title: 'SidebarOpen',
};
export default meta;
type Story = StoryObj<typeof SidebarOpen>;

export const Primary: Story = {
  args: {},
};
