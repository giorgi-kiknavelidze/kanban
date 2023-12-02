import type { Meta, StoryObj } from '@storybook/react';
import { MultiTextField } from './multi-text-field';

const meta: Meta<typeof MultiTextField> = {
  component: MultiTextField,
  title: 'MultiTextField',
};
export default meta;
type Story = StoryObj<typeof MultiTextField>;

export const Primary: Story = {
  args: {
    items: [
      {
        id: 'input-1',
        placeholder: 'Example Placeholder 1',
        defaultValue: 'Basic Default Value 1',
        value: 'input-1',
      },
      {
        id: 'input-2',
        placeholder: 'Example Placeholder 2',
        defaultValue: 'Basic Default Value 2',
        value: 'input-2',
      },
    ],
  },
};
