import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BookCard = ({ book }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <img src={book.image} alt={book.title} width={60} />
                <Typography variant="subtitle1">Author: {book.author}</Typography>
                {/* Add other book details as needed */}
            </CardContent>
        </Card>
    );
};

export default BookCard;