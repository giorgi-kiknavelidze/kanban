import type { Meta, StoryObj } from '@storybook/react';
import { NewColumnButton } from './new-column-button';

const meta: Meta<typeof NewColumnButton> = {
  component: NewColumnButton,
  title: 'NewColumnButton',
  decorators: [
    (Story) => (
      <div className="h-[50rem]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof NewColumnButton>;

export const Primary: Story = {
  args: {},
};
