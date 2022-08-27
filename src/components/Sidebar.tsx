import { Box } from '@mui/material';
import React from 'react';
import SidebarAccordionList from './SidebarAccordionList';
import SideMenuList from './SideMenuList';

const Sidebar = () => {
  return (
    <Box
      component='aside'
      flexShrink='0'
      minHeight='100vh'
      bgcolor='rgb(35, 48, 68)'
      boxShadow='1px 1px 2px #999'
      zIndex='10'
      sx={{
        width: 258,
        display: { xs: 'none', lg: 'block' },
      }}
    >
      <SideMenuList />
    </Box>
  );
};

export default Sidebar;
