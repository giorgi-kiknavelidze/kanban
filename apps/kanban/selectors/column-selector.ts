import { KanbanColumnNormalized } from '@kanban/kanban-redux';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectedBoardSelector } from './selected-board-selector';

export const columnSelector = createSelector(
  (state: RootState) => selectedBoardSelector(state)?.columns ?? [],
  (state: RootState) => state.kanban.columns.entities,
  (columnIds, entities) =>
    columnIds
      .map((columnId) => entities[columnId])
      .filter(
        (column): column is KanbanColumnNormalized => column !== undefined,
      ),
);
