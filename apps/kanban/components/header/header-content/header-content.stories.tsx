import type { Meta, StoryObj } from '@storybook/react';
import { HeaderContent } from './header-content';

const meta: Meta<typeof HeaderContent> = {
  component: HeaderContent,
  title: 'HeaderContent',
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof HeaderContent>;

export const WithKanbanLogo: Story = {
  args: {
    boardLabel: 'Example Kanban',
    withKanbanLogo: true,
  },
};

export const WithoutKanbanLogo: Story = {
  args: {
    boardLabel: 'Example Kanban',
    withKanbanLogo: false,
  },
};
