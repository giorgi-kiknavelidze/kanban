import { kanbanSlice } from '@kanban/kanban-redux';
import { useCallback, useMemo, useState } from 'react';
import { MultiTextFieldItemValue } from '../components';
import { subtasksSelectorFactory } from '../selectors';
import { MultiTextFieldUtilsService } from '../services';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';
import { useCloseModal } from './use-close-modal';
import {
  TitleAndInputValidationErrors,
  validateTitleAndInput,
} from '../validators';

export interface useTaskModalEditParams {
  taskId: number;
  title: string;
  description: string;
  input: MultiTextFieldItemValue[];
}

export const useTaskModalEdit = ({
  taskId,
  title,
  description,
  input,
}: useTaskModalEditParams) => {
  const [onEditErrors, setOnEditErrors] =
    useState<TitleAndInputValidationErrors>({});
  const { closeModal } = useCloseModal();

  const dispatch = useAppDispatch();

  const subtasksSelector = useMemo(
    () => subtasksSelectorFactory(taskId),
    [taskId],
  );

  const subtasks = useAppSelector(subtasksSelector);

  const onEdit = useCallback(() => {
    const validationErrors = validateTitleAndInput(title, input);
    setOnEditErrors(validationErrors ?? {});
    if (validationErrors) return;

    dispatch(
      kanbanSlice.actions.taskTitleChanged({ taskId: taskId ?? -1, title }),
    );
    dispatch(
      kanbanSlice.actions.taskDescriptionChanged({
        taskId: taskId ?? -1,
        description,
      }),
    );

    const subtaskIds = subtasks.map(({ subtaskId }) => subtaskId);
    const remainingIds = MultiTextFieldUtilsService.getRemainingIds(
      subtaskIds,
      input,
    );

    const idsToDelete = MultiTextFieldUtilsService.getIdsToDelete(
      subtaskIds,
      remainingIds,
    );

    idsToDelete.forEach((subtaskId) => {
      dispatch(kanbanSlice.actions.subtaskDeleted({ subtaskId, taskId }));
    });

    const subtasksToAdd = MultiTextFieldUtilsService.getNewItems(
      remainingIds,
      input,
    );

    subtasksToAdd.forEach((title) => {
      dispatch(kanbanSlice.actions.subtaskCreated({ taskId, title }));
    });

    remainingIds.forEach((subtaskId) => {
      const newTitle = input.find(({ id }) => id === `${subtaskId}`)?.value;
      if (newTitle !== undefined)
        dispatch(
          kanbanSlice.actions.subtaskTitleChanged({
            subtaskId,
            title: newTitle,
          }),
        );
    });

    closeModal('task');
  }, [closeModal, description, dispatch, input, subtasks, taskId, title]);

  return { onEdit, onEditErrors };
};
