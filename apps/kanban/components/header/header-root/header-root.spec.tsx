import { render } from '@testing-library/react';

import { HeaderRoot } from './header-root';
import { StoreProvider } from '../../../providers';

describe('HeaderRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <HeaderRoot />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
