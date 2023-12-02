import { render } from '@testing-library/react';

import { ColumnContent } from './column-content';
import { StoreProvider } from '../../../providers';

describe('ColumnContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <ColumnContent
          column={{
            title: 'Example Column',
            columnId: 20,
            tasks: [1],
          }}
        />
        ,
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
