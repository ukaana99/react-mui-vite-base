import { useContext } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

import { LayoutContext } from '@/store/layout-context';

import { Drawer, DrawerHeader } from '../styled';

function MainDrawer() {
  const layoutContext = useContext(LayoutContext);
  const open = layoutContext.isDrawerOpen;

  const theme = useTheme();

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

  const _renderDrawerItems = () => {
    return (
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
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
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={layoutContext.closeDrawer}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider /> <Box sx={{ height: 24 }} />
      {_renderDrawerItems()}
    </Drawer>
  );
}
export default MainDrawer;
