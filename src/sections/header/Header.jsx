import React from 'react'
import "./header.css"
import HeaderImg from '../../assets/img/header.jpeg'
import data from './data'

function Header() {
  return (
    <header id='header'>
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImg} alt="Header Portrait" />
        </div>
        <h3>Nurlan Rustemli</h3>
        <p>A Front-end Developer.A confident, serious, and organized person in busy conditions.
          The ability to rapidly assimilate and learn processes, intellectual
          game and chess enthusiast, and participant. I am also good at
          working on computer’s programs and some websites.I can create websites with the help of html,css,javascript,react js and so on</p>
        <div className="header_cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header_socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header