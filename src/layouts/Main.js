import React from 'react';
import Header from '../components/Template/Header';
import SideBar from '../components/Template/SideBar';
import Footer from '../components/Template/Footer';
const Main = (props) => (
    <>
        <Header/>
        {/* <SideBar/> */}
        <div id="wrapper">
            {props.children}
        </div>
        <Footer/>
    </>
);

export default Main;