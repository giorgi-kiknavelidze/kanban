import { render } from '@testing-library/react';

import { Switch } from './switch';

describe('Switch', () => {
  it('should render successfully with "left"', () => {
    const { baseElement } = render(<Switch value="left" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with "right"', () => {
    const { baseElement } = render(<Switch value="right" />);
    expect(baseElement).toBeTruthy();
  });
});
