import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Button, TextField } from '../../design-system';
import {
  useAppSelector,
  useBoardModalAdd,
  useBoardModalEdit,
  useMultiTextFieldInput,
  useUpdateErrors,
} from '../../../hooks';
import {
  columnSelector,
  modalInputSelector,
  selectedBoardSelector,
} from '../../../selectors';
import { MultiTextField } from '../../multi-inputs';
import { KanbanModal } from '../kanban-modal';

export const BoardModal = () => {
  const modalInput = useAppSelector(modalInputSelector);

  const selectedBoard = useAppSelector(selectedBoardSelector);

  const { input, addItem, deleteItem, editItem, updateErrors } =
    useMultiTextFieldInput();

  const isEdit = 'option' in modalInput && modalInput.option === 'edit';

  const [title, setTitle] = useState('');

  const { onAdd, onAddErrors } = useBoardModalAdd({ title, input });

  const { onEdit, onEditErrors } = useBoardModalEdit({ title, input });

  const onColumnEdit = useCallback(
    (id: string, changeEvent: ChangeEvent<HTMLInputElement>) => {
      editItem(id, changeEvent.currentTarget.value);
    },
    [editItem],
  );

  const columns = useAppSelector(columnSelector);

  useEffect(() => {
    setTitle('');
    if (isEdit) {
      setTitle(selectedBoard?.title ?? '');
      columns.forEach((column) => {
        addItem({
          value: column.title,
          defaultValue: column.title,
          id: `${column.columnId}`,
        });
      });
    }
  }, [addItem, columns, isEdit, selectedBoard?.title]);

  useUpdateErrors({ isEdit, onAddErrors, onEditErrors, updateErrors });

  if (modalInput.type !== 'board') return null;

  return (
    <KanbanModal type="board">
      <div className="flex flex-col gap-6">
        <KanbanModal.Title className="tp-heading-l text-kb-black dark:text-white">
          {isEdit ? 'Edit' : 'Add New'} Board
        </KanbanModal.Title>
        <div className="flex flex-col gap-2 text-kb-medium-gray">
          <div className="flex flex-col gap-1">
            <p className="tp-body-m">{isEdit && 'Board'} Name</p>
            <TextField
              placeholder="e.g. Web Design"
              onChange={(e) => setTitle(e.currentTarget.value)}
              defaultValue={isEdit ? selectedBoard?.title ?? '' : ''}
              errorMessage={isEdit ? onEditErrors.title : onAddErrors.title}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="tp-body-m">Columns</p>
            <div className="flex flex-col gap-3">
              <MultiTextField
                items={input}
                onDelete={deleteItem}
                onChange={onColumnEdit}
              />
              <Button
                variant="secondary"
                onClick={() =>
                  addItem({ placeholder: 'e. g. Todo', value: '' })
                }
              >
                + Add New Column
              </Button>
            </div>
          </div>
        </div>
        <Button variant="primary-s" onClick={isEdit ? onEdit : onAdd}>
          {isEdit ? 'Save Changes' : 'Create New Board'}
        </Button>
      </div>
    </KanbanModal>
  );
};
