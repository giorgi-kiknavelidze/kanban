import { render } from '@testing-library/react';

import { StoreProvider } from '../../../providers';
import { DeleteModal } from './delete-modal';

describe('DeleteDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <DeleteModal />
      </StoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
