import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const SideBar = () => (
    <sidebar id="sidebar">
        <Link to="/">
            <img className="logo" src='/img/profile.jpg' alt='profile' width="150" height="150"/>
        </Link>
        <div className="sidebarTitle">
            <h3><a href="mailto:timlai1208@gmail.com">TAI-LIN LAI</a></h3>
        </div>
        <div className="bio">
            <p className="bio-title">About</p>
            <p className="bio-content">Hi, I'm TaiLin Lai. I like to explore new things. I am a UMass Boston CS graduate. Before working at Mustard Seed Capital llc, I was worked at UMB, Compal and D-Link.</p>
        </div>
        <Footer />
    </sidebar>
)

export default SideBar;