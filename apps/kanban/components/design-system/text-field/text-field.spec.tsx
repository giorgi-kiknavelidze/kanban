import { render } from '@testing-library/react';

import { TextField } from './text-field';

describe('TextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextField />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with errorMessage', () => {
    const { baseElement } = render(<TextField errorMessage="Example Error" />);
    expect(baseElement).toBeTruthy();
  });
});
