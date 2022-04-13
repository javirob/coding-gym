import './hamburguer.css';

const Hamburguer = ({ mobileNavOpen, toggleMobileNav }) => {
  return (
    <button className={`hamburguer-btn ${mobileNavOpen && 'open'}`} onClick={toggleMobileNav}>
      <span className='hamburguer-1'></span>
      <span className='hamburguer-2'></span>
      <span className='hamburguer-3'></span>
    </button>
  );
};

export default Hamburguer;
