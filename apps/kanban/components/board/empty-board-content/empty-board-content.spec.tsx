import { render } from '@testing-library/react';

import { EmptyBoardContent } from './empty-board-content';

describe('EmptyBoardContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyBoardContent />);
    expect(baseElement).toBeTruthy();
  });
});
