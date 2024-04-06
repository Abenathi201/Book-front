import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { fetchData } from '../utils/fetchData'; // Import fetchData function

import googleIcon from '../assets/icons/google-icon.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem('userData', JSON.stringify(data));
      console.log('Login successful:', data);
      window.location.href = '/';
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Box>
        <Box>
          <Typography sx={{ fontSize: '36px', fontWeight: 'bold', color: '#525252' }}> Login to your account </Typography>
          <Typography sx={{ fontSize: '16px', color: '#525252', mt: '10px' }}> To order books and add them to your cart </Typography>
        </Box>
      </Box>

      <Box margin="auto">
        <button className="google-btn"> <img src={googleIcon} alt='google-icon' width={25} height={25} /> Continue with Google</button>
      </Box>

      <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#A1A1A1' }} margin="auto"> or Sign in With Your Email </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }} margin="auto">
        <TextField id="email" sx={{ width: '450px' }} label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Box>

      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}

      <Box>
        <button type="submit" className="submit-btn">Login</button>
      </Box>

    </Box>
  );
};

export default LoginForm;