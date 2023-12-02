import { kanbanSlice } from '@kanban/kanban-redux';
import { useCallback, useState } from 'react';
import { MultiTextFieldItemValue } from '../components';
import { useCloseModal } from './use-close-modal';
import { useAppDispatch } from './use-app-dispatch';
import {
  TitleAndInputValidationErrors,
  validateTitleAndInput,
} from '../validators';

export interface useBoardModalAddParams {
  title: string;
  input: MultiTextFieldItemValue[];
}

export const useBoardModalAdd = ({ title, input }: useBoardModalAddParams) => {
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
      kanbanSlice.actions.boardCreated({
        title,
        columns: input.map(({ value }) => value.trim()).filter(Boolean),
      }),
    );
    closeModal('board');
  }, [dispatch, title, input, closeModal]);

  return { onAdd, onAddErrors };
};
