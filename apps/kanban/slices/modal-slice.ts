import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CloseModalPayload, OpenModalPayload, ModalInput } from './types';

interface ModalSliceRootState {
  modalInput: ModalInput;
}

export const modalSlice = createSlice({
  name: 'Modal',
  initialState: (): ModalSliceRootState => {
    return {
      modalInput: { type: '' },
    };
  },
  reducers: {
    modalOpened(state, action: PayloadAction<OpenModalPayload>) {
      state.modalInput = action.payload.modalInput;
    },

    modalClosed(state, action: PayloadAction<CloseModalPayload>) {
      state.modalInput =
        state.modalInput.type === action.payload.modalType
          ? { type: '' }
          : state.modalInput;
    },
  },
});
