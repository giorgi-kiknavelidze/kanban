import { KanbanSubtask } from '@kanban/kanban-redux';
import { SubtaskCheckbox } from '../../design-system';

export interface MultiSubtaskCheckboxProps {
  subtasks: KanbanSubtask[];
  onChange?: (id: number, value: boolean) => void;
}

export const MultiSubtaskCheckbox = ({
  subtasks,
  onChange,
}: MultiSubtaskCheckboxProps) => (
  <div className="flex flex-col gap-2">
    {subtasks.map((subtask) => (
      <SubtaskCheckbox
        key={subtask.subtaskId}
        subtask={subtask}
        onChange={(value) => onChange?.(subtask.subtaskId, value)}
      />
    ))}
  </div>
);
