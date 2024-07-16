import React from "react";
import "./portfolio.css";
import ME from "../../assets/clock.png";
import todolist from "../../assets/todolist.png";
import restaurent from "../../assets/restaurent.jpg";
import weather from "../../assets/weather.png";
import typingp from "../../assets/typingp.png";
import bookimg from "../../assets/bookManager.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={typingp} alt="prject1"></img>
          </div>
          <h3>100wpm-TypingTutor</h3>
          <div className="portfolio-item-cv">
            <a
              href="https://github.com/YDheeraj/100wpm"
              className="btn"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://one00wpm.onrender.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={weather} alt="prject1"></img>
          </div>
          <h3>Weather App</h3>
          <div className="portfolio-item-cv">
            <a
              href="https://github.com/YDheeraj/Weather-app"
              className="btn"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://ydheeraj.github.io/Weather-app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={bookimg} alt="prject1"></img>
          </div>
          <h3>Book Manager App</h3>
          <div className="portfolio-item-cv">
            <a
              href="https://github.com/YDheeraj/Book_Manager_MUI"
              className="btn"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://inspiring-madeleine-667dd4.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={todolist} alt="prject1"></img>
          </div>
          <h3>Todo-List</h3>
          <div className="portfolio-item-cv">
            <a
              href="https://github.com/YDheeraj/Todo-List"
              className="btn"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://todolist866.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={restaurent} alt="prject1"></img>
          </div>
          <h3>Restaurant-Menu</h3>
          <div className="portfolio-item-cv">
            <a
              href="https://github.com/YDheeraj/Restaurant-Menu"
              className="btn"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://ydheeraj.github.io/Restaurant-Menu/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={ME} alt="prject1"></img>
          </div>
          <h3>Analog Clock </h3>
          <div className="portfolio-item-cv">
            <a
              href="https://github.com/YDheeraj/Analog_Clock"
              className="btn"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://analogclock866.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
