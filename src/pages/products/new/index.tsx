import { Box, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from '../../../../store';

const ProductsNew = () => {
  const currentUser = useRecoilValue(authState);
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
          <Container maxWidth='sm' sx={{ p: 2, bgcolor: 'white' }}>
            <Typography variant='h6' gutterBottom>
              新規商品登録
            </Typography>
            <TextField
              helperText=''
              id='demo-helper-text-aligned'
              label='商品コード'
              sx={{ mt: 2 }}
            />
            <TextField
              helperText=''
              id='demo-helper-text-aligned-no-helper'
              label='商品名'
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              helperText=''
              id='demo-helper-text-aligned-no-helper'
              label=''
              sx={{ mt: 2 }}
              fullWidth
            />
          </Container>
        </Box>
      )}
    </>
  );
};

export default ProductsNew;
