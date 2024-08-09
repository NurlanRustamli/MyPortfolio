import React from 'react'
import "./about.css"
import AboutImg from "../../assets/img/about.jpeg"
import CV from "../../assets/CV.pdf"
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'

function About() {
  return (
    <section id='about'>
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <div className="about_cards">
            {
              data.map(item=><Card key={item.id} className="about_card">
                <span className='about_card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>)
            }
          </div>
          <p>
            Building projects that my clients love has always been my passion. With over 2 months of experience in the web development industry, I'm constantly motivated to push boundaries and achieve more!
          </p>
          <p>Hi, I'm Nurlan Rustemli, a front-end developer based in Baku, Azerbaijan. I hold a prestigious golden degree in front-end development from IT Brains Academy. My primary goal is to bring your business online the right way, ensuring a professional, industry-standard design paired with the functionality you need to operate seamlessly in the digital space.
            <br /><br />
            Let's work together to turn your ideas into a reality. Share the details of your project, and we'll get started right away. Check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About