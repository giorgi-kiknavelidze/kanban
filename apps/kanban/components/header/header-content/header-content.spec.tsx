import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { HeaderContent } from './header-content';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <HeaderContent boardLabel="Example Label" withKanbanLogo={false} />
      </StoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
