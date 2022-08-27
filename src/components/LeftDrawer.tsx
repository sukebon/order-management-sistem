import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenuList from './SideMenuList';
import SidebarAccordionList from './SidebarAccordionList';
import { height } from '@mui/system';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const LeftDrawer = () => {
  const [state, setState] = React.useState(false);

  const f = (a: any) => () => {
    console.log(a);
  };
  f('a');

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{
        bgcolor: 'rgb(35, 48, 68)',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: 258,
        }}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <SideMenuList />
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: { xs: 'block', lg: 'none' },
        }}
      >
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          sx={{
            display: {
              xs: 'display',
              lg: 'none',
            },
          }}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(false)}
        >
          {list()}
          <Box minHeight='auto' bgcolor='rgb(35, 48, 68)'></Box>
        </SwipeableDrawer>
      </Box>
    </>
  );
};
export default LeftDrawer;
