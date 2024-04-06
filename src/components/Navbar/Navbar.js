import React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import './Navbar.css';
import UserIcon from '../../assets/icons/user.svg';
import CartIcon from '../../assets/icons/amarok-cart-view.svg';
import Cart from '../Cart';
import MenuIcon from '../../assets/icons/menu-navigation-grid.svg';
import CloseIcon from '../../assets/icons/x-letter.svg';
// import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isNavigationActive, setIsNavigationActive] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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

    // const openCartModal = () => {
    //     setIsOpen(!isOpen);
    // };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const userData = localStorage.getItem('userData');

        if(userData) {
            setIsUserLoggedIn(true);
            const userIdData = JSON.parse(userData);
            setUserId(userIdData.userId);
        } else {
            setIsUserLoggedIn(false);
            setUserId(null);
        }
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
                        <img className="uil uil-times nav-close-btn" onClick={closeNavigation} src={CloseIcon} alt="Close-Icon" />

                        <Link to="/" className={`links ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('home'); closeNavigationAfterClick(); }}>Home</Link>

                        <Link to="/books" className={`links ${activeLink === 'books' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('books'); closeNavigationAfterClick(); }}>Books</Link>

                        {isUserLoggedIn ? (
                            <Link to={`/profile/${userId}`} className={`links btn-logout ${activeLink === 'logout' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('logout'); closeNavigationAfterClick(); }}> <img src={UserIcon} alt="userIcon" width={30} height={25} /> </Link>
                        ) : (
                            <Link to="/login" className={`links btn-login ${activeLink === 'login' ? 'active' : ''}`} onClick={() => { setActiveLinkHandler('login'); closeNavigationAfterClick(); }}>SignIn</Link>
                        )}

                        <Link className={`links btn-logout ${activeLink === 'logout' ? 'active' : ''}`} onClick={() => setIsOpen(true)}> <img src={CartIcon} alt="userIcon" width={30} height={25} /> </Link>

                    </div>
                </div>
                <img className="uil uil-apps nav-menu-btn" onClick={openNavigation} src={MenuIcon} alt="Menu-Icon" />
            </div>
            {  isOpen && <Cart setIsOpen={setIsOpen} />  }
        </header>
    );
};

export default Navbar;