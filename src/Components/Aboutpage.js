import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Aboutpage = ({ darkMode }) => {
  return (
  <div className={`mt-16 py-0 px-4 font-sans transition-colors duration-300 ${darkMode ? "bg-[#030712] text-[#F3F3F3]" : "bg-white text-gray-900"}`}>
      {/* Main Section */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 py-8">
        {/* Left Section: HTML/JS content */}
  <div className="md:w-2/3 w-full">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 flex items-center ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>
            Hi, I'm Avishek <span className="ml-2 text-4xl">👋</span>
          </h1>
          <p className={`text-lg mb-8 ${darkMode ? "text-[#A1A1AA]" : "text-gray-700"}`}>
            I'm an aspiring Full-Stack Developer who loves bringing ideas to
            life through clean, responsive, and visually appealing websites. I’m
            all about creating seamless user experiences with the MERN stack,
            constantly learning and pushing my limits. Let’s build something
            awesome together!
          </p>
          <div className="flex items-center mb-3">
            <LocationOnOutlinedIcon className={`${darkMode ? "text-[#A1A1AA]" : "text-gray-500"} mr-2`} />
            <a
              href="https://share.google/xcLD4TQF2nJTmLO8f"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium underline ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-700 hover:text-blue-600"}`}
            >
              Siliguri, West Bengal
            </a>
          </div>
          <div className="flex items-center mb-8">
            <FiberManualRecordRoundedIcon className="text-green-500 mr-2" />
            <span className={`font-medium ${darkMode ? "text-[#A1A1AA]" : "text-gray-700"}`}>
              Available for new projects
            </span>
          </div>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://github.com/fancy-thunder"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-black ${darkMode ? "text-[#A1A1AA]" : "text-gray-600"}`}
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sen-366960200/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-700 ${darkMode ? "text-[#A1A1AA]" : "text-gray-600"}`}
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
        {/* Right Section: Profile image (CSS visual) */}
        <div className="md:w-1/3 w-full flex justify-center">
          <div className="relative w-64 h-64">
            <div className={`absolute top-6 left-6 w-64 h-64 rounded-xl z-0 ${darkMode ? "bg-[#23272F]" : "bg-gray-100"}`}></div>
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
