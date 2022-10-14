import React from 'react'
import './ExperienceSft.css'
import { BiCheck } from 'react-icons/bi'

const ExperienceSft = () => {
  return (
    <section id="experiencesft">
      <h2>My Other Skills</h2>
      <div className="container experiencesft_container">
        <article className="experiencesft">
          <div className="experiencesft_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="experiencesft_list">
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>Adobe XD</p>
            </li>
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>Adobe Photoshop</p>
            </li>
          </ul>
        </article>
        <article className="experiencesft">
          <div className="experiencesft_head">
            <h3>MS Office</h3>
          </div>
          <ul className="experiencesft_list">
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>MS Word</p>
            </li>
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>MS Excel</p>
            </li>
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>MS Powerpoint</p>
            </li>
          </ul>
        </article>
        <article className="experiencesft">
          <div className="experiencesft_head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="experiencesft_list">
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>Time Management</p>
            </li>
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>Adaptibility</p>
            </li>
            <li>
              <BiCheck className="experiencesft_list_icon" />
              <p>Team Work</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ExperienceSft
