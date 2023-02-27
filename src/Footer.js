import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer__title">Sohana</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/dews_on_the_grass/" className="home__social-icon" target="_blank">
        <i className="uil uil-instagram"></i>
      </a>
      
      <a href="https://www.linkedin.com/in/sohana-shabnam-383742229/" className="home__social-icon" target="_blank">
      <i class="uil uil-linkedin"></i>

      </a>

      <a href="https://github.com/SohanaShabnam05" className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt">

        </i>
      </a>
      <a href="https://twitter.com/shabnam_sohana" className="home__social-icon" target="_blank">
        <i className="uil uil-twitter">

        </i>
      </a>
            </div>

            <span className="footer__copy"> Sohana@2005 All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
