import type { Meta, StoryObj } from '@storybook/react';
import { HideSidebar } from './hide-sidebar';

const meta: Meta<typeof HideSidebar> = {
  component: HideSidebar,
  title: 'HideSidebar',
};
export default meta;
type Story = StoryObj<typeof HideSidebar>;

export const Primary: Story = {
  args: {},
};
