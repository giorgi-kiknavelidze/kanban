import { render } from '@testing-library/react';

import { Dropdown } from './dropdown';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dropdown
        selectedId={0}
        selectableOptions={[
          { id: 0, label: 'Todo' },
          { id: 1, label: 'Doing' },
          { id: 2, label: 'Done' },
        ]}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
