'use client';
import { modalSlice } from '../../../slices';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  selectedBoardSelector,
  sidebarHiddenSelector,
} from '../../../selectors';
import { HeaderContent } from '../header-content';
import { useCallback } from 'react';

export const HeaderRoot = () => {
  const isSidebarHidden = useAppSelector(sidebarHiddenSelector);
  const selectedBoard = useAppSelector(selectedBoardSelector);
  const dispatch = useAppDispatch();

  const onDeleteClick = useCallback(() => {
    if (selectedBoard)
      dispatch(
        modalSlice.actions.modalOpened({
          modalInput: {
            type: 'delete',
            whatToDelete: 'board',
            name: selectedBoard.title,
            boardId: selectedBoard.boardId,
          },
        }),
      );
  }, [dispatch, selectedBoard]);

  const onEditClick = useCallback(() => {
    dispatch(
      modalSlice.actions.modalOpened({
        modalInput: {
          type: 'board',
          option: 'edit',
        },
      }),
    );
  }, [dispatch]);

  return (
    <HeaderContent
      boardLabel={selectedBoard?.title ?? ''}
      withKanbanLogo={isSidebarHidden}
      onDeleteClick={onDeleteClick}
      onEditClick={onEditClick}
    />
  );
};
