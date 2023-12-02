import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryL: Story = {
  args: {
    variant: 'primary-l',
    children: 'Button Primary (L)',
  },
};

export const PrimaryS: Story = {
  args: {
    variant: 'primary-s',
    children: 'Button Primary (S)',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};
