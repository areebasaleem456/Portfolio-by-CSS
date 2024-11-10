import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <div id="footer">
      <ul id="names">
        <li>Home</li>
        <li>News</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Our Team</li>
      </ul>
      <div id="footer1">
        <div id="icons">
          <BsFacebook size={30} />
          <BsGithub size={30} />
          <BsInstagram size={30} />
          <BsLinkedin size={30} />
          <BsWhatsapp size={30} />
        </div>
      </div>
      <div id="footer2">
        <FaCopyright size={35} />
        <span>Copyright Claim @ 2024</span>
      </div>
    </div>
  );
};

export default Footer;
