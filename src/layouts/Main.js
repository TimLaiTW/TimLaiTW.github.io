import React from 'react';
import Header from '../components/Template/Header';

const Main = (props) => (
    <>
        <Header/>
        <div id="wrapper">
            {props.children}
        </div>
    </>
);

export default Main;