import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import categoryImages from '../constants/categoriesImg';

import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';

const Categories = () => {
  const [startIndex, setStartIndex] = useState(0); // Index of the first visible category

  const previousPage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const nextPage = () => {
    if (startIndex < categoryImages.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <Box sx={{ mt: '50px' }}>
      <Box className="top" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', marginLeft: '15px' }}>
            <hr className="hr_line" />
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}> Categories </Typography>
          </Box>
          <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}> Explore Our Top Categories </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '30px' }}>
          <img src={leftArrow} alt="left-arrow" className="categories_arrows" onClick={previousPage} />
          <img src={rightArrow} alt="right-arrow" className="categories_arrows" onClick={nextPage} />
        </Box>
      </Box>

      <Box className="category_slider" sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
        {categoryImages.slice(startIndex, startIndex + 3).map((category) => (
          <Box key={category.id} className="category_image">
            <img src={category.src} alt={category.alt} style={{ width: '404px', height: '241px', borderRadius: '10px' }} />
            <Typography sx={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>{category.alt}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;