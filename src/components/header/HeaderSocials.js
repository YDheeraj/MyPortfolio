import React from 'react'; 
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='linkedin.com' target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href='linkedin.com' target="_blank"><BsGithub></BsGithub></a>
        <a href='linkedin.com' target="_blank"><BsInstagram></BsInstagram></a>
    </div>
  )
}

export default HeaderSocials