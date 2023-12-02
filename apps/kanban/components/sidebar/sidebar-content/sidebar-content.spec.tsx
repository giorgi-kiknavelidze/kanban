import { render } from '@testing-library/react';

import 'matchmedia';
import { StoreProvider } from '../../../providers';
import { SidebarContent } from './sidebar-content';

describe('SidebarContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <SidebarContent
          boardListItems={[
            { boardId: 0, title: 'First board' },
            { boardId: 1, title: 'Second board' },
            { boardId: 2, title: 'Third board' },
          ]}
          selectedBoardListItemId={0}
        />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
