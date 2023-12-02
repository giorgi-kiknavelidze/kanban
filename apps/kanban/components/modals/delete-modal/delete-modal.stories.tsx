import type { Meta, StoryObj } from '@storybook/react';
import { MultiModalShower } from '../../../storybook-utils/multi-modal-shower';
import { DeleteModal } from './delete-modal';

const meta: Meta<typeof DeleteModal> = {
  component: DeleteModal,
  title: 'DeleteModal',
  decorators: [
    (Story) => (
      <>
        <MultiModalShower
          items={[
            {
              modalInput: {
                type: 'delete',
                whatToDelete: 'board',
                name: 'Example',
                boardId: 1,
              },
              label: 'Show Board Variant',
            },
            {
              modalInput: {
                type: 'delete',
                whatToDelete: 'task',
                name: 'Example',
                columnId: -1,
                taskId: -1,
              },
              label: 'Show Task Variant',
            },
          ]}
        />
        <Story />
      </>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof DeleteModal>;

export const Primary: Story = {
  args: {},
};
