import React from "react";
import "./about.css";
import ME from "../../assets/myPic.jpeg";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="aboutImg"></img>
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <VscFolderLibrary className="about-icon"></VscFolderLibrary>
              <h5><a href="#portfolio">Projects</a></h5>
              <small>5+Completed</small>
            </article>
          </div>
          <p>
            Hi' am a frontend developer who learning new skills in the feild of web devlopment. I'm open to Job opportunities where i can contribute, learn and grow. if you have a good opportunities that matches my skills and experience then feel free to contact me.
          </p>
          <a href="# " className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
