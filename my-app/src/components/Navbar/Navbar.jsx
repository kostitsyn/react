import React from 'react';
import c from './Navbar.module.css';

const Navbar = () =>
    <nav className={c.nav}>
        <div className={`${c.item} ${c.active}`}><a href="/profile">Profile</a></div>
        <div className={c.item}><a href="/dialogs">Messages</a></div>
        <div className={c.item}><a href="/news">News</a></div>
        <div className={c.item}><a href="/music">Music</a></div>
        <div className={c.item}><a href="/settings">Settings</a></div>
    </nav>

export default Navbar;