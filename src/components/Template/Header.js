import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              T.LAI
              <i class="fas fa-dice-d6" />
          </Link>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}

  export default Header;