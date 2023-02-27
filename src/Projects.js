import React from 'react';
import './Projects.css';
import food from "./images/food.png";
import contact from "./images/contact.png";
import clone from "./images/clone.png";

const Projects = () => {
  return (
    <div>
      <section class="projects" id="projects">
      <h2 class="section__title">Some of my Recent Projects</h2>
      <div class="projects-container">
        <div class="project-container project-card">
          <img
            src={food}
            alt="Food-order-app"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="project-title">React Food Delivery App</h3>
          <p class="project-details">
          Front-end application that allows users to order food from a restaurant. Built using React.js .
          </p>
          <a href="#" target="_blank" class="project-link">Check it Out</a>
        </div>
        <div class="project-container project-card">
          <img
            src={contact}
            alt="netflic-clone"
            loading="lazy"
            class="project-pic"
          />
    <h3 class="project-title">Contact-Manger</h3>
          <p class="project-details">
          Class base component have used and CURD operation has implementd .
          </p>
          <a href="#" target="_blank" class="project-link">Check it Out</a>
        </div>
        <div class="project-container project-card">
          <img
            src={clone}
            alt="greeny-earth"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="project-title">Amazon Clone</h3>
          <p class="project-details">
        My first full Stack Project and I have used React.js and Firebase.
            
          </p>
          <a href="#" target="_blank" class="project-link">Check it Out</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects
