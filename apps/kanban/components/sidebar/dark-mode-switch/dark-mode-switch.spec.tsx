import { render } from '@testing-library/react';
import 'matchmedia';

import { DarkModeSwitch } from './dark-mode-switch';

describe('DarkModeSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkModeSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
