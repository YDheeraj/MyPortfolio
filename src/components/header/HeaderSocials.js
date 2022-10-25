import React from 'react'; 
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/dheeraj-kumar-yadav-2965071bb/' target="blank"><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com/YDheeraj' target="blank"><BsGithub></BsGithub></a>
        <a href='https://www.instagram.com/yadavdheeraj2002/' target="blank"><BsInstagram></BsInstagram></a>
    </div>
  )
}

export default HeaderSocials