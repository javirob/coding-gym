import Navbar from '../navbar/Navbar';
import AuthBtns from '../auth-btns/AuthBtns';

import './mobile-nav.css';

const MobileNav = ({ mobileNavOpen, toggleMobileNav }) => {
  return (
    <nav className={`mobile-nav ${!mobileNavOpen && 'hidden'}`}>
      <Navbar toggleMobileNav={toggleMobileNav} />
      <AuthBtns />
    </nav>
  );
};

export default MobileNav;
