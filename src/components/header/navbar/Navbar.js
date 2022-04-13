import menuLinks from '../menu-links';
import './navbar.css';

const Navbar = ({ toggleMobileNav }) => {
  return (
    <nav className='navbar'>
      <ul>
        {menuLinks.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url} onClick={toggleMobileNav}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
