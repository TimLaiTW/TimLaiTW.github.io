import React from 'react';
import data from '../../data/contact';
const Footer = () => (
    <footer className="footer" id='footer'>
        <ul className="icons" >
        {data.map((item) => (
        <li key={item.label}>
            <a href={item.link}>
            <i class={item.icon} />
            </a>
        </li>
        ))}
        </ul>
    </footer>
)

export default Footer;