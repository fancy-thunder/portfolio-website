import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex items-center justify-between px-6 py-3 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">&lt;AS /&gt;</div>
      {/* Right Section: Links, Icon, Button */}
      <div className="flex items-center space-x-8">
        <a
          href="#about_section"
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          About
        </a>
        <a
          href="#work_section"
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          Skills & Experience
        </a>
        <a
          href="#testimonials_section"
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          Testimonials
        </a>
        <a
          href="#contact_section"
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          Contact
        </a>
        <span className="h-6 w-px bg-gray-300 mx-2"></span>
        <LightModeOutlinedIcon className="text-gray-500" />
        <a href="/Images/Avishek Sen Resume.pdf" download>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
            Download Resume
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;