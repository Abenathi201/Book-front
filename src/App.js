import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import "./App.css";
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookDetail from './Pages/BookDetail';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1448px' }}} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:bookId" element={<BookDetail />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App;