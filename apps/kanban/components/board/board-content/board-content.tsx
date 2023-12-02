'use client';
import { clsx } from 'clsx';
import { Dispatch, useMemo } from 'react';
import { useAppSelector } from '../../../hooks';
import {
  columnSelector,
  popoverSelector,
  selectedBoardSelector,
} from '../../../selectors';
import { ColumnContent, NewColumnButton } from '../../column';
import { EmptyBoardContent } from '../empty-board-content';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';

export interface BoardContentProps {
  onAddNewColumnClick?: Dispatch<void>;
  onDragEnd?: OnDragEndResponder;
}

export const BoardContent = ({
  onAddNewColumnClick,
  onDragEnd,
}: BoardContentProps) => {
  const selectedBoard = useAppSelector(selectedBoardSelector);

  const isEmpty = useMemo(
    () => !selectedBoard?.columns.length,
    [selectedBoard?.columns.length],
  );

  const currentPopover = useAppSelector(popoverSelector);
  const columns = useAppSelector(columnSelector);

  return (
    <div
      className={clsx(
        'flex w-full h-full gap-6 overflow-x-auto bg-kb-light-bg dark:bg-kb-dark-bg relative p-6',
        isEmpty && 'items-center justify-center',
      )}
    >
      <>
        {currentPopover && (
          <div className="fixed inset-0 bg-black opacity-50" />
        )}
        {isEmpty ? (
          <EmptyBoardContent onAddNewColumnClick={onAddNewColumnClick} />
        ) : (
          <DragDropContext onDragEnd={onDragEnd ?? function () {}}>
            {columns.map((column) => (
              <ColumnContent column={column} key={column.columnId} />
            ))}
            <NewColumnButton onClick={onAddNewColumnClick} />
          </DragDropContext>
        )}
      </>
    </div>
  );
};
