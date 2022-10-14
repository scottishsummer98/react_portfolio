import React from 'react'
import './Footer.css'
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo"></a>

      <ul className="footer_permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiencepg">Programming Skills</a>
        </li>
        <li>
          <a href="#experiencesft">Other Skills</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/scottishsummer/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/scottishsummer98" target="_blank">
          <BsGithub />
        </a>
        <a href="https://facebook.com/scottishsummer" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://twitter.com/sseekhkebabb" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; ScottishSummer. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
