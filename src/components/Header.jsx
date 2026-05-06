import clsx from 'clsx';

import logo from '../assets/logo.svg';
import glass from '../assets/glass.svg';
import usaFlag from '../assets/usa_flag.svg';
import figure from '../assets/figure.svg';

function Header() {
  return (
    <header className={clsx('header', 'container')}>
      <h1>
        <img src={logo} alt="Polar Express logo" />
      </h1>

      <nav className={clsx('nav')}>
        <ul className={clsx('menu', 'menu__links')}>
          <li><a href="#">Tracking</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Services</a></li>
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