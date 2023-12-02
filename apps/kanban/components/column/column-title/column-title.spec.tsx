import { render } from '@testing-library/react';

import { ColumnTitle } from './column-title';

describe('ColumnTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ColumnTitle title="example" itemCount={2} />
    );
    expect(baseElement).toBeTruthy();
  });
});
