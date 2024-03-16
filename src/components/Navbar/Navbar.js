import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import "./Navbar.css";
// import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isNavigationActive, setIsNavigationActive] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    const openNavigation = () => {
        setIsNavigationActive(true);
    };

    const closeNavigation = () => {
        setIsNavigationActive(false);
    };

    const closeNavigationAfterClick = () => {
        setIsNavigationActive(false);
    };

    const setActiveLinkHandler = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <div className="nav-bar">
                <Link to="/" className="logo">
                    {/* <img src={Logo} alt="Logo" style={{ width: '150px', height: '130px', borderRadius: '50%' }} /> */}
                    <Typography> Book Vault </Typography>
                </Link>

                <div className={`navigation ${isNavigationActive ? 'active' : ''}`}>
                    <div className="nav-items">
                        <i className="uil uil-times nav-close-btn" onClick={closeNavigation}></i>
                        <Link to="/" className={`links ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('home'); closeNavigationAfterClick(); }}>Home</Link>
                        <Link to="/books" className={`links ${activeLink === 'about' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('about'); closeNavigationAfterClick(); }}>Books</Link>
                        <Link to="/contact" className={`links ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('projects'); closeNavigationAfterClick(); }}>Contact</Link>
                    </div>
                </div>
                <i className="uil uil-apps nav-menu-btn" onClick={openNavigation}></i>
            </div>
        </header>
    );
};

export default Navbar;