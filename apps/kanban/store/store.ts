import { kanbanSlice } from '@kanban/kanban-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modalSlice, sidebarSlice } from '../slices';
import { popoverSlice } from '../slices/popover-slice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: process.env.STORYBOOK === 'true' ? [] : ['kanban'],
};

const rootReducer = combineReducers({
  kanban: kanbanSlice.reducer,
  sidebar: sidebarSlice.reducer,
  modal: modalSlice.reducer,
  popover: popoverSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
