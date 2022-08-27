import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { authState, spinnerState } from '../../store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const setCurrentUser = useSetRecoilState<any>(authState);
  const setSpinner = useSetRecoilState<any>(spinnerState);

  if (auth.currentUser !== null) {
    router.push('/');
  }

  const signInUser = () => {
    setSpinner(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user.uid);
        router.push('/');
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box
        sx={{
          width: { xs: '95%', sm: '100%' },
          maxWidth: '400px',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          bgcolor: 'white',
          borderRadius: 2,
        }}
      >
        <Box component='h1' sx={{ fontSize: 24, fontWeight: 'bold' }}>
          Login
        </Box>
        <FormControl>
          <TextField
            sx={{ m: 2, width: '300px' }}
            helperText='Please enter your Email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ m: 2, width: '300px' }}
            helperText='Please enter your password'
            label='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button variant='contained' onClick={signInUser}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
