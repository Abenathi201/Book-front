import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';

import DropDown from './Dropdown';

const SeachBooks = ({ books, setSearchedBooks, setBooks }) => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        if (search) {
            const searchedBooks = books.filter(
                (book) => book.title.toLowerCase().includes(search.toLowerCase()) ||
                    book.author.toLowerCase().includes(search.toLowerCase())
            );

            setSearchedBooks(searchedBooks);
        } else {
            setSearchedBooks(books);
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: 'FFF',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search exercises..."
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        backgroundColor: '#FF2625',
                        color: '#FFF',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <DropDown books={books} setSearchedBooks={setSearchedBooks} />
        </Stack>
    )
}

export default SeachBooks