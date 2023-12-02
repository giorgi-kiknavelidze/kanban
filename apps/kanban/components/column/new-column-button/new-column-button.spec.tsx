import { render } from '@testing-library/react';

import { NewColumnButton } from './new-column-button';

describe('NewColumnButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewColumnButton />);
    expect(baseElement).toBeTruthy();
  });
});
