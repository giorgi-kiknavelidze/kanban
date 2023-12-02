import { render } from '@testing-library/react';

import { KanbanLogo } from './kanban-logo';

describe('KanbanLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KanbanLogo />);
    expect(baseElement).toBeTruthy();
  });
});
