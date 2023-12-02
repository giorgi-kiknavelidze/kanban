import type { Meta, StoryObj } from '@storybook/react';
import { MobileMenu } from './mobile-menu';

const meta: Meta<typeof MobileMenu> = {
  component: MobileMenu,
  title: 'MobileMenu',
};
export default meta;
type Story = StoryObj<typeof MobileMenu>;

export const Primary: Story = {
  args: {},
};
