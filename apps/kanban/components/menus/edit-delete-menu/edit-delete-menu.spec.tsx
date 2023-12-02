import { render } from '@testing-library/react';

import { EditDeleteMenu } from './edit-delete-menu';

describe('EditDeleteMenu', () => {
  it('should render successfully with board variant', () => {
    const { baseElement } = render(<EditDeleteMenu variant="board" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with task variant', () => {
    const { baseElement } = render(<EditDeleteMenu variant="task" />);
    expect(baseElement).toBeTruthy();
  });
});
