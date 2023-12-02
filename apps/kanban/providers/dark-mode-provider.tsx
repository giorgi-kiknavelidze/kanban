'use client';

import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { useDarkMode } from '../hooks';

export interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const { isDarkMode } = useDarkMode();
  return <div className={clsx(isDarkMode && 'dark')}>{children}</div>;
};
