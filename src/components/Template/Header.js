import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Header = () => (
    <header id="header">
      <h3 className="index-links">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h3>  
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  export default Header;