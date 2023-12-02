import type { Meta, StoryObj } from '@storybook/react';
import { DarkModeSwitch } from './dark-mode-switch';

const meta: Meta<typeof DarkModeSwitch> = {
  component: DarkModeSwitch,
  title: 'DarkModeSwitch',
};
export default meta;
type Story = StoryObj<typeof DarkModeSwitch>;

export const Primary: Story = {
  args: {},
};
