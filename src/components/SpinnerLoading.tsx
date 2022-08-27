import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useRecoilValue } from 'recoil';
import { spinnerState } from '../../store';

export default function SpinnerLoading() {
  const spinner = useRecoilValue(spinnerState);
  return (
    <>
      {spinner && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: 100,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
