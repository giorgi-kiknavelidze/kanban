import { render } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  describe('primary-l', () => {
    it('should render successfully', () => {
      const { baseElement } = render(<Button variant="primary-l" />);
      expect(baseElement).toBeTruthy();
    });
  });

  describe('primary-s', () => {
    it('should render successfully', () => {
      const { baseElement } = render(<Button variant="primary-s" />);
      expect(baseElement).toBeTruthy();
    });
  });

  describe('secondary', () => {
    it('should render successfully', () => {
      const { baseElement } = render(<Button variant="secondary" />);
      expect(baseElement).toBeTruthy();
    });
  });

  describe('destructive', () => {
    it('should render successfully', () => {
      const { baseElement } = render(<Button variant="destructive" />);
      expect(baseElement).toBeTruthy();
    });
  });
});
