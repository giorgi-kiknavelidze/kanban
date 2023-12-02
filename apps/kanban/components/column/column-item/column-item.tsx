'use client';
import { KanbanTaskNormalized } from '@kanban/kanban-redux';
import { Draggable } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { subtasksSelectorFactory } from '../../../selectors';
import { modalSlice } from '../../../slices';
import { useCallback, useMemo } from 'react';
export interface ColumnItemProps {
  task: KanbanTaskNormalized;
  columnId: number;
  index: number;
}

export const ColumnItem = ({ task, columnId, index }: ColumnItemProps) => {
  const subtaskSelector = useMemo(
    () => subtasksSelectorFactory(task.taskId),
    [task.taskId],
  );
  const subtasks = useAppSelector(subtaskSelector);
  const completedSubtaskAmount = useMemo(
    () => subtasks.filter((subtask) => subtask.completed).length,
    [subtasks],
  );

  const dispatch = useAppDispatch();

  const openViewTaskModal = useCallback(() => {
    dispatch(
      modalSlice.actions.modalOpened({
        modalInput: { type: 'view-task', taskId: task.taskId, columnId },
      }),
    );
  }, [columnId, dispatch, task.taskId]);

  return (
    <Draggable draggableId={`${task.taskId}`} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <div
          className="flex flex-col gap-2 px-4 py-6 bg-white dark:bg-kb-dark-gray w-72 rounded-lg shadow-[0_4px_6px_0_rgba(54,_78,_126,_0.10)] mb-4"
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
        >
          <button
            className="text-kb-black dark:text-white tp-heading-m hover:text-kb-purple text-left"
            onClick={openViewTaskModal}
          >
            {task.title}
          </button>
          <p className="text-kb-medium-gray tp-body-m">
            {completedSubtaskAmount} out of {task.subtasks.length} subtasks
          </p>
        </div>
      )}
    </Draggable>
  );
};
