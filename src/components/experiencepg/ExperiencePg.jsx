import React from "react";
import "./ExperiencePg.css";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperiencePg = () => {
  return (
    <section id="experiencepg">
      <h2>My Programming Skills</h2>
      <div className="container experiencepg_container">
        <div className="experiencepg_frontend">
          <h3>Front-End Core Skills</h3>
          <div className="experiencepg_content">
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiencepg_frontend">
          <h3>Front-End Frameworks</h3>
          <div className="experiencepg_content">
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiencepg_backend">
          <h3>Back-End Core Skills</h3>
          <div className="experiencepg_content">
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>MSSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiencepg_backend">
          <h3>Back-End Frameworks</h3>
          <div className="experiencepg_content">
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiencepg_details">
              <BsPatchCheckFill className="experiencepg_details_icon" />
              <div>
                <h4>ASP.NET MVC</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePg;
