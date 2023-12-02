import { render } from '@testing-library/react';

import { MultiSubtaskCheckbox } from './multi-subtask-checkbox';

describe('MultiSubtaskCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MultiSubtaskCheckbox
        subtasks={[
          {
            subtaskId: 1,
            completed: true,
            title: 'Example',
          },
          {
            subtaskId: 2,
            completed: true,
            title: 'Example',
          },
        ]}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
