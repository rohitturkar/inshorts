import React from "react";
import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Made by
        <a href="">Rohit Turkar</a>
      </span>
      <hr srtyle={{ width: "90%" }} />
      <div className="iconContainer">
        <AiFillLinkedin size={20} />
        <AiFillGithub size={20} />
      </div>
    </div>
  );
};

export default Footer;
