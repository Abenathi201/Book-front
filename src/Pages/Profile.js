import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import UserInfo from '../components/UserInfo';

const Profile = () => {
    const { userId } = useParams();
    const [showData, setShowData] = useState(true);
    const [userName, setUserName] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            const getUserName = async () => {
                try {
                    const fetchedName = await fetchData(`/users/${userId}`);
                    setUserName(fetchedName);
                    console.log("name fetched");
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            }
            getUserName();
        }
    }, [userId]);

    const handleLogout = () => {
      localStorage.removeItem('userData');
      navigate('/login');
    };

    return (
      <Box sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: { lg: '130px', xs: '70px' }, xl: { sm: '50px' }}} position="relative" p="20px">
        <Box sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '30px' }}>

          <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
            <div className="welcome"></div> Hello {userName.name} 
          </Typography>

          <Typography variant='h5' textAlign='start'> Welcome to you account </Typography>

          <button onClick={() => setShowData(true)} className="submit-btn"> MyInfo </button>

          <button onClick={handleLogout} className="submit-btn"> Logout </button>
        </Box>

        <Box sx={{ flex:1, mt: '70px' }}>
          { showData && <UserInfo userId={userId} /> }
        </Box>
      </Box>
    )
}

export default Profile;