import React from "react";
import "./contact.css";
import { FaAddressCard } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contact">Contact Me</h1>
      <div id="cont">
        <div id="le">
          <h1 id="h">Getting In Touch Is Easy!</h1>
          <p id="pa">
            {" "}
            <FaAddressCard />
            Sunny Side Building Burns Road st.Karachi
          </p>
          <p id="pa">
            {" "}
            <FiPhoneCall />
            Phone:03151234567
          </p>
          <p id="pa">
            <MdEmail /> areebasaleem123@gmail.com
          </p>

          <div id="ons">
            <BsFacebook size={30} />
            <BsGithub size={30} />
            <BsInstagram size={30} />
            <BsLinkedin size={30} />
            <BsWhatsapp size={30} />
          </div>
        </div>
        <div id="ri">
          <h1 id="he">Send Me A Message Here!</h1>
          <input type="text" placeholder="Your Name:" />
          <input type="text" placeholder="Your E-Mail:" />
          <input className="textarea" type="text" placeholder="Your Message:" />
          <button id="sentmsg ">
            Sent Msg <MdMarkEmailRead />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
