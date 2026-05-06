import clsx from 'clsx';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import glass from '../assets/glass.svg';
import usaFlag from '../assets/usa_flag.svg';
import figure from '../assets/figure.svg';

function Header() {
  return (
    <header className={clsx('header', 'container')}>
      <h1>
        <Link to="/">
          <img src={logo} alt="Polar Express logo" />
        </Link>
      </h1>

      <nav className={clsx('nav')}>
        <ul className={clsx('menu', 'menu__links')}>
          <li><Link to="/tracking">Tracking</Link></li>
          <li><Link to="/shipping">Shipping</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>

        <ul className={clsx('menu', 'menu__icons')}>
          <li><img src={glass} alt="Search" /></li>
          <li><img src={usaFlag} alt="USA flag" /></li>
          <li><img src={figure} alt="Profile" /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;