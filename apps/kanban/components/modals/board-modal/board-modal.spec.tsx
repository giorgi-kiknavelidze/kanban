import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { BoardModal } from './board-modal';

describe('BoardModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <BoardModal />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
