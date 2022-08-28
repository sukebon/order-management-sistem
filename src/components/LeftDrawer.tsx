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
import { Collapse, ListSubheader } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import InventoryIcon from '@mui/icons-material/Inventory';
import { theme } from '../theme';

const LeftDrawer = () => {
  const [state, setState] = React.useState(false);

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

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const list = () => (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader
            component='div'
            id='nested-list-subheader'
            sx={{
              textAlign: 'center',
            }}
          >
            Order 管理システム
          </ListSubheader>
        }
      >
        {[
          { title: 'トップページ', link: '/' },
          { title: 'お問い合わせ', link: '/contact' },
        ].map((item, index) => (
          <ListItemButton
            key={item.title}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>

      <ListItemButton
        onClick={() => {
          handleClick();
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='商品' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {[
            { title: '在庫照会', link: '' },
            { title: '発注', link: '' },
          ].map((item, index) => (
            <ListItemButton
              key={item.title}
              sx={{ pl: 4 }}
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );

  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: 'flex', lg: 'none' },
          alignItems: 'center',
        }}
      >
        <MenuIcon sx={{ color: theme.palette.primary.contrastText }} />
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
        <Box
          sx={{
            width: 258,
            minHeight: '100vh',
          }}
          role='presentation'
        >
          {list()}
        </Box>
      </SwipeableDrawer>
    </>
  );
};
export default LeftDrawer;
