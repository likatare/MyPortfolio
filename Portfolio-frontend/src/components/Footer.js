import React from "react"
import SocialLinks from "../constants/socialLinks"
import logo from "../assets/Logo-Christoffer.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
         <img src={logo} alt="logo"  width="100px" />  | all rights reserved
        </h4>
      </div>
    </footer>
  )
}
export default Footer
