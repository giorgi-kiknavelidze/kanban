'use client';
import { Dispatch, useCallback } from 'react';
import { ReactComponent as KanbanLogoIcon } from '../../../assets/KanbanLogoIcon.svg';
import { ReactComponent as PlusIcon } from '../../../assets/PlusIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { modalSlice } from '../../../slices';
import { Button } from '../../design-system';
import { KanbanLogo } from '../../kanban-logo';
import { columnSelector } from '../../../selectors';
import { EditDeleteMenu, MobileMenu } from '../../menus';

export interface HeaderContentProps {
  boardLabel: string;
  withKanbanLogo: boolean;
  onEditClick?: Dispatch<void>;
  onDeleteClick?: Dispatch<void>;
}

export const HeaderContent = ({
  boardLabel,
  withKanbanLogo,
  onEditClick,
  onDeleteClick,
}: HeaderContentProps) => {
  const columns = useAppSelector(columnSelector);
  const dispatch = useAppDispatch();

  const isAddButtonDisabled = !columns.length;

  const onClick = useCallback(() => {
    dispatch(
      modalSlice.actions.modalOpened({
        modalInput: {
          type: 'task',
          option: 'add',
        },
      }),
    );
  }, [dispatch]);

  return (
    <header className="flex items-center pl-6 pr-8 bg-white dark:bg-kb-dark-gray w-full gap-8">
      {withKanbanLogo && (
        <div className="hidden md:flex items-center justify-center pt-5 pb-6 border-r-solid border-r-1 border-r-kb-lines-light dark:border-r-kb-lines-dark pr-8 h-full">
          <KanbanLogo />
        </div>
      )}
      <div className="flex justify-between items-center grow pt-5 pb-6">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <KanbanLogoIcon />
          </div>
          <div className="flex items-center gap-2">
            <span className="tp-heading-l lg:tp-heading-xl text-black dark:text-white">
              {boardLabel}
            </span>
            <MobileMenu />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden md:block">
            <Button
              onClick={onClick}
              variant="primary-l"
              disabled={isAddButtonDisabled}
            >
              + Add New Task
            </Button>
          </div>
          <div className="block md:hidden">
            <Button
              onClick={onClick}
              variant="primary-l"
              disabled={isAddButtonDisabled}
            >
              <PlusIcon />
            </Button>
          </div>
          <EditDeleteMenu
            variant="board"
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        </div>
      </div>
    </header>
  );
};
