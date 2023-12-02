'use client';
import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector, useCloseModal } from '../../../hooks';
import {
  columnSelector,
  modalInputSelector,
  subtasksSelectorFactory,
  taskSelectorFactory,
} from '../../../selectors';
import { EditDeleteMenu } from '../../menus';
import { KanbanModal } from '../kanban-modal';
import { MultiSubtaskCheckbox } from '../../multi-inputs';
import { Dropdown } from '../../design-system';
import { kanbanSlice } from '@kanban/kanban-redux';
import { modalSlice } from '../../../slices';

export const ViewTaskModal = () => {
  const modalInput = useAppSelector(modalInputSelector);

  const columnId = modalInput.type === 'view-task' ? modalInput.columnId : -1;

  const taskId = modalInput.type === 'view-task' ? modalInput.taskId : -1;

  const taskSelector = useMemo(() => taskSelectorFactory(taskId), [taskId]);

  const subtasksSelector = useMemo(
    () => subtasksSelectorFactory(taskId),
    [taskId],
  );

  const task = useAppSelector(taskSelector);

  const subtasks = useAppSelector(subtasksSelector);

  const dispatch = useAppDispatch();

  const { closeModal } = useCloseModal();

  const onSubtaskCompletionChanged = useCallback(
    (subtaskId: number, value: boolean) => {
      dispatch(
        kanbanSlice.actions.subtaskCompletionChanged({
          subtaskId,
          completed: value,
        }),
      );
    },
    [dispatch],
  );

  const onTaskEdit = useCallback(() => {
    dispatch(
      modalSlice.actions.modalOpened({
        modalInput: {
          type: 'task',
          option: 'edit',
          taskId,
        },
      }),
    );
  }, [dispatch, taskId]);

  const onTaskDelete = useCallback(() => {
    dispatch(
      modalSlice.actions.modalOpened({
        modalInput: {
          type: 'delete',
          whatToDelete: 'task',
          columnId,
          taskId,
          name: task?.title ?? '',
        },
      }),
    );
    closeModal('view-task');
  }, [closeModal, columnId, dispatch, task?.title, taskId]);

  const onTaskColumnChanged = useCallback(
    (id: number) => {
      dispatch(
        kanbanSlice.actions.taskMoved({
          oldColumnId: columnId,
          newColumnId: id,
          taskId,
        }),
      );
    },
    [columnId, dispatch, taskId],
  );

  const completedSubtaskCount = useMemo(
    () => subtasks.filter(({ completed }) => completed).length,
    [subtasks],
  );

  const columns = useAppSelector(columnSelector);

  const selectableColumns = useMemo(
    () =>
      columns.map((column) => ({ id: column.columnId, label: column.title })),
    [columns],
  );

  const currentColumn = useMemo(
    () => columns.find((column) => column.tasks.includes(taskId)),
    [columns, taskId],
  );

  if (modalInput.type !== 'view-task' || !task) return null;

  const { title, description } = task;

  return (
    <KanbanModal type="view-task">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <KanbanModal.Title className="text-kb-black dark:text-white tp-heading-l">
            {title}
          </KanbanModal.Title>
          <EditDeleteMenu
            variant="task"
            onEditClick={onTaskEdit}
            onDeleteClick={onTaskDelete}
          />
        </div>
        <p className="tp-body-l text-kb-medium-gray">{description}</p>
        {subtasks.length > 0 && (
          <div className="flex flex-col gap-4">
            <span className="tp-body-m text-kb-medium-gray">
              Subtasks ({completedSubtaskCount} / {subtasks.length})
            </span>
            <div className="max-h-[240px] overflow-auto">
              <MultiSubtaskCheckbox
                subtasks={subtasks}
                onChange={onSubtaskCompletionChanged}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <span className="tp-body-m text-kb-medium-gray">Current Status</span>
          {
            <Dropdown
              selectedId={currentColumn?.columnId ?? -1}
              selectableOptions={selectableColumns}
              onChange={onTaskColumnChanged}
            />
          }
        </div>
      </div>
    </KanbanModal>
  );
};
