import type { Meta, StoryObj } from '@storybook/react';
import { MultiSubtaskCheckbox } from './multi-subtask-checkbox';

const meta: Meta<typeof MultiSubtaskCheckbox> = {
  component: MultiSubtaskCheckbox,
  title: 'MultiSubtaskCheckbox',
};
export default meta;
type Story = StoryObj<typeof MultiSubtaskCheckbox>;

export const Primary: Story = {
  args: {
    subtasks: [
      {
        subtaskId: 1,
        completed: true,
        title: 'Example',
      },
      {
        subtaskId: 2,
        completed: false,
        title: 'False Example',
      },
    ],
  },
};
