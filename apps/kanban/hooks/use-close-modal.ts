import { useCallback } from 'react';
import { modalSlice } from '../slices';
import { useAppDispatch } from './use-app-dispatch';

export const useCloseModal = () => {
  const dispatch = useAppDispatch();
  const closeModal = useCallback(
    (modalType: string) =>
      dispatch(modalSlice.actions.modalClosed({ modalType })),
    [dispatch],
  );

  return { closeModal };
};
