import { useContext } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';

import { FlexBox } from '@/components/styled';
import { Images } from '@/constants';
import { LayoutContext } from '@/store/layout-context';

import { AppBar, CreateButton } from '../styled';

function MainAppBar() {
  const layoutContext = useContext(LayoutContext);
  const open = layoutContext.isDrawerOpen;

  const theme = useTheme();
  const themeMode = theme.palette.mode;

  return (
    <AppBar color="inherit" elevation={0} position="fixed" open={open}>
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
            onClick={layoutContext.openDrawer}
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
            <IconButton size="large" color="inherit" onClick={layoutContext.toggleMode}>
              {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
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
  );
}

export default MainAppBar;
