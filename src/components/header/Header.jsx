import React from 'react'
import './Header.css'
import CTA from './CTA'
import Social  from './Social'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1>Md. Samiur Rahman</h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA/>
        <Social/>
      </div>
    </header>
  )
}

export default Header