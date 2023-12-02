import {
  useAppSelector,
  useCloseModal,
  useDeleteModalDeletion,
} from '../../../hooks';
import { modalInputSelector } from '../../../selectors';
import { Button } from '../../design-system';
import { KanbanModal } from '../kanban-modal';

export const DeleteModal = () => {
  const modalInput = useAppSelector(modalInputSelector);

  const { onDelete } = useDeleteModalDeletion();
  const { closeModal } = useCloseModal();

  if (modalInput.type !== 'delete') return null;
  const { name, whatToDelete } = modalInput;

  return (
    <KanbanModal type="delete">
      <KanbanModal.Title className="tp-heading-l text-kb-red">
        Delete this {modalInput.whatToDelete}?
      </KanbanModal.Title>
      <KanbanModal.Description className="tp-body-l text-kb-medium-gray">
        Are you sure you want to delete the <q>{name}</q>{' '}
        {whatToDelete === 'task'
          ? 'task and its subtasks? This action'
          : 'board? This Action will remove all columns and tasks and'}{' '}
        cannot be reversed.
      </KanbanModal.Description>
      <div className="flex gap-4 items-center justify-stretch mt-4">
        <Button variant="destructive" className="!grow" onClick={onDelete}>
          Delete
        </Button>
        <Button
          variant="secondary"
          className="grow"
          onClick={() => closeModal('delete')}
        >
          Close
        </Button>
      </div>
    </KanbanModal>
  );
};
