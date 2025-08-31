import React from "react";
import "./style.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';


const Aboutpage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="about-main">
        <div className="about-left">
          <h1 className = "about-heading">Hi, I'm Avishek👋</h1>
          <p className = "about-paragraph">I'm an aspiring Full-Stack Developer who loves bringing ideas to life through clean, responsive, and visually appealing websites. I’m all about creating seamless user experiences with the MERN stack, constantly learning and pushing my limits. Let’s build something awesome together!</p>
          <div className="location">
            <LocationOnOutlinedIcon className="location-icon"/> 
            <a className = "location-tag" href="https://g.co/kgs/xCiHFtk" target="_blank">Siliguri, West Bengal</a> <br></br>
          </div>
          <div className="online">
            <FiberManualRecordRoundedIcon className="online-icon"/> 
            <p className ="online-paragraph">Available for new projects/internships</p>
          </div>
          <br></br><br></br>
          <a href="https://github.com/fancy-thunder" target="_blank" className="about-social-icons"><i class="fa-brands fa-github "></i></a>
          <a href="https://www.linkedin.com/in/abhishek-sen-366960200/" target="_blank" className="about-social-icons"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="about-right">
            <img src="/Images/profile-pic.jpg" alt="Profile Pic" className="profile-pic"></img>
        </div>
      </div> <br></br><br></br><br></br><br></br>
    </div >
  );
};

export default Aboutpage;
