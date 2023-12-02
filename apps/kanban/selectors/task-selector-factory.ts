import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const taskSelectorFactory = (taskId: number) =>
  createSelector(
    (state: RootState) => state.kanban.tasks.entities,
    (entities) => entities[taskId],
  );
