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
        <a href='linkedin'><AiFillLinkedin></AiFillLinkedin></a>
        <a href='insta'><AiFillInstagram></AiFillInstagram></a>
        <a href='facebook'><AiFillGithub></AiFillGithub></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Dheeraj Kumar Yadav, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
