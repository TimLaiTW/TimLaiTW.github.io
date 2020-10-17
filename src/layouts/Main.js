import React from 'react';
import Header from '../components/Template/Header';
import SideBar from '../components/Template/SideBar';
const Main = (props) => (
    <>
        <Header/>
        <SideBar/>
        <div id="wrapper">
            {props.children}
        </div>
    </>
);

export default Main;