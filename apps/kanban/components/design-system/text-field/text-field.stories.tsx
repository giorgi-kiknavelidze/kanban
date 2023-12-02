import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './text-field';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Input: Story = {
  args: { placeholder: 'Enter Task Name' },
};

export const InputWithErrorMessage: Story = {
  args: { placeholder: 'Enter Task Name', errorMessage: 'Example Error' },
};

export const TextArea: Story = {
  args: {
    placeholder: 'Enter Task Name',
    variant: 'textarea',
  },
};
