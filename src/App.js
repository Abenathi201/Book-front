import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookDetail from './Pages/BookDetail';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1448px' }}} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:bookId" element={<BookDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile/:userId" element={<Profile />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App;