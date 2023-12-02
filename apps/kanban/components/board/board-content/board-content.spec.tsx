import { render } from '@testing-library/react';

import { BoardContent } from './board-content';
import { StoreProvider } from '../../../providers';

describe('BoardContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <BoardContent />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
