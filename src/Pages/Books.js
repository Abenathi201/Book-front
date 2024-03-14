import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import BookCard from '../components/BookCard';
import SeachBooks from '../components/SeachBooks';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const fetchedBooks = await fetchData('/books');
                console.log("Fetched books:", fetchedBooks);
                setBooks(fetchedBooks);
                setSearchedBooks(fetchedBooks);
            } catch (error) {
                console.log("Failed to fetch data", error.message);
            }
        }
        fetchBooks();
    }, []);

    return (
        <Box sx={{ mt: { lg: '130px', xs: '70px' }, xl: { sm: '50px' }}} position="relative" p="20px">
            <Typography variant="h4" gutterBottom>
                Books
            </Typography>

            <SeachBooks setSearchedBooks={setSearchedBooks} books={books} setBooks={setBooks} />
            <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="center" sx={{ gap: { lg: '110px', xs: '50px' }}}>
                {searchedBooks.length > 0 ? (
                searchedBooks.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))
                ) : (
                    <Typography variant="body1">Loading...</Typography>
                )}
            </Stack>
        </Box>
    )
}

export default Books;