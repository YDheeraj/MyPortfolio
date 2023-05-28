import React, { useState } from "react";
import "./achivement.css";
import gfg from "../../assets/gfg.jpg";
import leetcode from "../../assets/leetcode.png";
import codechef from "../../assets/codechef.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Achivement = () => {
  const [Counteron, setCounteron] = useState(false);

  return (
    <section id="achivement">
      <h2>Achivements</h2>
      <div className="container achivement-container">
        <article className="achivements">
          <a
            href="https://auth.geeksforgeeks.org/user/yadavdheeraj2002"
            target="blank"
          >
            <div className="site-logo">
              <img src={gfg} alt="gfg"></img>
            </div>
            <h5 className="web-name">GeeksforGeeks</h5>
            <h3>
              <ScrollTrigger
                onEnter={() => setCounteron(true)}
                onExit={() => setCounteron(false)}
              >
                {Counteron && (
                  <CountUp end={200} duration={1} delay={0}></CountUp>
                )}
                +
              </ScrollTrigger>
            </h3>
            <h5>problem solved</h5>
          </a>
        </article>
        <article className="achivements">
          <a href="https://leetcode.com/yadavdheeraj2002/" target="blank">
            <div className="site-logo">
              <img src={leetcode} alt="leetcode"></img>
            </div>
            <h5 className="web-name">LeetCode</h5>
            <h3>
              {" "}
              <ScrollTrigger
                onEnter={() => setCounteron(true)}
                onExit={() => setCounteron(false)}
              >
                {Counteron && (
                  <CountUp end={50} duration={1} delay={0}></CountUp>
                )}
                +
              </ScrollTrigger>
            </h3>
            <h5>problem solved</h5>
          </a>
        </article>
        <article className="achivements">
          <a href="https://www.codechef.com/users/ydheeraj2002" target="blank">
            <div className="site-logo">
              <img src={codechef} alt="codechef"></img>
            </div>
            <h5 className="web-name">CodeChef</h5>
            <h3>
              {" "}
              <ScrollTrigger
                onEnter={() => setCounteron(true)}
                onExit={() => setCounteron(false)}
              >
                {Counteron && (
                  <CountUp end={150} duration={1} delay={0}></CountUp>
                )}
                +
              </ScrollTrigger>
            </h3>
            <h5>problem solved</h5>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Achivement;
