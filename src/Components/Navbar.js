import React from "react";
import "./style.css";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Navbar = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./navbar.css" />
      <div className="nav-main">
        <h4 className = "AS-tag">&lt;AS /&gt;</h4>
        <div className="nav-second">
          <div className="nav-about">
            <a href="#about_section" className="about-content">About</a>
            <a href="#skill_section" className="about-content">Skills & Experience</a>
            <a href="#work_section" className="about-content">Testimonials</a>
            <a href="#contact_section" className="about-content">Contact</a>
          </div>
          <div class="hamburger" onclick="toggleMenu()">☰</div>
          <div className="download-cv">
            <LightModeOutlinedIcon className = "icon"/>
            <a href="/Images/Avishek Sen Resume.pdf" download="/Images/Avishek Sen Resume.pdf"><button className = "download-button">Download CV</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
