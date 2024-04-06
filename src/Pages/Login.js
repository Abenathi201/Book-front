import React from 'react';
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import loginImage from '../assets/images/login3.png';

const Contact = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <Box sx={{ mt: { lg: '80px', xs: '70px' }, xl: { sm: '50px' }}} position="relative" p="20px">
            <Stack direction={'row'} gap={10}>
                <Box>
                    <img src={loginImage} alt="img-background" width={650}/>
                </Box>

                <Box>
                    {showLoginForm ? <LoginForm /> : <RegisterForm />}
                    <Typography sx={{ mt: '45px', fontSize: '18px', color: '#828282', cursor: 'pointer' }} margin="auto" onClick={toggleForm}>{showLoginForm ? "Not Registered? Create an Account" : "Already have an account? Login"}</Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Contact;