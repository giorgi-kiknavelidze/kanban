/* eslint-disable */
export default {
  displayName: 'kanban',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/kanban',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  },
};
