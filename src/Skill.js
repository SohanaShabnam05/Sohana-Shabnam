import React from 'react';
import './Skill.css';


const Skill = () => {
  return (
    <div>
      <section className="skill-section" id="skills">
        <h2 className="section__title">My Skills</h2>
        <span className="section__subtitle">What I Know</span>

        <section className='skill__view container grid'>
            <div className="skill__para">
            <h2 className="create">
                    My creative skills & experience
                </h2>
                <br />
                <div className='para'>
                    Hey everyone Sohana here!!! Enthusiastic and curious to learn new skills!! I am a computer science undergrad at Heritage Institute of Technology,Kolkata. Being from a tech background I am interested in programming ( C/C++ ) Data Structures and Web-development. I am Full-Stack developer 
                </div>
            </div>

            <div className="skill__line">
                <ul className="skill">
                <br />
                <br />
                ⭐ <span className="bold">Languages : </span>JavaScript, C, C++
               <br />
                ⭐<span className="bold">Developer Tools:</span>  VS Code, PowerShell
                <br />
                ⭐<span className="bold">Technologies/Frameworks:</span> React , Express.js , Bootstrap5 , Firebase , MongoDB , Netlify , Github.
                Data Structure Algorithms , RESTful APIs
                </ul>
            </div>
        </section>

        <div className="technical__skill">


        </div>

        <div className="social__new">
        <a href="https://www.instagram.com/dews_on_the_grass/" className="home__social-icon" >
        <i className="uil uil-instagram"></i>
      </a>
      
      <a href="https://www.linkedin.com/in/sohana-shabnam-383742229/" className="home__social-icon" >
      <i class="uil uil-linkedin"></i>

      </a>

      <a href="https://github.com/SohanaShabnam05" className="home__social-icon" >
        <i className="uil uil-github-alt">
        </i>
        </a>
        </div>
        

      </section>
    </div>
  )
}

export default Skill
