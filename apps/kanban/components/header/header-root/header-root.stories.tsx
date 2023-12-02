import type { Meta, StoryObj } from '@storybook/react';
import { HeaderRoot } from './header-root';

const meta: Meta<typeof HeaderRoot> = {
  component: HeaderRoot,
  title: 'HeaderRoot',
};
export default meta;
type Story = StoryObj<typeof HeaderRoot>;

export const Primary: Story = {
  args: {},
};
