import React from 'react';
import data from '../../data/contact';
import { Link } from 'react-router-dom';
const Footer = () => (
    <footer className="footer" id='footer'>
        <Link to='/' className='ftr-logo'>
            T.LAI <i class="fas fa-dice-d6" />
        </Link>
        <ul className="ftr-menu" >
            <small class='website-rights'>T.LAI © 2020</small>
            {data.map((item) => (
            <li key={item.label} className='ftr-item'>
                <a href={item.link}>
                <i class={item.icon} />
                </a>
            </li>
            ))}
        </ul>
    </footer>
)

export default Footer;