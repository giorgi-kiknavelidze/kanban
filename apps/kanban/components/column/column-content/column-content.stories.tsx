import type { Meta, StoryObj } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';
import { ColumnContent } from './column-content';

const meta: Meta<typeof ColumnContent> = {
  component: ColumnContent,
  title: 'ColumnContent',
  decorators: [
    (Story) => (
      <DragDropContext onDragEnd={() => {}}>
        <Story />
      </DragDropContext>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ColumnContent>;

export const Primary: Story = {
  args: {
    column: {
      title: 'Example Column',
      columnId: 20,
      tasks: [],
    },
  },
};
