import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../store';

const Home: NextPage = () => {
  const [currentUser, setCurrentUser] = useRecoilState(authState);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);
  return (
    <>
      {currentUser && (
        <Box
          component='main'
          p='20px'
          bgcolor='#f4f4f4'
          sx={{ minHeight: 'calc(100vh - 48px)' }}
        >
          <h1>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h1>
          <Box
            component='section'
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: {
                xs: 'repeat(1,1fr)',
                sm: 'repeat(2,1fr)',
                md: 'repeat(3,1fr)',
              },
            }}
          >
            <Box sx={{ bgcolor: 'white' }}>text</Box>
            <Box sx={{ bgcolor: 'white' }}>text</Box>
            <Box sx={{ bgcolor: 'white' }}>text</Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
