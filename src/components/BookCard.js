import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Typography } from '@mui/material';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <CardContent>
                <div className="book-card_cover">
                    <div className="book-card_book">
                        <Link className="book-card_book-front" to={`/books/${book._id}`}>
                            <img className="book-card_img" src={book.image} alt={book.title} />
                        </Link>
                        <div className="book-card_book-back"></div>
                        <div className="book-card_book-side"></div>
                    </div>
                </div>
                <div>
                    <Typography variant="h6" className="book-card_title">
                        {book.title}
                    </Typography>
                    <Typography variant="subtitle1" className="book-card_author">
                        Author: {book.author}
                    </Typography>
                </div>
            </CardContent>
        </div>
    );
};

export default BookCard;