import { Box } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box component='main' p='20px'>
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
  );
};

export default Home;
