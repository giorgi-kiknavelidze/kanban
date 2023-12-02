import { useCallback, useState } from 'react';
import { MultiTextFieldItemValue } from '../components';
import { useAppDispatch } from './use-app-dispatch';
import { useCloseModal } from './use-close-modal';
import { kanbanSlice } from '@kanban/kanban-redux';
import {
  TitleAndInputValidationErrors,
  validateTitleAndInput,
} from '../validators';

export interface useTaskModalAddParams {
  title: string;
  description: string;
  columnId: number;
  input: MultiTextFieldItemValue[];
}

export const useTaskModalAdd = ({
  title,
  description,
  columnId,
  input,
}: useTaskModalAddParams) => {
  const [onAddErrors, setOnAddErrors] = useState<TitleAndInputValidationErrors>(
    {},
  );
  const { closeModal } = useCloseModal();

  const dispatch = useAppDispatch();

  const onAdd = useCallback(() => {
    const validationErrors = validateTitleAndInput(title, input);
    setOnAddErrors(validationErrors ?? {});
    if (validationErrors) return;

    dispatch(
      kanbanSlice.actions.taskCreated({
        columnId,
        title,
        description,
        subtasks: input.map(({ value }) => value).filter(Boolean),
      }),
    );
    closeModal('task');
  }, [closeModal, columnId, description, dispatch, input, title]);

  return { onAdd, onAddErrors };
};
