import type { Meta, StoryObj } from '@storybook/react';
import { SidebarRoot } from './sidebar-root';

const meta: Meta<typeof SidebarRoot> = {
  component: SidebarRoot,
  title: 'SidebarRoot',
};
export default meta;
type Story = StoryObj<typeof SidebarRoot>;

export const Primary: Story = {
  args: {},
};
