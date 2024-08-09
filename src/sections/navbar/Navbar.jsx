import React from 'react'
import "./navbar.css"
import data from "./data"
import { IoMdColorPalette } from 'react-icons/io'
function Navbar() {
  return (
    <nav><div className="container nav_container">
      <a href="index.html" className='nav_logo'>
        <img src="https://www.nicepng.com/png/detail/222-2225386_front-end-web-development-logo.png" alt="Logo" />
      </a>
      <ul className='nav_menu'>
        {
          data.map(item => (
            <li key={item.id}><a href={item.link}>{item.title}</a></li>
          ))
        }
      </ul>
    </div></nav>
  )
}

export default Navbar