const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      jak: ['var(--font-plus-jakarta-sans, "Plus Jakarta Sans")'],
    },
    fontSize: {
      sm: '0.75rem' /* 12px */,
      base: '0.813rem' /* 13px */,
      lg: '0.938rem' /* 15px */,
      xl: '1.125rem' /* 18px */,
      '2xl': '1.5rem' /* 24px */,
    },
    extend: {
      colors: {
        kb: {
          purple: '#635FC7',
          'purple-hover': '#A8A4FF',
          black: '#000112',
          'dark-bg': '#20212C',
          'light-bg': '#F4F7FD',
          'dark-gray': '#2B2C37',
          'medium-gray': '#828FA3',
          'lines-dark': '#3E3F4E',
          'lines-light': '#E4EBFA',
          red: '#EA5555',
          'red-hover': '#FF9898',
        },
      },
      borderWidth: {
        1: '0.0625rem',
      },
    },
  },
  plugins: [],
};
