import { kanbanSlice } from '@kanban/kanban-redux';
import { useEffect } from 'react';
import { useAppDispatch } from './use-app-dispatch';

export const useInitializeStore = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(kanbanSlice.actions.initalized());
  }, [dispatch]);
};
