import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const DropDown = ({ books, setSearchedBooks }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const categories = event.target.value;
        if (categories === '') {
            setSearchedBooks(books);
        } else {
            const filteredBooks = books.filter((book) => book.categories === categories);
            setSearchedBooks(filteredBooks);
        }
        setSelectedCategory(categories);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
                labelId="category-label"
                id="category"
                value={selectedCategory}
                label="Category"
                onChange={handleCategoryChange}
            >
                <MenuItem value="">All</MenuItem>
                {books.map((book) => (
                    <MenuItem key={book.id} value={book.categories}>
                        {book.categories}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default DropDown;