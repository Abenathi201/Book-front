import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';

import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';
import bannerImage from '../assets/images/Anna Friends Books.png';

const HeroBanner = () => {
    return (
        <Box
            sx={{ mt: { lg: '212px', xs: '70px' }, xl: { sm: '50px' }}}
            // position="relative"
            p="20px"
            className="w-full h-11 flex justify-center items-center"
        >
            <img src={leftArrow} alt="left-arrow" />

            <Stack className="flex-row justify-center justify-items-center content-center">
                <img src={bannerImage} alt="banner" width={500} height={550} />
            </Stack>

            <img src={rightArrow} alt="right-arrow" />
        </Box>
    )
}

export default HeroBanner
