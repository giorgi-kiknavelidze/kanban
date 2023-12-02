import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { KanbanBoardNormalized } from '@kanban/kanban-redux';

export const boardsSelector = createSelector(
  (state: RootState) => state.kanban.boards,
  (boards) =>
    boards.ids
      .map((id) => boards.entities[id])
      .filter((item): item is KanbanBoardNormalized => item !== undefined),
);
