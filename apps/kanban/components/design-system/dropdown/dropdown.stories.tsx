import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Dropdown',
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    selectedId: 1,
    selectableOptions: [
      { id: 1, label: 'Todo' },
      { id: 2, label: 'Doing' },
      { id: 3, label: 'Done' },
    ],
  },
};
