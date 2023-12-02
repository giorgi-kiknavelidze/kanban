import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'Sidebar',
  initialState: {
    isSidebarHidden: false,
  },
  reducers: {
    sidebarToggled(state) {
      state.isSidebarHidden = !state.isSidebarHidden;
    },
  },
});
