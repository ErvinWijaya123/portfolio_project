import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import { IoIosFolder } from "react-icons/io";
import IMG1 from "../../assets/image/img1.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG1} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>-1 Year Working</small>
            </article>

            <article className="about__card">
              <LiaUserSolid className="about__icon" />
              <h5>Clients</h5>
              <small>5++ Worldwide</small>
            </article>

            <article className="about__card">
              <IoIosFolder className="about__icon" />
              <h5>Projects</h5>
              <small>30 completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            reiciendis in iusto consectetur vel beatae. Harum quo iure
            repudiandae, dolor modi saepe, tenetur enim doloremque ad debitis
            officia. Obcaecati, blanditiis.
          </p>

          <a href="#contact " className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
