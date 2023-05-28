import React from "react";
import CV from "./CV";
import "./header.css";
import ME from "../../assets/mypic3.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I am</h5>
        <h2>Dheeraj Kumar Yadav</h2>
        <h5 className="text-light">Full Stack Developer</h5>
        <CV></CV>
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img src={ME} alt="mypic"></img>
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
