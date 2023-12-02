import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { TaskModal } from './task-modal';

describe('TaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <TaskModal />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
