'use client';
import { KanbanBoardBase, kanbanSlice } from '@kanban/kanban-redux';
import { useAppDispatch } from '../../../hooks';
import { modalSlice } from '../../../slices';
import { BoardListItem } from '../board-list-item';
import { useCallback } from 'react';

export interface BoardListProps {
  items: KanbanBoardBase[];
  selectedItemId: number;
}

export const BoardList = ({ items, selectedItemId }: BoardListProps) => {
  const dispatch = useAppDispatch();

  const onBoardClick = useCallback(() => {
    dispatch(
      modalSlice.actions.modalOpened({
        modalInput: { type: 'board', option: 'add' },
      }),
    );
  }, [dispatch]);

  const onBoardItemClick = useCallback(
    (boardId: number) => {
      dispatch(kanbanSlice.actions.boardSelected(boardId));
    },
    [dispatch],
  );

  return (
    <div className="flex flex-col gap-5">
      <span className="tp-heading-s text-kb-medium-gray pl-8">
        ALL BOARDS ({items.length})
      </span>
      <div className="flex flex-col">
        {items.map(({ boardId, title }) => (
          <BoardListItem
            key={boardId}
            id={`board-list-item-${boardId}`}
            label={title}
            variant={selectedItemId === boardId ? 'selected' : 'unselected'}
            onClick={() => onBoardItemClick(boardId)}
          />
        ))}
        <BoardListItem
          variant="add"
          id=""
          label="+ Create New Board"
          onClick={onBoardClick}
        />
      </div>
    </div>
  );
};
