import { render } from '@testing-library/react';

import { ColumnItem } from './column-item';
import { StoreProvider } from '../../../providers';

describe('ColumnItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <ColumnItem
          task={{
            taskId: 2,
            title: 'Example Item',
            description: 'Example description',
            subtasks: [],
          }}
          columnId={1}
          index={-1}
        />
        ,
      </StoreProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
