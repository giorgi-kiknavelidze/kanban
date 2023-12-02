export interface KanbanBoardCreatedPayload {
  title: string;
  columns?: string[];
}

export interface KanbanBoardTitleChangedPayload {
  boardId: number;
  title: string;
}

export interface KanbanColumnCreatedPayload {
  boardId: number;
  title: string;
}

export interface KanbanColumnDeletedPayload {
  boardId: number;
  columnId: number;
}

export interface KanbanColumnTitleChangedPayload {
  columnId: number;
  title: string;
}

export interface KanbanTaskCreatedPayload {
  columnId: number;
  title: string;
  description: string;
  subtasks: string[];
}

export interface KanbanTaskTitleChangedPayload {
  taskId: number;
  title: string;
}

export interface KanbanTaskDescriptionChangedPayload {
  taskId: number;
  description: string;
}

export interface KanbanTaskMovedPayload {
  taskId: number;
  oldColumnId: number;
  newColumnId: number;
  newIndex?: number;
}

export interface KanbanTaskDeletedPayload {
  columnId: number;
  taskId: number;
}

export interface KanbanSubtaskCreatedPayload {
  taskId: number;
  title: string;
}

export interface KanbanSubtaskTitleChangedPayload {
  subtaskId: number;
  title: string;
}

export interface KanbanSubtaskDeletedPayload {
  taskId: number;
  subtaskId: number;
}

export interface KanbanSubTaskCompletionChangedPayload {
  subtaskId: number;
  completed: boolean;
}
