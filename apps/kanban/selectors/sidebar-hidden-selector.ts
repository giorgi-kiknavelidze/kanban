import { RootState } from '../store';

export const sidebarHiddenSelector = (state: RootState) =>
  state.sidebar.isSidebarHidden;
