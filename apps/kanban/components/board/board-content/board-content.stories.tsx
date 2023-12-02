import type { Meta, StoryObj } from '@storybook/react';
import { BoardContent } from './board-content';

const meta: Meta<typeof BoardContent> = {
  component: BoardContent,
  title: 'BoardContent',
};
export default meta;
type Story = StoryObj<typeof BoardContent>;

export const Primary: Story = {
  args: {},
};
