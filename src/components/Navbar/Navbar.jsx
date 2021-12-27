import React from 'react';
import MainNavbar from './MainNavbar/MainNavbar';
import AdditionalNavbar from './AdditionalNavbar/AdditionalNavbar';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={c.navbar}>
            <MainNavbar/>
            <AdditionalNavbar/>
        </nav>
    );
}

export default Navbar;