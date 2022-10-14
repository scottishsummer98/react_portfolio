import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs'

const Social = () => {
  return (
    <div className="header_socials">
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
  )
}

export default Social
