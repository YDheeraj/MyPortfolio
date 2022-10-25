import React from 'react';
import './footer.css';
import {AiFillLinkedin,AiFillInstagram,AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href='# ' className='footer-logo'>DHEERAJ</a>

      <ul className='permalinks'>
        <li><a href='# '>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-social'>
        <a href='https://www.linkedin.com/in/dheeraj-kumar-yadav-2965071bb/' target='blank'><AiFillLinkedin></AiFillLinkedin></a>
        <a href='https://www.instagram.com/yadavdheeraj2002/' target='blank'><AiFillInstagram></AiFillInstagram></a>
        <a href='https://github.com/YDheeraj' target='blank'><AiFillGithub></AiFillGithub></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Dheeraj Kumar Yadav, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
