import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { KanbanSubtask } from '@kanban/kanban-redux';

export const subtasksSelectorFactory = (taskId: number) =>
  createSelector(
    (state: RootState) => state.kanban.tasks.entities,
    (state: RootState) => state.kanban.subtasks.entities,
    (taskEntities, subtaskEntities) => {
      const subtaskIds = taskEntities[taskId]?.subtasks;
      return (
        subtaskIds
          ?.map((subTaskId) => subtaskEntities[subTaskId])
          .filter(
            (subtaskNormalized): subtaskNormalized is KanbanSubtask =>
              subtaskNormalized !== undefined,
          ) ?? []
      );
    },
  );
