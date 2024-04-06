import React from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';
import Latest from '../components/Latest';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <Categories />
            <Latest />
        </Box>
    )
}

export default Home;