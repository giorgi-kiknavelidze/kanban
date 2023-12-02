import { render } from '@testing-library/react';

import { SidebarOpen } from './sidebar-open';

describe('SidebarOpen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarOpen />);
    expect(baseElement).toBeTruthy();
  });
});
