import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { KanbanTaskNormalized } from '@kanban/kanban-redux';

export const tasksSelectorFactory = (columnId: number) =>
  createSelector(
    (state: RootState) => state.kanban.columns.entities,
    (state: RootState) => state.kanban.tasks.entities,
    (columnEntities, taskEntities) => {
      const taskIds = columnEntities[columnId]?.tasks;
      return (
        taskIds
          ?.map((taskId) => taskEntities[taskId])
          .filter(
            (taskNormalized): taskNormalized is KanbanTaskNormalized =>
              taskNormalized !== undefined,
          ) ?? []
      );
    },
  );
