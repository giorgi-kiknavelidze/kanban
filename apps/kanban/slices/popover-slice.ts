import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const popoverSlice = createSlice({
  name: 'Popover',
  initialState: () => ({
    currentPopover: '',
  }),
  reducers: {
    popoverOpened(state, action: PayloadAction<string>) {
      state.currentPopover = action.payload;
    },

    popoverClosed(state, action: PayloadAction<string>) {
      if (state.currentPopover === action.payload) state.currentPopover = '';
    },
  },
});
