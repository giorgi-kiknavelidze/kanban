import type { Meta, StoryObj } from '@storybook/react';
import { EmptyBoardContent } from './empty-board-content';

const meta: Meta<typeof EmptyBoardContent> = {
  component: EmptyBoardContent,
  title: 'EmptyBoardContent',
};
export default meta;
type Story = StoryObj<typeof EmptyBoardContent>;

export const Primary: Story = {
  args: {},
};
