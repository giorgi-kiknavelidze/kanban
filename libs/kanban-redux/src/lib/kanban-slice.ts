import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  boardAdapter,
  columnAdapter,
  taskAdapter,
  subtaskAdapter,
} from './adapters';
import {
  KanbanBoardCreatedPayload,
  KanbanColumnCreatedPayload,
  KanbanTaskCreatedPayload,
  KanbanSubtaskCreatedPayload,
  KanbanSubTaskCompletionChangedPayload,
  KanbanBoardTitleChangedPayload,
  KanbanColumnDeletedPayload,
  KanbanColumnTitleChangedPayload,
  KanbanTaskDeletedPayload,
  KanbanSubtaskDeletedPayload,
  KanbanTaskTitleChangedPayload,
  KanbanSubtaskTitleChangedPayload,
  KanbanTaskDescriptionChangedPayload,
  KanbanTaskMovedPayload,
} from './types';
import { initialData } from './constants';
import { insertInArray } from './functions';

export const kanbanSlice = createSlice({
  name: 'Kanban',
  initialState: () => ({
    boards: boardAdapter.getInitialState(),
    columns: columnAdapter.getInitialState(),
    tasks: taskAdapter.getInitialState(),
    subtasks: subtaskAdapter.getInitialState(),
    nextId: 0,
    selectedBoardId: -1,
    isInitialized: false,
  }),

  reducers: {
    initalized(state) {
      if (state.isInitialized) return;
      initialData.boards.forEach(({ name, columns }) => {
        const boardId = state.nextId;
        kanbanSlice.caseReducers.boardCreated(
          state,
          kanbanSlice.actions.boardCreated({ title: name }),
        );

        columns.forEach(({ name, tasks }) => {
          const columnId = state.nextId;
          kanbanSlice.caseReducers.columnCreated(
            state,
            kanbanSlice.actions.columnCreated({ title: name, boardId }),
          );

          tasks.forEach(({ title, description, subtasks }) => {
            const taskId = state.nextId;
            kanbanSlice.caseReducers.taskCreated(
              state,
              kanbanSlice.actions.taskCreated({
                title,
                columnId,
                description,
                subtasks: [],
              }),
            );

            subtasks.forEach(({ title, isCompleted }) => {
              const subtaskId = state.nextId;
              kanbanSlice.caseReducers.subtaskCreated(
                state,
                kanbanSlice.actions.subtaskCreated({
                  title,
                  taskId,
                }),
              );

              kanbanSlice.caseReducers.subtaskCompletionChanged(
                state,
                kanbanSlice.actions.subtaskCompletionChanged({
                  subtaskId,
                  completed: isCompleted,
                }),
              );
            });
          });
        });
      });

      kanbanSlice.caseReducers.boardSelected(
        state,
        kanbanSlice.actions.boardSelected(0),
      );
      state.isInitialized = true;
    },

    boardCreated(state, action: PayloadAction<KanbanBoardCreatedPayload>) {
      const boardId = state.nextId;
      boardAdapter.addOne(state.boards, {
        boardId: boardId,
        title: action.payload.title,
        columns: [],
      });
      state.selectedBoardId = state.nextId;
      state.nextId++;
      action.payload.columns?.forEach((columnTitle) =>
        kanbanSlice.caseReducers.columnCreated(state, {
          type: 'columnCreated',
          payload: {
            boardId,
            title: columnTitle,
          },
        }),
      );
    },

    boardTitleChanged(
      state,
      action: PayloadAction<KanbanBoardTitleChangedPayload>,
    ) {
      const { boardId, title } = action.payload;
      boardAdapter.updateOne(state.boards, { id: boardId, changes: { title } });
    },

    boardDeleted(state, action: PayloadAction<number>) {
      const columnsToDelete = [
        ...(boardAdapter.getSelectors().selectById(state.boards, action.payload)
          ?.columns ?? []),
      ];

      boardAdapter.removeOne(state.boards, action.payload);

      if (
        state.selectedBoardId === action.payload &&
        state.boards.ids.length > 0 &&
        typeof state.boards.ids[0] === 'number'
      )
        state.selectedBoardId = state.boards.ids[0];
      else if (state.selectedBoardId === action.payload)
        state.selectedBoardId = -1;

      columnsToDelete.forEach((columnId) =>
        kanbanSlice.caseReducers.columnDeleted(
          state,
          kanbanSlice.actions.columnDeleted({ boardId: -1, columnId }),
        ),
      );
    },

    columnCreated(state, action: PayloadAction<KanbanColumnCreatedPayload>) {
      const boardToUpdate = boardAdapter
        .getSelectors()
        .selectById(state.boards, action.payload.boardId);

      if (boardToUpdate) {
        boardAdapter.updateOne(state.boards, {
          id: action.payload.boardId,
          changes: { columns: [...boardToUpdate.columns, state.nextId] },
        });
        columnAdapter.addOne(state.columns, {
          columnId: state.nextId,
          title: action.payload.title,
          tasks: [],
        });
        state.nextId++;
      }
    },

    columnTitleChanged(
      state,
      action: PayloadAction<KanbanColumnTitleChangedPayload>,
    ) {
      const columnToUpdate = columnAdapter
        .getSelectors()
        .selectById(state.columns, action.payload.columnId);
      if (columnToUpdate) {
        columnAdapter.updateOne(state.columns, {
          id: action.payload.columnId,
          changes: { title: action.payload.title },
        });
      }
    },

    columnDeleted(state, action: PayloadAction<KanbanColumnDeletedPayload>) {
      const boardToUpdate = boardAdapter
        .getSelectors()
        .selectById(state.boards, action.payload.boardId);

      if (boardToUpdate) {
        boardAdapter.updateOne(state.boards, {
          id: action.payload.boardId,
          changes: {
            columns: boardToUpdate.columns.filter(
              (columnId) => columnId !== action.payload.columnId,
            ),
          },
        });
      }

      const tasksToDelete = [
        ...(columnAdapter
          .getSelectors()
          .selectById(state.columns, action.payload.columnId)?.tasks ?? []),
      ];

      columnAdapter.removeOne(state.columns, action.payload.columnId);

      tasksToDelete.forEach((taskId) => {
        kanbanSlice.caseReducers.taskDeleted(
          state,
          kanbanSlice.actions.taskDeleted({ columnId: -1, taskId }),
        );
      });
    },

    taskCreated(state, action: PayloadAction<KanbanTaskCreatedPayload>) {
      const columnToUpdate = columnAdapter
        .getSelectors()
        .selectById(state.columns, action.payload.columnId);

      if (columnToUpdate) {
        columnAdapter.updateOne(state.columns, {
          id: action.payload.columnId,
          changes: { tasks: [...columnToUpdate.tasks, state.nextId] },
        });
        const taskId = state.nextId;
        taskAdapter.addOne(state.tasks, {
          taskId: taskId,
          title: action.payload.title,
          description: action.payload.description,
          subtasks: [],
        });
        state.nextId++;

        action.payload.subtasks.forEach((title) => {
          kanbanSlice.caseReducers.subtaskCreated(
            state,
            kanbanSlice.actions.subtaskCreated({ taskId, title }),
          );
        });
      }
    },

    taskTitleChanged(
      state,
      action: PayloadAction<KanbanTaskTitleChangedPayload>,
    ) {
      taskAdapter.updateOne(state.tasks, {
        id: action.payload.taskId,
        changes: { title: action.payload.title },
      });
    },

    taskDescriptionChanged(
      state,
      action: PayloadAction<KanbanTaskDescriptionChangedPayload>,
    ) {
      taskAdapter.updateOne(state.tasks, {
        id: action.payload.taskId,
        changes: { description: action.payload.description },
      });
    },

    taskMoved(state, action: PayloadAction<KanbanTaskMovedPayload>) {
      const oldColumn = columnAdapter
        .getSelectors()
        .selectById(state.columns, action.payload.oldColumnId);

      const newColumn = columnAdapter
        .getSelectors()
        .selectById(state.columns, action.payload.newColumnId);

      if (
        action.payload.oldColumnId === action.payload.newColumnId &&
        newColumn
      ) {
        if (action.payload.newIndex === undefined) return;
        const tasksAfterRemoval = newColumn.tasks.filter(
          (taskId) => taskId !== action.payload.taskId,
        );
        columnAdapter.updateOne(state.columns, {
          id: action.payload.newColumnId,
          changes: {
            tasks: insertInArray(
              tasksAfterRemoval,
              action.payload.taskId,
              action.payload.newIndex,
            ),
          },
        });
        return;
      }

      if (oldColumn)
        columnAdapter.updateOne(state.columns, {
          id: action.payload.oldColumnId,
          changes: {
            tasks: oldColumn.tasks.filter(
              (taskId) => taskId !== action.payload.taskId,
            ),
          },
        });
      if (newColumn)
        columnAdapter.updateOne(state.columns, {
          id: action.payload.newColumnId,
          changes: {
            tasks: action.payload.newIndex
              ? insertInArray(
                  newColumn.tasks,
                  action.payload.taskId,
                  action.payload.newIndex,
                )
              : [action.payload.taskId, ...newColumn.tasks],
          },
        });
    },

    taskDeleted(state, action: PayloadAction<KanbanTaskDeletedPayload>) {
      const columnToUpdate = columnAdapter
        .getSelectors()
        .selectById(state.columns, action.payload.columnId);

      if (columnToUpdate) {
        columnAdapter.updateOne(state.columns, {
          id: action.payload.columnId,
          changes: {
            tasks: columnToUpdate.tasks.filter(
              (taskId) => taskId !== action.payload.taskId,
            ),
          },
        });
      }

      const subtasksToDelete = [
        ...(taskAdapter
          .getSelectors()
          .selectById(state.tasks, action.payload.taskId)?.subtasks ?? []),
      ];

      taskAdapter.removeOne(state.tasks, action.payload.taskId);

      subtasksToDelete.forEach((subtaskId) => {
        kanbanSlice.caseReducers.subtaskDeleted(
          state,
          kanbanSlice.actions.subtaskDeleted({ taskId: -1, subtaskId }),
        );
      });
    },

    subtaskCreated(state, action: PayloadAction<KanbanSubtaskCreatedPayload>) {
      const taskToUpdate = taskAdapter
        .getSelectors()
        .selectById(state.tasks, action.payload.taskId);
      if (taskToUpdate) {
        taskAdapter.updateOne(state.tasks, {
          id: action.payload.taskId,
          changes: { subtasks: [...taskToUpdate.subtasks, state.nextId] },
        });
        subtaskAdapter.addOne(state.subtasks, {
          subtaskId: state.nextId,
          title: action.payload.title,
          completed: false,
        });
        state.nextId++;
      }
    },

    subtaskDeleted(state, action: PayloadAction<KanbanSubtaskDeletedPayload>) {
      const taskToUpdate = taskAdapter
        .getSelectors()
        .selectById(state.tasks, action.payload.taskId);
      if (taskToUpdate) {
        taskAdapter.updateOne(state.tasks, {
          id: action.payload.taskId,
          changes: {
            subtasks: taskToUpdate.subtasks.filter(
              (subtaskId) => subtaskId !== action.payload.subtaskId,
            ),
          },
        });
      }
      subtaskAdapter.removeOne(state.subtasks, action.payload.subtaskId);
    },

    subtaskTitleChanged(
      state,
      action: PayloadAction<KanbanSubtaskTitleChangedPayload>,
    ) {
      subtaskAdapter.updateOne(state.subtasks, {
        id: action.payload.subtaskId,
        changes: { title: action.payload.title },
      });
    },

    subtaskCompletionChanged(
      state,
      action: PayloadAction<KanbanSubTaskCompletionChangedPayload>,
    ) {
      subtaskAdapter.updateOne(state.subtasks, {
        id: action.payload.subtaskId,
        changes: {
          completed: action.payload.completed,
        },
      });
    },

    boardSelected(state, action: PayloadAction<number>) {
      state.selectedBoardId = action.payload;
    },
  },
});
