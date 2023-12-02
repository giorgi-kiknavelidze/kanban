export interface KanbanSubtask {
  subtaskId: number;
  title: string;
  completed: boolean;
}

interface KanbanTaskBase {
  taskId: number;
  title: string;
  description: string;
}

export interface KanbanTask extends KanbanTaskBase {
  subtasks: KanbanSubtask[];
}

export interface KanbanTaskNormalized extends KanbanTaskBase {
  subtasks: number[];
}

interface KanbanColumnBase {
  columnId: number;
  title: string;
}

export interface KanbanColumn extends KanbanColumnBase {
  tasks: KanbanTask[];
}

export interface KanbanColumnNormalized extends KanbanColumnBase {
  tasks: number[];
}

export interface KanbanBoardBase {
  boardId: number;
  title: string;
}

export interface KanbanBoard extends KanbanBoardBase {
  columns: KanbanColumn[];
}

export interface KanbanBoardNormalized extends KanbanBoardBase {
  columns: number[];
}
