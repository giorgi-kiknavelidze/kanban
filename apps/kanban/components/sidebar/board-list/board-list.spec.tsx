import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { BoardList } from './board-list';

describe('BoardList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <BoardList
          items={[
            { boardId: 0, title: 'First board' },
            { boardId: 1, title: 'Second board' },
            { boardId: 2, title: 'Third board' },
          ]}
          selectedItemId={0}
        />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
