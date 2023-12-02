import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Left: Story = {
  args: {
    value: 'left',
  },
};

export const Right: Story = {
  args: {
    value: 'right',
  },
};
