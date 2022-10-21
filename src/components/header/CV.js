import React from 'react';
import resume from '../../assets/Resume.pdf';

const CV = () => {
  return (
    <div className='cv'>
    <a href={resume} download className='btn'>Download Resume</a>
    <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CV; 