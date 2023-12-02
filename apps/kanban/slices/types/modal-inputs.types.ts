export type AddEditOption = 'add' | 'edit';

export interface NoModalInput {
  type: '';
}

export interface BoardModalInput {
  type: 'board';
  option: AddEditOption;
}

export interface ViewTaskModalInput {
  type: 'view-task';
  columnId: number;
  taskId: number;
}

interface AddTaskModalInput {
  type: 'task';
  option: 'add';
  taskId?: never;
}

interface EditTaskModalInput {
  type: 'task';
  option: 'edit';
  taskId: number;
}

export type TaskModalInput = AddTaskModalInput | EditTaskModalInput;

interface BoardDeleteModalInput {
  type: 'delete';
  whatToDelete: 'board';
  name: string;
  boardId: number;
  columnId?: never;
  taskId?: never;
}

interface TaskDeleteModalInput {
  type: 'delete';
  whatToDelete: 'task';
  name: string;
  boardId?: never;
  columnId: number;
  taskId: number;
}

export type DeleteModalInput = BoardDeleteModalInput | TaskDeleteModalInput;

export type ModalInput =
  | NoModalInput
  | BoardModalInput
  | ViewTaskModalInput
  | TaskModalInput
  | DeleteModalInput;
