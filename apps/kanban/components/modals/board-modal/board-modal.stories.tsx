import type { Meta, StoryObj } from '@storybook/react';
import { MultiModalShower } from '../../../storybook-utils/multi-modal-shower';
import { BoardModal } from './board-modal';

const meta: Meta<typeof BoardModal> = {
  component: BoardModal,
  title: 'BoardModal',
  decorators: [
    (Story) => (
      <>
        <MultiModalShower
          items={[
            {
              modalInput: {
                type: 'board',
                option: 'add',
              },
              label: 'Show Add Variant',
            },
            {
              modalInput: {
                type: 'board',
                option: 'edit',
              },
              label: 'Show Edit Variant',
            },
          ]}
        />
        <Story />
      </>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof BoardModal>;

export const Primary: Story = {
  args: {},
};
