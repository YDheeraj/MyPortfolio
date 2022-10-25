import React from 'react';
import './portfolio.css';
import ME from '../../assets/clock.png';
import digital from '../../assets/digital.jpg';
import todolist from '../../assets/todolist.png';
import restaurent from '../../assets/restaurent.jpg';
import weather from '../../assets/weather.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={weather} alt="prject1"></img>
          </div>
          <h3>Weather App</h3>
          <div className='portfolio-item-cv'>
          <a href='https://github.com/YDheeraj/Weather-app' className='btn' target="blank">GitHub</a>
          <a href='https://ydheeraj.github.io/Weather-app/' className='btn btn-primary' target="blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={todolist} alt="prject1"></img>
          </div>
          <h3>Todo-List</h3>
          <div className='portfolio-item-cv'>
          <a href='https://github.com/YDheeraj/Todo-List' className='btn' target="blank">GitHub</a>
          <a href='https://todolist866.netlify.app/' className='btn btn-primary' target="blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={restaurent} alt="prject1"></img>
          </div>
          <h3>Restaurant-Menu</h3>
          <div className='portfolio-item-cv'>
          <a href='https://github.com/YDheeraj/Restaurant-Menu' className='btn' target="blank">GitHub</a>
          <a href='https://ydheeraj.github.io/Restaurant-Menu/' className='btn btn-primary' target="blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>Analog Clock </h3>
          <div className='portfolio-item-cv'>
          <a href='https://github.com/YDheeraj/Analog_Clock' className='btn' target="blank">GitHub</a>
          <a href='https://analogclock866.netlify.app/' className='btn btn-primary' target="blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={digital} alt="prject1"></img>
          </div>
          <h3>Digital Clock</h3>
          <div className='portfolio-item-cv'>
          <a href='https://github.com/YDheeraj/Digital-Clock' className='btn' target="blank">GitHub</a>
          <a href='https://digitalclock866.netlify.app/' className='btn btn-primary' target="blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;

