import { render } from '@testing-library/react';

import { MultiTextField } from './multi-text-field';

describe('MultiTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MultiTextField
        items={[
          {
            id: 'input-1',
            placeholder: 'Example Placeholder 1',
            defaultValue: 'Basic Default Value 1',
            value: 'input-1',
          },
          {
            id: 'input-2',
            placeholder: 'Example Placeholder 2',
            defaultValue: 'Basic Default Value 2',
            value: 'input-2',
          },
        ]}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
