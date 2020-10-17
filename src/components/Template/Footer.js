import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../../data/contact';
const Footer = () => (
    <footer id="footer">
        <ul className="icons" >
        {data.map((item) => (
        <li key={item.label}>
            <a href={item.link}>
            <FontAwesomeIcon icon={item.icon} />
            </a>
        </li>
        ))}
        </ul>
    </footer>
)

export default Footer;