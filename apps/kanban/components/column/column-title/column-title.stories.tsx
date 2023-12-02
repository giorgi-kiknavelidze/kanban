import type { Meta, StoryObj } from '@storybook/react';
import { ColumnTitle } from './column-title';

const meta: Meta<typeof ColumnTitle> = {
  component: ColumnTitle,
  title: 'ColumnTitle',
};
export default meta;
type Story = StoryObj<typeof ColumnTitle>;

export const Primary: Story = {
  args: { title: 'TODO', itemCount: 2 },
};
