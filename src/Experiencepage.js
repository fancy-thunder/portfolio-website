import React from "react";

const Experiencepage = () => {
  return (
    <div style={{ backgroundColor: "rgb(249,250,251)", padding: "20px" }}>
      <div className="experience-main">
            <br></br><br></br>
            <button className="experience-button">Experience</button>
            <p className="experience-paragraph">Here is a quick summary of my most recent experiences:</p><br></br>
      </div>

      <div className="experience-list-main">
            <div className="experience-border">
                <div className="experiences">
                    <div className="experience-logo">
                        <a href="https://cloudou.com/" target="_blank"><img src="/Images/cloud-ou-logo.webp" alt="" width="80px" height="20px" className="organization-logo"></img></a>
                    </div>
                    <div className="experience-details">
                        <h1>Web Dev Intern</h1>
                        <ul>
                            <li>Transformed designs into fully functional web pages</li>
                            <li>Developed and integrated APIs for seamless functionality</li>
                            <li>Explored databases, storage solutions, and Supabase</li>
                        </ul>
                    </div>
                    <div className="experience-date">
                        <p>January 2025 - Present</p>
                    </div>
                </div>
            </div>

            <div className="experience-border">
                <div className="experiences">
                    <div className="experience-logo">
                        <a href="https://littlepawscare.com/" target="_blank"><img src="https://littlepawscare.com/assets/img/logo.avif" alt="" width="80px" height="80px" className="organization-logo"></img></a>
                    </div>
                    <div className="experience-details">
                        <h1>Corporate Connect & Rescue Team Member</h1>
                        <ul>
                            <li>Managed databases for multiple dog NGOs across India</li>
                            <li>Connected people with nearby NGOs and dog shelters</li>
                            <li>Collaborated with NGOs and shelters for better outreach</li>
                            <li>Organized and participated in stray dog feeding drives</li>
                            <li>Rescued and cared for stray dogs around KiiT Bhubaneswar Campus</li>
                        </ul>
                    </div>
                    <div className="experience-date">
                        <p>June 2023 - Present</p><br></br>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br>
      </div>
    </div>
  );
};

export default Experiencepage;
