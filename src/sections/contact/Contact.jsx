import { MdEmail } from "react-icons/md"
import "./contact.css"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"


function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below</p>
      <div className="container contact_container">
        <div className="contact-socials">
          <a href="mailto:rustemlinurlan070@gmail.com" className="con btn primary"><MdEmail /></a>
          <a href="tel:+994705111157" className="con btn primary"><BsTelephoneForwardFill /></a>
          <a href="https://wa.me/+994705111157" className=" con btn primary"><IoLogoWhatsapp /></a>
        </div>

      </div>
    </section>
  )
}

export default Contact