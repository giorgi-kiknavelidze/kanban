import { render } from '@testing-library/react';

import { MobileMenu } from './mobile-menu';
import { StoreProvider } from '../../../providers';

describe('MobileMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <MobileMenu />
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
