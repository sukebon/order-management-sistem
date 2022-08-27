import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import React from 'react';
import { Box } from '@mui/system';
import Link from 'next/link';
import SidebarAccordionList from './SidebarAccordionList';

const SideMenuList = () => {
  return (
    <>
      <Box
        sx={{ fontSize: 16, fontWeight: 'bold', m: 0, p: 0 }}
        width='100%'
        height='48px'
        color='white'
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderBottom='1px solid #5f627a42'
      >
        オンラインシステム
      </Box>
      <Divider />
      <List>
        {['トップ', '商品', 'お問い合わせ'].map((text: any, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#eee' }}>
                {index === 0 && <HomeIcon />}
                {index === 1 && <InventoryIcon />}
                {index === 2 && <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  color: '#eee',
                  fontWeight: 'medium',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SideMenuList;
