import { deepmerge } from '@mui/utils';

import { Colors } from '@/constants';

import sharedTheme from './shared';

const themes = {
  default: sharedTheme,
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: Colors.light.backgroundDefault,
        paper: Colors.light.backgroundPaper,
      },
      primary: {
        main: Colors.light.primary,
        dark: Colors.light.primaryDark,
        light: Colors.light.primaryLight,
        contrastText: Colors.light.contrastText,
      },
      secondary: {
        main: Colors.light.secondary,
        dark: Colors.light.secondaryDark,
        light: Colors.light.secondaryLight,
        contrastText: Colors.light.contrastText,
      },
      neutral: {
        main: Colors.light.neutral,
        dark: Colors.light.neutralDark,
        light: Colors.light.neutralLight,
        contrastText: Colors.light.contrastText,
      },
      neutral2: {
        main: Colors.light.neutral2,
        dark: Colors.light.neutral2Dark,
        light: Colors.light.neutral2Light,
        contrastText: Colors.light.contrastText,
      },
      info: {
        main: Colors.light.info,
        dark: Colors.light.infoDark,
        light: Colors.light.infoLight,
        contrastText: Colors.light.contrastText,
      },
      success: {
        main: Colors.light.success,
        dark: Colors.light.secondaryDark,
        light: Colors.light.successLight,
        contrastText: Colors.light.contrastText,
      },
      warning: {
        main: Colors.light.warning,
        dark: Colors.light.warningDark,
        light: Colors.light.warningLight,
        contrastText: Colors.light.contrastText,
      },
      error: {
        main: Colors.light.error,
        dark: Colors.light.errorDark,
        light: Colors.light.errorLight,
        contrastText: Colors.light.contrastText,
      },
      text: {
        primary: Colors.light.textPrimary,
        secondary: Colors.light.textSecondary,
        hint: Colors.light.textHint,
        disabled: Colors.light.textDisabledext,
      },
      divider: Colors.light.divider,
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: Colors.dark.backgroundDefault,
        paper: Colors.dark.backgroundPaper,
      },
      primary: {
        main: Colors.dark.primary,
        dark: Colors.dark.primaryDark,
        light: Colors.dark.primaryLight,
        contrastText: Colors.dark.primaryContrastText,
      },
      secondary: {
        main: Colors.dark.secondary,
        dark: Colors.dark.secondaryDark,
        light: Colors.dark.secondaryLight,
        contrastText: Colors.dark.secondaryContrastText,
      },
      neutral: {
        main: Colors.dark.neutral,
        dark: Colors.dark.neutralDark,
        light: Colors.dark.neutralLight,
        contrastText: Colors.dark.neutralContrastText,
      },
      neutral2: {
        main: Colors.dark.neutral2,
        dark: Colors.dark.neutral2Dark,
        light: Colors.dark.neutral2Light,
        contrastText: Colors.dark.neutral2ContrastText,
      },
      info: {
        main: Colors.dark.info,
        dark: Colors.dark.infoDark,
        light: Colors.dark.infoLight,
        contrastText: Colors.dark.infoContrastText,
      },
      success: {
        main: Colors.dark.success,
        dark: Colors.dark.secondaryDark,
        light: Colors.dark.successLight,
        contrastText: Colors.dark.successContrastText,
      },
      warning: {
        main: Colors.dark.warning,
        dark: Colors.dark.warningDark,
        light: Colors.dark.warningLight,
        contrastText: Colors.dark.warningContrastText,
      },
      error: {
        main: Colors.dark.error,
        dark: Colors.dark.errorDark,
        light: Colors.dark.errorLight,
        contrastText: Colors.dark.errorContrastText,
      },
      text: {
        primary: Colors.dark.textPrimary,
        secondary: Colors.dark.textSecondary,
        hint: Colors.dark.textHint,
        disabled: Colors.dark.textDisabledext,
      },
      divider: Colors.dark.divider,
    },
  }),
};

export default themes;
