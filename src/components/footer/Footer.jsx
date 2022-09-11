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
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://facebook.com" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://twitter.com" target="_blank">
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
