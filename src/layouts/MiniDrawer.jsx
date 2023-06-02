import { useContext, useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { styled, useTheme } from '@mui/material/styles';

import { FlexBox } from '@/components/styled';
import { Images } from '@/constants';
import { ThemeContext } from '@/store/theme-context';

import { CreateButton } from './styled';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  borderWidth: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  borderWidth: 0,

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function MiniDrawer() {
  const themeContext = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const themeMode = theme.palette.mode;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const _renderDrawerItems = () => {
    const items = [
      {
        path: '/',
        text: 'Home',
        icon: <HomeIcon />,
      },
      {
        path: '/',
        text: 'Documents',
        icon: <PictureAsPdfIcon />,
      },
      {
        path: '/',
        text: 'QR Code',
        icon: <QrCodeScannerIcon />,
      },
      {
        path: '/',
        text: 'Insights',
        icon: <InsightsIcon />,
      },
      {
        path: '/',
        text: 'More',
        icon: <TextSnippetIcon />,
      },
    ];
    return (
      <List>
        {items.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 60,
                justifyContent: open ? 'initial' : 'center',
                px: 3,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color="inherit" elevation="0" position="fixed" open={open}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <Box
              component="img"
              src={themeMode === 'dark' ? Images.petronasBw : Images.petronasRgb}
              alt={'Home'}
              sx={{
                px: '22px',
                width: 80,
                height: 64,
                objectFit: 'contain',
                ...(open && { display: 'none' }),
              }}
            />
            <Box sx={{ width: 12 }} />
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={themeMode === 'dark' ? Images.eptwDark : Images.eptwLight}
              alt={'ePTW+'}
              sx={{ width: 82, objectFit: 'contain' }}
            />
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Create new item" arrow>
                <CreateButton
                  startIcon={<AddIcon />}
                  disableElevation
                  size="large"
                  variant="contained"
                >
                  Create
                </CreateButton>
              </Tooltip>
            </FlexBox>
            <Box sx={{ width: 12 }} />
            <Tooltip title="Switch theme" arrow>
              <IconButton size="large" color="inherit" onClick={themeContext.toggleMode}>
                {themeContext.theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Setting" arrow>
              <IconButton size="large" color="inherit">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notification" arrow>
              <IconButton size="large" color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile" arrow>
              <IconButton size="large" color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Box sx={{ width: 12 }} />
          </FlexBox>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider /> <Box sx={{ height: 24 }} />
        {_renderDrawerItems()}
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box> */}
    </Box>
  );
}
export default MiniDrawer;
