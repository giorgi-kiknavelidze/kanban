'use client';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  boardsSelector,
  selectedBoardSelector,
  sidebarHiddenSelector,
} from '../../../selectors';
import { sidebarSlice } from '../../../slices';
import { SidebarContent } from '../sidebar-content';
import { SidebarOpen } from '../sidebar-open';

export const SidebarRoot = () => {
  const isSidebarHidden = useAppSelector(sidebarHiddenSelector);
  const dispatch = useAppDispatch();
  const boardListItems = useAppSelector(boardsSelector);
  const selectedBoard = useAppSelector(selectedBoardSelector);

  const toggleSidebar = useCallback(() => {
    dispatch(sidebarSlice.actions.sidebarToggled());
  }, [dispatch]);

  return !isSidebarHidden ? (
    <SidebarContent
      boardListItems={boardListItems}
      selectedBoardListItemId={selectedBoard?.boardId ?? 0}
      onHideSidebarClick={toggleSidebar}
    />
  ) : (
    <div className="absolute bottom-8 left-0 z-10">
      <SidebarOpen onClick={toggleSidebar} />
    </div>
  );
};
