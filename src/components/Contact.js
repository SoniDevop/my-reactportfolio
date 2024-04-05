import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export const Contact = () => {
  return (
   <>
   <div className="container contact" id="contact">
    <h1>CONTACT ME</h1>
    <div className="contact-icon"
    data-aos="zoom-in-up"
    data-aos-duration="1000"
    >
      
      <a href="https://www.google.com" target="_blank" className="items">
      <FaInstagram  className="icons"/>
      </a>
      <a href="https://www.google.com" target="_blank" className="items">
      <CiLinkedin   className="icons"/>
      </a>
      <a href="https://www.google.com" target="_blank" className="items">
      <FaXTwitter    className="icons"/>
      </a>
      <a href="https://www.google.com" target="_blank" className="items">
      <FaGithubSquare className="icons"/>
      </a>
      <a href="mailto:jaiswalsoni2703@gmail.com" target="_blank" className="items">
      <SiGmail className="icons"/>
      </a>
    </div>
   </div>
   </>
  )
}
export default Contact;