import React from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authState, spinnerState } from '../../store';
import LeftDrawer from './LeftDrawer';
import { Grid, Menu, MenuItem, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
  const router = useRouter();
  const setCurrentUser = useSetRecoilState(authState);
  const setSpinner = useSetRecoilState<any>(spinnerState);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ログアウト
  const signOutUser = () => {
    setSpinner(true);
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        console.log('signout');
        router.push('/login');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  return (
    <Box component='header' bgcolor='white'>
      <Grid container px='24px' height='48px'>
        <Grid item xs={8} display='flex' alignItems='center'>
          <LeftDrawer />
          株式会社大丸白衣様
        </Grid>
        <Grid
          item
          xs={4}
          display='flex'
          alignItems='center'
          justifyContent='end'
        >
          <Box
            sx={{
              transition: 'all 0.2s',
              cursor: 'pointer',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
            }}
            width='40px'
            height='40px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius='50%'
            onClick={handleClick}
            bgcolor={open ? 'rgba(0, 0, 0, 0.04)' : 'white'}
          >
            <AccountCircleOutlinedIcon opacity='0.5' />
          </Box>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 40,
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={signOutUser}>Logout</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
