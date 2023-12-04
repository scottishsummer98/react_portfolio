import React from "react";
import "./About.css";
import DP from "../../assets/meProfileprof.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={DP} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Worked With</h5>
              <small>
                React, React Native, Node, Express, MongoDB, ASP.NET MVC,
                Laravel, Vue, MSSQL
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            An energetic, motivated human being with a special enthusiasm for
            programming. Eager to learn something new every day and believes
            accepting change is the key to greatness
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
