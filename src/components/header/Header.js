import Navbar from './navbar/Navbar';
import Hamburguer from './hamburguer/Hamburguer';
import Logo from './logo/Logo';
import AuthBtns from './auth-btns/AuthBtns';
import MobileNav from './mobile-nav/MobileNav';

import { useState } from 'react';

import './header.css';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);

    document.body.classList.toggle('no-scroll');
  };

  return (
    <header className='header'>
      <div className='container'>
        <Logo />

        <div className='navbar-container'>
          <Navbar />
        </div>

        <div className='auth-btns-container'>
          <AuthBtns />
        </div>

        <Hamburguer toggleMobileNav={toggleMobileNav} mobileNavOpen={mobileNavOpen} />
      </div>
      <MobileNav toggleMobileNav={toggleMobileNav} mobileNavOpen={mobileNavOpen} />
    </header>
  );
};

export default Header;
