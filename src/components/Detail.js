import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import Description from './Description';
import { fetchData } from '../utils/fetchData';

const Detail = ({ singleBook, userId }) => {
    const { _id, title, image, author, summary, amount, categories } = singleBook;

    const handleAddToCart = async () => {
        try {
            const response = await fetchData(`/cart/${userId}/addCartItem`, {
                method: 'POST',
                headers: {  'Content-Type': 'application/json'  },
                body: JSON.stringify({
                    bookId: _id,
                    quantity: 1
                })
            });
    
            if (response.status === 200) {
                alert('Item added')
            }
        } catch (error) {
            console.error('Error adding item to the cart:', error);
        }
    };
    

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

                        <Button onClick={handleAddToCart}>
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