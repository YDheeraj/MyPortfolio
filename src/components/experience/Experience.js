import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>what Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Development Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>CSS</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>JavaScript</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>ReactJs</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>NodeJs</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>ExpressJs</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>MongoDB</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>REST API</h4>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Extra-Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>C++</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>DSA</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>DBMS & SQL</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>OPPs</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>Git & GitHub</h4>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icons"></BsFillPatchCheckFill>
              <h4>Critical-thinking</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
