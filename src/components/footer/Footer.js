import './footer.css';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='socials'>
          <a href='#'>
            <BsTwitter />
          </a>
          <a href='#'>
            <BsFacebook />
          </a>
          <a href='#'>
            <BsInstagram />
          </a>
          <a href='#'>
            <BsLinkedin />
          </a>
        </div>
        <p>2022 &copy; Javier R. </p>
      </div>
    </footer>
  );
};

export default Footer;
