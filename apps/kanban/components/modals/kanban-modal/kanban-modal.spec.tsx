import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { KanbanModal } from './kanban-modal';

describe('KanbanModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <KanbanModal type="example">
          <KanbanModal.Title>Example Title</KanbanModal.Title>
          <button>Focusable Button</button>
        </KanbanModal>
      </StoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
