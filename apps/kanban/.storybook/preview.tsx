import { Preview } from '@storybook/react';
import React from 'react';
import { StoreInitialStateProvider, StoreProvider } from '../providers';
import '../app/global.css';

export const parameters = {
  darkMode: {
    darkClass: 'dark',
    classTarget: 'html',
    stylePreview: true,
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <StoreProvider>
        <StoreInitialStateProvider />
        <Story />
      </StoreProvider>
    ),
  ],
};

export default preview;
