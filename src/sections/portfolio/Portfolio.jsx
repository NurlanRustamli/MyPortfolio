import React from 'react'
import "./portfolio.css"
import data from './data'
import Card from '../../components/Card'
function Portfolio() {
  return (
    <section id='portfolio'>
    
        <h2>My Portfolio</h2>
        <p>You can look through my projects below</p>
   
      <div className="container portfolio-container">
        {
          data.map(item =>(
            <Card key={item.id} className="portfolio light">
              <div className="port-img">
                <img src={item.profile} alt="" />
              </div>
              <div className="port-main">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <div className="port-links">
                <a href={item.demoLink} className='btn primary' target='_blank'>Demo</a>
                <a href={item.githubLink} className='btn' target='_blank'>GitHub</a>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio