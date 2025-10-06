import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
  <nav className={`w-full flex items-center justify-between px-6 py-3 shadow-sm transition-colors duration-300 ${darkMode ? "bg-[#030712] text-[#F3F3F3] border-b border-[#111827]" : "bg-white text-gray-900"}`}> 
      {/* Logo */}
  <div className={`text-2xl font-bold ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>&lt;AS /&gt;</div>
      {/* Right Section: Links, Icon, Button */}
  <div className={`flex items-center space-x-8 ${darkMode ? "" : ""}`}> 
        <a
          href="#about_section"
          className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}
        >
          About
        </a>
        <a
          href="#work_section"
          className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}
        >
          Skills & Experience
        </a>
        <a
          href="#testimonials_section"
          className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}
        >
          Testimonials
        </a>
        <a
          href="#contact_section"
          className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}
        >
          Contact
        </a>
  <span className={`h-6 w-px mx-2 ${darkMode ? "bg-[#23272F]" : "bg-gray-300"}`}></span>
        {/* Dark/Light Mode Toggle Icon */}
        <button onClick={handleToggle} className="focus:outline-none">
          {darkMode ? (
            <DarkModeOutlinedIcon className="text-yellow-400" />
          ) : (
            <WbSunnyOutlinedIcon className="text-yellow-500" />
          )}
        </button>
        <a href="/Images/Avishek Sen Resume.pdf" download>
          <button className={`px-4 py-2 rounded-lg font-semibold transition ${darkMode ? "bg-[#23272F] text-[#F3F3F3] border border-[#23272F] hover:bg-[#181824]" : "bg-gray-900 text-white hover:bg-gray-800"}`}>
            Download Resume
          </button>
        </a>
    {/* ...existing code... (removed duplicate toggle button) */}
      </div>
    </nav>
  );
};

export default Navbar;