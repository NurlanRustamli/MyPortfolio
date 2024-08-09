import React from 'react'
import "./footer.css"
import data from './data'
import data1 from './../header/data';

function Footer() {
  return (
    <footer id='footer'>
      <div className="container footer-container">
        <ul className='nav_menu'>
          {
            data.map(item => (
              <li key={item.id}><a href={item.link}>{item.title}</a></li>
            ))
          }
        </ul>
        <div className="footer_socials">
          {
            data1.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>

    </footer>
  )
}

export default Footer