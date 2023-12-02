import { KanbanSubtask } from '@kanban/kanban-redux';
import { clsx } from 'clsx';
import { Dispatch } from 'react';
import { ReactComponent as Check } from '../../../assets/Check.svg';

export interface SubtaskCheckboxProps {
  subtask: KanbanSubtask;
  onChange?: Dispatch<boolean>;
}

export const SubtaskCheckbox = ({
  subtask,
  onChange,
}: SubtaskCheckboxProps) => (
  <button
    className="bg-kb-light-bg dark:bg-kb-dark-bg rounded"
    onClick={() => onChange?.(!subtask.completed)}
  >
    <div className="w-full h-full flex items-center p-3 gap-4 hover:bg-kb-purple/25 rounded">
      <div
        className={clsx(
          'w-4 h-4 shrink-0 flex items-center justify-center',
          subtask.completed
            ? 'bg-kb-purple'
            : 'bg-white dark:bg-kb-dark-gray border-1 border-kb-medium-gray',
        )}
      >
        {subtask.completed && <Check />}
      </div>
      <span
        className={clsx(
          'tp-body-m text-left',
          subtask.completed
            ? 'text-black/50 dark:text-white/50 line-through'
            : 'text-black dark:text-white',
        )}
      >
        {subtask.title}
      </span>
    </div>
  </button>
);
