import type { Meta, StoryObj } from '@storybook/react';
import { SubtaskCheckbox } from './subtask-checkbox';

const meta: Meta<typeof SubtaskCheckbox> = {
  component: SubtaskCheckbox,
  title: 'SubtaskCheckbox',
  decorators: [
    (Story) => (
      <div className="max-w-[200px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SubtaskCheckbox>;

export const Unchecked: Story = {
  args: {
    subtask: {
      completed: false,
      title: 'Example Task',
      subtaskId: -1,
    },
  },
};

export const Checked: Story = {
  args: {
    subtask: {
      completed: true,
      title: 'Example Task',
      subtaskId: -1,
    },
  },
};

export const UncheckedMultiline: Story = {
  args: {
    subtask: {
      completed: false,
      title: 'A Big Brown Fox Jumped Over A Lazy Dog',
      subtaskId: -1,
    },
  },
};

export const CheckedMultiline: Story = {
  args: {
    subtask: {
      completed: false,
      title: 'A Big Brown Fox Jumped Over A Lazy Dog',
      subtaskId: -1,
    },
  },
};
