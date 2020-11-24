import React from 'react';
import Header from '../components/Template/Header';
import Footer from '../components/Template/Footer';
const Main = (props) => (
    <>
        <Header/>
        <div id="wrapper">
            {props.children}
        </div>
        <Footer/>
    </>
);

export default Main;