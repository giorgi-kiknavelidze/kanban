'use client';
import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store';

export interface PersistProviderProps {
  children: ReactNode;
}

export const PersistProvider = ({ children }: PersistProviderProps) => (
  <PersistGate loading={null} persistor={persistor}>
    {children}
  </PersistGate>
);
