import { kanbanSlice } from '@kanban/kanban-redux';
import { useCallback } from 'react';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';
import { useCloseModal } from './use-close-modal';
import { modalInputSelector } from '../selectors';

export const useDeleteModalDeletion = () => {
  const { closeModal } = useCloseModal();

  const modalInput = useAppSelector(modalInputSelector);
  const dispatch = useAppDispatch();

  const boardId = modalInput.type === 'delete' ? modalInput.boardId : undefined;
  const columnId =
    modalInput.type === 'delete' ? modalInput.columnId : undefined;
  const taskId = modalInput.type === 'delete' ? modalInput.taskId : undefined;

  const onDelete = useCallback(() => {
    if (boardId !== undefined)
      dispatch(kanbanSlice.actions.boardDeleted(boardId));
    else if (columnId !== undefined && taskId !== undefined)
      dispatch(kanbanSlice.actions.taskDeleted({ columnId, taskId }));

    closeModal('delete');
  }, [boardId, closeModal, columnId, dispatch, taskId]);

  return { onDelete };
};
