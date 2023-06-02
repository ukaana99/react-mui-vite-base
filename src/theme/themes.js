import { deepmerge } from '@mui/utils';

import sharedTheme from './shared';

const themes = {
  default: sharedTheme,
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#f0f2f5',
        paper: '#ffffff',
      },
      primary: {
        light: '#00a19c',
        main: '#00908c',
        dark: '#007d79',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#693887',
      },
      info: {
        main: '#0053a5',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111111',
        paper: '#181818',
      },
      primary: {
        light: '#42307d',
        main: '#acd1cf',
        dark: '#74b8b5',
        contrastText: '#007874',
      },
      secondary: {
        main: '#bfa4d6',
      },
      info: {
        main: '#8cc7f8',
      },
    },
  }),
};

export default themes;
