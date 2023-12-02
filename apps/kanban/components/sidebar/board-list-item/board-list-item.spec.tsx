import { render } from '@testing-library/react';

import { BoardListItem } from './board-list-item';

describe('BoardListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BoardListItem id="example-id" variant="selected" label="Example Value" />
    );
    expect(baseElement).toBeTruthy();
  });
});
