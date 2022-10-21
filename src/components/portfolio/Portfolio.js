import React from 'react';
import './portfolio.css';
import ME from '../../assets/clock.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>This is the project-title-name</h3>
          <div className='portfolio-item-cv'>
          <a href='www.github.com' className='btn' target="_blank">GitHub</a>
          <a href='www.livedemo.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>This is the project-title-name</h3>
          <div className='portfolio-item-cv'>
          <a href='www.github.com' className='btn' target="_blank">GitHub</a>
          <a href='www.livedemo.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>This is the project-title-name</h3>
          <div className='portfolio-item-cv'>
          <a href='www.github.com' className='btn' target="_blank">GitHub</a>
          <a href='www.livedemo.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>This is the project-title-name</h3>
          <div className='portfolio-item-cv'>
          <a href='www.github.com' className='btn' target="_blank">GitHub</a>
          <a href='www.livedemo.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>This is the project-title-name</h3>
          <div className='portfolio-item-cv'>
          <a href='www.github.com' className='btn' target="_blank">GitHub</a>
          <a href='www.livedemo.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>This is the project-title-name</h3>
          <div className='portfolio-item-cv'>
          <a href='www.github.com' className='btn' target="_blank">GitHub</a>
          <a href='www.livedemo.com' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;

