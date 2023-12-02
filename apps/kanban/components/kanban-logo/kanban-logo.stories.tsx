import type { Meta, StoryObj } from '@storybook/react';
import { KanbanLogo } from './kanban-logo';

const meta: Meta<typeof KanbanLogo> = {
  component: KanbanLogo,
  title: 'KanbanLogo',
};
export default meta;
type Story = StoryObj<typeof KanbanLogo>;

export const Primary: Story = {
  args: {},
};
