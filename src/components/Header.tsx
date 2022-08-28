import React from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authState, spinnerState } from '../../store';
import { Grid, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LeftDrawer from './LeftDrawer';
import { theme } from '../theme';

const Header = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(authState);
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
        setCurrentUser('');
        router.push('/login');
        console.log('signout');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  return (
    <Box
      component='header'
      width='100%'
      position='sticky'
      top='0'
      bgcolor={theme.palette.primary.main}
    >
      <Box
        sx={{ px: { xs: 0, lg: 3 }, color: theme.palette.primary.contrastText }}
        height='48px'
        display='flex'
        justifyContent='space-between'
      >
        <Box display='flex' alignItems='center'>
          <LeftDrawer />
          <Box>{user?.displayName ? user?.displayName : 'no name'}様</Box>
        </Box>

        <Box display='flex' alignItems='center' justifyContent='end'>
          <Box
            sx={{
              transition: 'all 0.2s',
              cursor: 'pointer',
              '&:hover': { bgcolor: theme.palette.primary.light },
            }}
            width='40px'
            height='40px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius='50%'
            onClick={handleClick}
            bgcolor={open ? theme.palette.primary.light : ''}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
