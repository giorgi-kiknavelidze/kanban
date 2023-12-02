import {
  columnSelector,
  modalInputSelector,
  subtasksSelectorFactory,
  taskSelectorFactory,
} from '../../../selectors';
import {
  useAppSelector,
  useMultiTextFieldInput,
  useTaskModalAdd,
  useTaskModalEdit,
  useUpdateErrors,
} from '../../../hooks';
import { KanbanModal } from '../kanban-modal';
import { Button, Dropdown, TextField } from '../../design-system';
import { MultiTextField } from '../../multi-inputs';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

export const TaskModal = () => {
  const modalInput = useAppSelector(modalInputSelector);
  const columns = useAppSelector(columnSelector);

  const selectableOptions = useMemo(
    () =>
      columns.map(({ columnId, title }) => ({ id: columnId, label: title })),
    [columns],
  );

  const { input, addItem, editItem, deleteItem, updateErrors } =
    useMultiTextFieldInput();

  const [selectedColumnId, setSelectedColumnId] = useState(-1);

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  useEffect(() => {
    setSelectedColumnId(columns.length ? columns[0].columnId : -1);
  }, [modalInput.type, columns]);

  const isEdit = modalInput.type === 'task' && modalInput.option === 'edit';
  const taskId =
    modalInput.type === 'task' && modalInput.taskId !== undefined
      ? modalInput.taskId
      : -1;

  const { onAdd, onAddErrors } = useTaskModalAdd({
    title,
    description,
    columnId: selectedColumnId,
    input,
  });

  const { onEdit, onEditErrors } = useTaskModalEdit({
    taskId,
    title,
    description,
    input,
  });

  const taskSelector = useMemo(() => taskSelectorFactory(taskId), [taskId]);

  const task = useAppSelector(taskSelector);

  const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }, []);

  const onDescriptionChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.currentTarget.value);
    },
    [],
  );

  const onSubtaskEdit = useCallback(
    (id: string, e: ChangeEvent<HTMLInputElement>) => {
      editItem(id, e.currentTarget.value);
    },
    [editItem],
  );

  const subtasksSelector = useMemo(
    () => subtasksSelectorFactory(taskId),
    [taskId],
  );

  const subtasks = useAppSelector(subtasksSelector);

  useEffect(() => {
    setTitle(task?.title ?? '');
    setDescription(task?.description ?? '');
    subtasks.forEach(({ subtaskId, title }) => {
      addItem({ id: `${subtaskId}`, value: title, defaultValue: title });
    });
  }, [addItem, subtasks, task]);

  useUpdateErrors({ isEdit, onAddErrors, onEditErrors, updateErrors });

  if (modalInput.type !== 'task') return null;

  return (
    <KanbanModal type="task">
      <div className="flex flex-col gap-6">
        <KanbanModal.Title className="tp-heading-l text-kb-black dark:text-white">
          {isEdit ? 'Edit' : 'Add New'} Task
        </KanbanModal.Title>
        <div className="flex flex-col gap-2 text-kb-medium-gray">
          <div className="flex flex-col gap-1">
            <p className="tp-body-m">Title</p>
            <TextField
              placeholder="e.g. Web Design"
              onChange={onTitleChange}
              defaultValue={isEdit ? task?.title ?? '' : ''}
              errorMessage={isEdit ? onEditErrors.title : onAddErrors.title}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="tp-body-m">Description</p>
            <TextField
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
              variant="textarea"
              onChange={onDescriptionChange}
              defaultValue={task?.description}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="tp-body-m">Subtasks</p>
            <div className="flex flex-col gap-1 overflow-auto max-h-[240px]">
              <MultiTextField
                items={input}
                onDelete={deleteItem}
                onChange={onSubtaskEdit}
              />
              <Button
                variant="secondary"
                onClick={() =>
                  addItem({ placeholder: 'e. g. Todo', value: '' })
                }
              >
                + Add New Subtask
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="tp-body-m">Status</p>
            <Dropdown
              selectedId={selectedColumnId}
              selectableOptions={selectableOptions}
              onChange={setSelectedColumnId}
            />
          </div>
        </div>
        <Button variant="primary-s" onClick={isEdit ? onEdit : onAdd}>
          {isEdit ? 'Save Changes' : 'Create Task'}
        </Button>
      </div>
    </KanbanModal>
  );
};
