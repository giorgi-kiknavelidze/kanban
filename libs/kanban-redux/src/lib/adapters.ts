import { createEntityAdapter } from '@reduxjs/toolkit';
import {
  KanbanBoardNormalized,
  KanbanColumnNormalized,
  KanbanTaskNormalized,
  KanbanSubtask,
} from './types';

export const boardAdapter = createEntityAdapter<KanbanBoardNormalized>({
  selectId: (board) => board.boardId,
});

export const columnAdapter = createEntityAdapter<KanbanColumnNormalized>({
  selectId: (column) => column.columnId,
});

export const taskAdapter = createEntityAdapter<KanbanTaskNormalized>({
  selectId: (task) => task.taskId,
});

export const subtaskAdapter = createEntityAdapter<KanbanSubtask>({
  selectId: (subtask) => subtask.subtaskId,
});
