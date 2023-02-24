import React from 'react';
import './About.css';
import photo from "./images/mine2.jpg";
import CV from "./images/Sohana_Shabnam.pdf";
import Info from './Info';


const About = () => {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
        <img src={photo} alt="" />
          
          <div className="about__data">
            <Info />
            <p className="about__description">
              I am CSE Student. I am a Web developer.

            </p>
            <br />
            <a href={CV} className="button button--flex">My Resume</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
