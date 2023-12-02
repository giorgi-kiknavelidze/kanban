import { kanbanSlice } from '@kanban/kanban-redux';
import { useCallback, useState } from 'react';
import { MultiTextFieldItemValue } from '../components';
import { selectedBoardSelector } from '../selectors';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCloseModal } from './use-close-modal';
import { MultiTextFieldUtilsService } from '../services';
import {
  TitleAndInputValidationErrors,
  validateTitleAndInput,
} from '../validators';

export interface useBoardModalEditParams {
  title: string;
  input: MultiTextFieldItemValue[];
}

export const useBoardModalEdit = ({
  title,
  input,
}: useBoardModalEditParams) => {
  const selectedBoard = useAppSelector(selectedBoardSelector);
  const dispatch = useAppDispatch();

  const [onEditErrors, setOnEditErrors] =
    useState<TitleAndInputValidationErrors>({});

  const { closeModal } = useCloseModal();

  const onEdit = useCallback(() => {
    const validationErrors = validateTitleAndInput(title, input);
    setOnEditErrors(validationErrors ?? {});
    if (validationErrors) return;

    if (selectedBoard !== undefined) {
      dispatch(
        kanbanSlice.actions.boardTitleChanged({
          boardId: selectedBoard.boardId,
          title,
        }),
      );
      const remainingIds = MultiTextFieldUtilsService.getRemainingIds(
        selectedBoard.columns,
        input,
      );

      const idsToDelete = MultiTextFieldUtilsService.getIdsToDelete(
        selectedBoard.columns,
        remainingIds,
      );

      idsToDelete.forEach((columnId) => {
        dispatch(
          kanbanSlice.actions.columnDeleted({
            boardId: selectedBoard.boardId,
            columnId,
          }),
        );
      });

      const columnsToAdd = MultiTextFieldUtilsService.getNewItems(
        remainingIds,
        input,
      );

      columnsToAdd.forEach((title) => {
        dispatch(
          kanbanSlice.actions.columnCreated({
            boardId: selectedBoard.boardId,
            title,
          }),
        );
      });

      remainingIds.forEach((columnId) => {
        const newTitle = input.find(({ id }) => id === `${columnId}`)?.value;
        if (newTitle !== undefined)
          dispatch(
            kanbanSlice.actions.columnTitleChanged({
              columnId,
              title: newTitle,
            }),
          );
      });
    }

    closeModal('board');
  }, [closeModal, dispatch, input, selectedBoard, title]);

  return { onEdit, onEditErrors };
};
