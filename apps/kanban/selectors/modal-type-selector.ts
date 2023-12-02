import { RootState } from '../store';

export const modalTypeSelector = (state: RootState) =>
  state.modal.modalInput.type;
