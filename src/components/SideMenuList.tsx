import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NextPage } from 'next';
import { theme } from '../theme';
import Link from 'next/link';

const SideMenuList: NextPage<any> = () => {
  const [openProduct, setOpenProduct] = React.useState(false);
  const [openOrder, setOpenOrder] = React.useState(false);

  const handleClickProduct = () => {
    setOpenProduct(!openProduct);
  };

  const handleClickOrder = () => {
    setOpenOrder(!openOrder);
  };

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader
            component='div'
            id='nested-list-subheader'
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Order 管理システム
          </ListSubheader>
        }
      >
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'トップページ'} />
        </ListItemButton>

        {/* リスト「商品」 */}
        <ListItemButton onClick={handleClickProduct}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='商品' />
          {openProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openProduct} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {[
              { title: '商品一覧', link: '/products' },
              { title: '新規登録', link: '/products/new' },
              { title: '在庫照会', link: '' },
            ].map((item, index) => (
              <Link href={item.link} key={item.title}>
                <a>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </a>
              </Link>
            ))}
          </List>
        </Collapse>

        {/* リスト「受発注」 */}
        <ListItemButton onClick={handleClickOrder}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='入出荷履歴' />
          {openOrder ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openOrder} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {[
              { title: '注文履歴', link: '' },
              { title: '入荷履歴', link: '' },
              { title: '在庫照会', link: '' },
            ].map((item, index) => (
              <Link href={item.link} key={item.title}>
                <a>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </a>
              </Link>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default SideMenuList;
