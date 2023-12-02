import type { Meta, StoryObj } from '@storybook/react';
import { EditDeleteMenu } from './edit-delete-menu';

const meta: Meta<typeof EditDeleteMenu> = {
  component: EditDeleteMenu,
  title: 'EditDeleteMenu',
  decorators: [
    (Story) => (
      <div className="pl-96">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof EditDeleteMenu>;

export const Board: Story = {
  args: {
    variant: 'board',
  },
};

export const Task: Story = {
  args: {
    variant: 'task',
  },
};
