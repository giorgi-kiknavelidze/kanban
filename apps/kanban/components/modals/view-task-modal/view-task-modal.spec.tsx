import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { ViewTaskModal } from './view-task-modal';

describe('ViewTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <ViewTaskModal />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
