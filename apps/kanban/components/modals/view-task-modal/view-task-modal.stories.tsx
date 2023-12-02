import type { Meta, StoryObj } from '@storybook/react';
import { MultiModalShower } from '../../../storybook-utils/multi-modal-shower';
import { ViewTaskModal } from './view-task-modal';

const meta: Meta<typeof ViewTaskModal> = {
  component: ViewTaskModal,
  title: 'ViewTaskModal',

  decorators: [
    (Story) => (
      <>
        <MultiModalShower
          items={[
            {
              modalInput: {
                type: 'view-task',
                columnId: 1,
                taskId: 2,
              },
              label: 'Show Primary Variant',
            },
          ]}
        />
        <Story />
      </>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ViewTaskModal>;

export const Primary: Story = {
  args: {},
};
