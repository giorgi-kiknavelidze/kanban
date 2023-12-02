import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { SidebarRoot } from './sidebar-root';

describe('SidebarRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <SidebarRoot />
      </StoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
