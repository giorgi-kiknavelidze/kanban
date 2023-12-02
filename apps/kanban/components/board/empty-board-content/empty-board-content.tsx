'use client';
import { Dispatch } from 'react';
import { Button } from '../../design-system';

export interface EmptyBoardContentProps {
  onAddNewColumnClick?: Dispatch<void>;
}

export const EmptyBoardContent = ({
  onAddNewColumnClick,
}: EmptyBoardContentProps) => (
  <div className="flex flex-col gap-8 items-center">
    <p className="text-center text-kb-medium-gray tp-heading-l">
      This board is empty. Create a new column to get started.
    </p>
    <Button variant="primary-l" onClick={() => onAddNewColumnClick?.()}>
      + Add New Column
    </Button>
  </div>
);
