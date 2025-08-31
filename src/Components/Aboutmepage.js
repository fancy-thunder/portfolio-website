import React from "react";
import "./style.css";

const Aboutmepage = () => {
  return (
    <div style={{ backgroundColor: "rgb(249,250,251)", padding: "20px"}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="about-me-div" id="about_section">
        <button className="about-me-button">About me</button>
      </div>
      <br></br><br></br>
      <div className="about-me-main">
        <div className="about-me-left">
          <img src="/Images/about-me.jpg" className="about-me-pic" alt=""></img>
        </div>
        <div className="about-me-right">
          <h1 className="about-me-heading">Curious about me? Here you have it:</h1>
          <p className="about-me-paragraph">Hello there! 👋 I'm <b>a passionate, self-taught developer</b> on a mission to master Full-Stack Web Development. I love bringing the technical and visual aspects of digital products to life—because let’s be honest, a website isn’t just about looking good; it should feel good to use too! User experience, clean design, and writing readable, efficient code are things I genuinely care about.<br></br><br></br>
          I’m currently <b>a 3rd-year Computer Science student at KiiT University, Bhubaneshwar,</b> diving deep into the world of web development. Every day, I push myself to learn, build, and refine my skills—whether it's through personal projects, working with startups, or just tinkering with new tech. Since starting my journey, I’ve worked with <b>HTML, CSS, JavaScript, React, Supabase, and more,</b> and while I’m still a beginner, I love the process of learning, experimenting, and improving. <br></br><br></br>

I thrive on challenges, love picking up new things, and believe that with the right guidance and experience, I can deliver great work. I like to call myself an optimistic and progressive thinker—someone who's always open to new opportunities and collaboration. <br></br><br></br>

When I’m not buried in code, you’ll probably find me sharing my journey on <a href="https://www.linkedin.com/in/abhishek-sen-366960200/" target="_blank" className="socials">LinkedIn</a>, trying to figure out <a href="https://github.com/fancy-thunder" target="_blank" className="socials">GitHub</a>, or just exploring new tech trends. I’m always up for connecting, learning, and growing—so let’s build something cool together! 🚀 <br></br><br></br>  Finally, some quick points about me: <br></br><br></br>
<div className="points-main">
    <ul>
    <div className="points-left">
        <li>B.Tech in Computer Science Engineering</li>
        <li>Enthusiastic and avid learner</li> 
    </div>
    <div className="points-right">
        <li>Part time freelancer</li>
        <li>Problem Solver</li>
    </div>
    </ul>
</div><br></br>

One last thing, I'm available for internships or freelance work, so feel free to reach out and say hello! I promise I don't bite 😉

</p> <br></br><br></br>
        </div>
      </div>
    </div>
  );
};

export default Aboutmepage;
