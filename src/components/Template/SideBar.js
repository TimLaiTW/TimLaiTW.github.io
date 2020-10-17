import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const SideBar = () => (
    <sidebar id="sidebar">
        <Link to="/">
            <img className="logo" src='/profile.jpg' alt='profile' width="150" height="150"/>
        </Link>
        <Footer />
    </sidebar>
)

export default SideBar;