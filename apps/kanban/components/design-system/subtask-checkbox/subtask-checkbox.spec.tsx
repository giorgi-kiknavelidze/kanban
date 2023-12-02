import { render } from '@testing-library/react';

import { SubtaskCheckbox } from './subtask-checkbox';

describe('SubtaskCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SubtaskCheckbox
        subtask={{
          subtaskId: 1,
          completed: true,
          title: 'Example',
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
