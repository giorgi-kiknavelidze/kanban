import { KanbanBoardBase } from '@kanban/kanban-redux';
import { Dispatch } from 'react';
import { KanbanLogo } from '../../kanban-logo';
import { BoardList } from '../board-list';
import { DarkModeSwitch } from '../dark-mode-switch';
import { HideSidebar } from '../hide-sidebar';

export interface SidebarContentProps {
  boardListItems: KanbanBoardBase[];
  selectedBoardListItemId: number;
  onHideSidebarClick?: Dispatch<void>;
}

export const SidebarContent = ({
  boardListItems,
  selectedBoardListItemId,
  onHideSidebarClick,
}: SidebarContentProps) => {
  return (
    <div className="hidden md:flex flex-col justify-between bg-white dark:bg-kb-dark-gray w-[16.25rem] xl:w-[18.75rem] pt-8 pb-12 border-r-solid border-r-1 border-r-kb-lines-light dark:border-r-kb-lines-dark">
      <div className="flex flex-col gap-12">
        <div className="mx-8">
          <KanbanLogo />
        </div>
        <BoardList
          items={boardListItems}
          selectedItemId={selectedBoardListItemId}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="mx-auto">
          <DarkModeSwitch />
        </div>
        <HideSidebar onClick={onHideSidebarClick} />
      </div>
    </div>
  );
};
