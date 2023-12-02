'use client';
import { kanbanSlice } from '@kanban/kanban-redux';
import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectedBoardSelector } from '../../../selectors';
import { BoardContent } from '../board-content';

export const BoardRoot = () => {
  const dispatch = useAppDispatch();
  const selectedBoard = useAppSelector(selectedBoardSelector);

  const openAddColumnModal = useCallback(() => {
    dispatch(
      kanbanSlice.actions.columnCreated({
        title: 'New Column',
        boardId: selectedBoard?.boardId ?? -1,
      }),
    );
  }, [dispatch, selectedBoard?.boardId]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;
      const oldColumnId = Number(result.source.droppableId);
      const newColumnId = Number(result.destination.droppableId);
      const taskId = Number(result.draggableId);

      dispatch(
        kanbanSlice.actions.taskMoved({
          oldColumnId,
          newColumnId,
          taskId,
          newIndex: result.destination.index,
        }),
      );
    },
    [dispatch],
  );

  return (
    <BoardContent
      onAddNewColumnClick={openAddColumnModal}
      onDragEnd={onDragEnd}
    />
  );
};
