import { Colors } from '@/constants';

const sharedTheme = {
  palette: {
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
};
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

export default sharedTheme;
