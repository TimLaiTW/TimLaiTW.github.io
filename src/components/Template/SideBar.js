import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const SideBar = () => (
    <sidebar id="sidebar">
        <Link to="/">
            <img className="logo" src='/img/profile.jpg' alt='profile' width="150" height="150"/>
        </Link>
        <div className="sidebarTitle">
            <h2>TAI-LIN LAI</h2>
            <p><a href="mailto:timlai1208@gmail.com">TIMLAI1208@GMAIL.COM</a></p>
        </div>
        <div className="bio">
            <h4>About</h4>
            <p>Hi, I'm TaiLin Lai. I like to explore new things. I am a UMB CS graduate and FJU alumni. Before working at Mustard Seed Capital llc, I was at UMB, Compal and D-Link.</p>
        </div>
        <Footer />
    </sidebar>
)

export default SideBar;