import { RootState } from '../store';

export const popoverSelector = (state: RootState) =>
  state.popover.currentPopover;
