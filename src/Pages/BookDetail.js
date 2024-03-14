import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';

const BookDetail = () => {
    const { bookId } = useParams();
    const [singleBook, setSingleBook] = useState({});

    useEffect(() => {
        if (bookId) {
            const fetchSingleBook = async () => {
                try {
                    const fetchedBook = await fetchData(`/books/${bookId}`);
                    console.log("Single Book:", fetchedBook);
                    setSingleBook(fetchedBook);
                } catch (error) {
                    console.error("Error fetching single book:", error);
                }
            }
            fetchSingleBook();
        }
    }, [bookId])

    return (
        <Box sx={{ mt: { lg: '130px', xs: '70px' }, xl: { sm: '50px' }}} position="relative" p="20px">
            {singleBook ? (
                <Box>
                    <Detail singleBook={singleBook} />
                </Box>
            ) : (
                <div>Loading...</div>
            )}
        </Box>
    )
}

export default BookDetail;