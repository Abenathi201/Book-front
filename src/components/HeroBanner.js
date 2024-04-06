import React from 'react';
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import images from '../constants/images';

import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';
import vector from '../assets/icons/Vector.svg';
import circle from '../assets/icons/circle.svg';

const HeroBanner = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const previous = () => {
        setCurrentImage(currentIndex => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    };

    const next = () => {
        setCurrentImage(currentIndex => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    }

    const goToImage = (index) => {
        setCurrentImage(index);
    }

    return (
        <Box
            sx={{ mt: { lg: '100px', xs: '70px' }, xl: { sm: '50px' }}}
            p="20px"
            className="hero_banner"
        >
            <img src={leftArrow} className="left_arrow" alt="left-arrow" onClick={previous} />

            <Box sx={{ width: '607px', height: '433px' }}>
                <Typography sx={{ fontSize: '55px', fontWeight: '600' }}> Journey Through Pages, Explore Worlds </Typography>

                <Typography sx={{ fontSize: '22px', fontWeight: '500', mt: '30px' }}> Embark on a literary adventure with Book Vault. Discover new authors, explore diverse cultures, and let your imagination soar with every turn of the page. </Typography>

                <button className="banner_btn">Read More <img className="vector" src={vector} alt="vector" /></button>

                <Box sx={{ mt: '20px', display: 'flex', gap: '15px' }}>
                    {images.map((_, index) => (
                        <img
                            key={index}
                            src={circle}
                            alt={`circle-${index}`}
                            className={currentImage === index ? "active-circle" : ""}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </Box>
            </Box>

            <Stack className="hero">
                <img className="hero_img" src={images[currentImage].src} alt={images[currentImage].alt} width={500} height={550} />
            </Stack>

            <img src={rightArrow} className="right_arrow" alt="right-arrow" onClick={next} />
        </Box>
    )
}

export default HeroBanner