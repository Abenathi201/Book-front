import React from 'react';
import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import googleIcon from '../assets/icons/google-icon.svg';

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profileImg: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetchData('/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        console.log(response);
        window.location.reload();
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: { lg: '0px', xs: '30px' },
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}
    >
      <Box>
        <Box>
          <Typography sx={{ fontSize: '36px', fontWeight: 'bold', color: '#525252' }}> Create your account </Typography>
          <Typography sx={{ fontSize: '16px', color: '#525252', mt: '10px' }}> And order books and add them to your cart </Typography>
        </Box>
      </Box>

      <Box margin="auto">
        <button className="google-btn"> <img src={googleIcon} alt='google-icon' width={25} height={25} /> Register with Google</button>
      </Box>

      <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#A1A1A1' }} margin="auto"> or Sign Up With Your Email </Typography>

      <Box sx={{  display: 'flex', flexDirection: 'column', gap: '30px'  }} margin="auto">
        <TextField id="name" sx={{ width: '450px' }} label="Name" variant="outlined" value={userData.name} onChange={handleChange} />
        <TextField id="email" sx={{ width: '450px' }} label="Email" variant="outlined" value={userData.email} onChange={handleChange} />
        <TextField id="profileImg" sx={{ width: '450px' }} label="Image" variant="outlined" value={userData.profileImg} onChange={handleChange} />
        <TextField id="password" label="Password" variant="outlined" value={userData.password} onChange={handleChange} />
      </Box>

      <Box>
        <button type="submit" className="submit-btn">Register</button>
      </Box>
    </Box>
  )
}

export default RegisterForm;