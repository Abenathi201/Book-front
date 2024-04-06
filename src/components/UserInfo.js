import React from 'react';
import { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';

const UserInfo = ({ userId }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (userId) {
            const fetchUser = async () => {
                try {
                    const fetcheduser = await fetchData(`/users/${userId}`);
                    setUserData(fetcheduser);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            }
            fetchUser();
        }
    }, [userId]);

    const handleUpdateUser = async () => {
        try {
            await fetchData(`/users/update/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })
            alert('User Updated');
            window.location.href = `/profile/${userId}`;
        } catch (error) {
            console.error('Failed to update the user: ', error);
            alert('Failed to update the user')
        }
    };

    return (
      <Box>
        <Typography variant='h2'> Edit your details </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', mt: '30px' }} margin="auto">
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                type="text"
                sx={{ width: '450px' }}
                value={userData.name || ''}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />

            <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                sx={{ width: '450px' }}
                value={userData.email || ''}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />

            <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                sx={{ width: '450px' }}
                value={userData.password || ''}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
        </Box>

        <Box margin="auto" sx={{ mt: '30px' }}>
            <button onClick={handleUpdateUser} className='submit-btn'> Save </button>
        </Box>
      </Box>
    );
};

export default UserInfo;