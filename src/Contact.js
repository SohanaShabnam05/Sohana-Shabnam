import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon">

                        </i>

                        <h3 className="contact__card-title">
                            Email
                        </h3>
                        <span className="contact__card-data">user@gmail.com</span>

                            <a href="mailto:sshabnamzsf@gmail.com" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon">

                                </i>
                            </a>

                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon">

                        </i>

                        <h3 className="contact__card-title">
                            Whatsapp
                        </h3>
                        <span className="contact__card-data">999-888-777</span>

                            <a href="" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon">

                                </i>
                            </a>

                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon">

                        </i>

                        <h3 className="contact__card-title">
                            Linkedin
                        </h3>
                        <span className="contact__card-data">Sohana Shabnam</span>

                            <a href="https://www.linkedin.com/in/sohana-shabnam-383742229/" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon">

                                </i>
                            </a>

                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input"
                        placeholder="Insert you name" />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name="emal" className="contact__form-input"
                        placeholder="Insert you email" />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" 
                        cols="30"
                        rows="10"
                        className="contact__form-input"
                        placeholder="Write your Project" />
                    </div>


                </form>
                <a href="#contact"  className="button button-flex">
            Send message
        </a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
