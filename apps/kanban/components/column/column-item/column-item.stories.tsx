import type { Meta, StoryObj } from '@storybook/react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ColumnItem } from './column-item';

const meta: Meta<typeof ColumnItem> = {
  component: ColumnItem,
  title: 'ColumnItem',
  decorators: [
    (Story) => (
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="1">{() => <Story />}</Droppable>
      </DragDropContext>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ColumnItem>;

export const Primary: Story = {
  args: {
    task: {
      taskId: 1,
      title: 'Example Item',
      description: 'Example Description',
      subtasks: [],
    },
    columnId: -1,
  },
};
