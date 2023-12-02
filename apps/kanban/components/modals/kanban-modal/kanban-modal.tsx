import { Dialog } from '@headlessui/react';
import { clsx } from 'clsx';
import { ReactNode, useCallback } from 'react';
import { useAppDispatch, useDarkMode } from '../../../hooks';
import { modalSlice } from '../../../slices';

export interface KanbanModalProps {
  type: string;
  children: ReactNode;
}

export const KanbanModal = ({ type, children }: KanbanModalProps) => {
  const dispatch = useAppDispatch();

  const onClose = useCallback(() => {
    dispatch(modalSlice.actions.modalClosed({ modalType: type }));
  }, [dispatch, type]);

  const { isDarkMode } = useDarkMode();

  return (
    <Dialog
      open
      onClose={onClose}
      className={clsx(
        isDarkMode && 'dark',
        'absolute inset-0 flex items-center justify-center z-50',
      )}
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="rounded-md bg-white dark:bg-kb-dark-gray px-8 pt-8 pb-10 z-2 w-[30rem]">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

// for convenience
KanbanModal.Title = Dialog.Title;
KanbanModal.Description = Dialog.Description;
