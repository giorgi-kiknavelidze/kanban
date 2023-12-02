import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { BoardRoot } from './board-root';

describe('BoardRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <BoardRoot />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
