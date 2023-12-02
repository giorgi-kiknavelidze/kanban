import { KanbanBoardNormalized } from '@kanban/kanban-redux';
import { Dictionary, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectedBoardSelector = createSelector(
  (state: RootState) => state.kanban.selectedBoardId,
  (state: RootState) => state.kanban.boards.entities,
  (selectedBoardId: number, boardEntities: Dictionary<KanbanBoardNormalized>) =>
    boardEntities[selectedBoardId],
);
