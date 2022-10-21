import React from 'react'
import './achivement.css';
import gfg from '../../assets/gfg.jpg';
import leetcode from '../../assets/leetcode.png';
import codechef from '../../assets/codechef.jpg';
import CountUp from 'react-countup';

const Achivement = () => {
  return (
    <section id='achivement'>
        <h2>Achivements</h2>
        <div className='container achivement-container'>
           <article className='achivements'>
              <div className='site-logo'>
                <img src={gfg} alt="gfg"></img>
              </div>
              <h5 className='web-name'>GeeksforGeeks</h5>
              <h3><CountUp end={150}></CountUp>+</h3>
                <h5>problem solved</h5>
           </article>
           <article className='achivements'>
              <div className='site-logo'>
                <img src={leetcode} alt="leetcode"></img>
              </div>
              <h5 className='web-name'>LeetCode</h5>
               <h3><CountUp end={50}></CountUp>+</h3>
                <h5>problem solved</h5>
           </article>
           <article className='achivements'>
              <div className='site-logo'>
                <img src={codechef} alt="codechef"></img>
              </div>
              <h5 className='web-name'>CodeChef</h5>
              <h3><CountUp end={150}></CountUp>+</h3>
                <h5>problem solved</h5>
           </article>
        </div>
    </section>
  )
}

export default Achivement;