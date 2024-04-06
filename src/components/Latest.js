import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import rightArrow from '../assets/icons/arrow.svg';

const Latest = () => {
    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        const fetchLatestBooks = async () => {
            try {
                const latestBooks = await fetchData('/books/latest');
                setLatestBooks(latestBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchLatestBooks();
    }, []);

    return (
        <Box sx={{ mt: '60px', background: "#FCECEC", padding: '10px' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'normal', textAlign: 'center', color: '#7A7A7A' }}> Top Quality Books </Typography>
            <Typography sx={{ fontSize: '48px', fontWeight: '600', textAlign: 'center' }}> Newly Released Books</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: '20px' }}>
                {latestBooks.map((book) => (
                    <Box
                        key={book._id}
                        sx={{
                            width: '326px',
                        }}
                    >
                        <Box sx={{ background: '#808080', width: '326px', height: '437px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link to={`/books/${book._id}`}>
                                <img src={book.image} alt={book.title} width={227} height={330} />
                            </Link>
                        </Box>
                        <Typography sx={{ fontSize: '21px', fontWeight: '600', textAlign: 'center' }}>{book.title}</Typography>
                        <Typography sx={{ fontSize: '17px', fontWeight: 'normal', textAlign: 'center' }}>{book.author}</Typography>
                        <Typography sx={{ fontSize: '19px', fontWeight: 'bold', textAlign: 'center' }}>R {book.amount}</Typography>
                    </Box>
                ))}
            </Box>
            <hr/>
            <Link to={`/books`}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'end' }}> View All Books <img src={rightArrow} alt='left-arrow' /></Typography>
            </Link>
        </Box>
    );
};

export default Latest;