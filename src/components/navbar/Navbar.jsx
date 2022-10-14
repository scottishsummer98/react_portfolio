import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import {
  AiFillSafetyCertificate,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai'
import { BiCategoryAlt, BiCodeAlt, BiMessageSquareDetail } from 'react-icons/bi'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiencepg"
        onClick={() => setActiveNav('#experiencepg')}
        className={activeNav === '#experiencepg' ? 'active' : ''}
      >
        <BiCodeAlt />
      </a>
      <a
        href="#experiencesft"
        onClick={() => setActiveNav('#experiencesft')}
        className={activeNav === '#experiencesft' ? 'active' : ''}
      >
        <AiOutlineUsergroupAdd />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <BiCategoryAlt />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav('#testimonials')}
        className={activeNav === '#testimonials' ? 'active' : ''}
      >
        <AiFillSafetyCertificate />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Navbar
