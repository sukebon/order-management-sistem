import { Box } from '@mui/system';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SpinnerLoading from './SpinnerLoading';

type Props = {
  children: React.ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/login' || router.pathname === '/register' ? (
        <Box>{children}</Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Sidebar />
          <Box width='100%' position='relative'>
            <Header />
            {children}
          </Box>
        </Box>
      )}
      <SpinnerLoading />
    </>
  );
};

export default Layout;
