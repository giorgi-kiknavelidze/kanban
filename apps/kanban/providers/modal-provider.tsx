'use client';
import {
  BoardModal,
  DeleteModal,
  TaskModal,
  ViewTaskModal,
} from '../components/modals';
import { modalInputSelector } from '../selectors';
import { useAppSelector } from '../hooks';

export const ModalProvider = () => {
  const modalInput = useAppSelector(modalInputSelector);
  return (
    <>
      {modalInput.type === 'board' && <BoardModal />}
      {modalInput.type === 'task' && <TaskModal />}
      {modalInput.type === 'delete' && <DeleteModal />}
      {modalInput.type === 'view-task' && <ViewTaskModal />}
    </>
  );
};
