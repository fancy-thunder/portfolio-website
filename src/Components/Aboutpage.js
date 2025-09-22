import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Aboutpage = () => {
  return (
    <div className="bg-white py-0 px-4 font-sans">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 py-8">
        {/* Left Section: HTML/JS content */}
        <div className="md:w-2/3 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center">
            Hi, I'm Avishek <span className="ml-2 text-4xl">👋</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I'm an aspiring Full-Stack Developer who loves bringing ideas to
            life through clean, responsive, and visually appealing websites. I’m
            all about creating seamless user experiences with the MERN stack,
            constantly learning and pushing my limits. Let’s build something
            awesome together!
          </p>
          <div className="flex items-center mb-3">
            <LocationOnOutlinedIcon className="text-gray-500 mr-2" />
            <a
              href="https://share.google/xcLD4TQF2nJTmLO8f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-medium underline hover:text-blue-600"
            >
              Siliguri, West Bengal
            </a>
          </div>
          <div className="flex items-center mb-8">
            <FiberManualRecordRoundedIcon className="text-green-500 mr-2" />
            <span className="text-gray-700 font-medium">
              Available for new projects
            </span>
          </div>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://github.com/fancy-thunder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sen-366960200/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
        {/* Right Section: Profile image (CSS visual) */}
        <div className="md:w-1/3 w-full flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute top-6 left-6 w-64 h-64 bg-gray-100 rounded-xl z-0"></div>
            <img
              src="/Images/profile-pic.jpg"
              alt="Profile Pic"
              className="absolute top-0 left-0 rounded-xl shadow-xl w-64 h-64 object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
