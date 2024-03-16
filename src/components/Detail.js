import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import Description from './Description';

const Detail = ({ singleBook }) => {
    const { title, image, author, summary, amount, categories } = singleBook;

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'column' }, p: '20px', alignItems:'center' }}>
            <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems:'center' }}>
                <img src={image} alt={title} className="detail-image" loading="lazy" />

                <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
                    <Typography variant="h2">
                        {title}
                    </Typography>

                    <Stack>
                        <Typography variant="h4">
                            R {amount}
                        </Typography>

                        <Button>
                            Add to Cart
                        </Button>
                    </Stack>                
                </Stack>
            </Stack>

            <Stack marginRight={77}>
                <Description summary={summary} author={author} />
            </Stack>
        </Stack>
    )
}

export default Detail;