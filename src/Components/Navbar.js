import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggle = () => setDarkMode(!darkMode);
  const handleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 transition-colors duration-300 ${darkMode ? "bg-[#030712] text-[#F3F3F3]" : "bg-white text-gray-900"}`}> 
      {/* Logo */}
  <div className={`text-2xl font-bold ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`} style={{whiteSpace: "nowrap", display: "flex", alignItems: "center"}}>&lt;AS /&gt;</div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about_section" className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}>About</a>
        <a href="#work_section" className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}>Skills & Experience</a>
        <a href="#testimonials_section" className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}>Testimonials</a>
        <a href="#contact_section" className={`font-medium ${darkMode ? "text-[#A1A1AA] hover:text-[#F3F3F3]" : "text-gray-600 hover:text-gray-900"}`}>Contact</a>
        <span className={`h-6 w-px mx-2 ${darkMode ? "bg-[#23272F]" : "bg-gray-300"}`}></span>
        <button onClick={handleToggle} className="focus:outline-none">
          {darkMode ? <DarkModeOutlinedIcon className="text-yellow-400" /> : <WbSunnyOutlinedIcon className="text-yellow-500" />}
        </button>
        <a href="/Images/Avishek Sen Resume.pdf" download>
          <button className={`px-4 py-2 rounded-lg font-semibold transition ${darkMode ? "bg-[#23272F] text-[#F3F3F3] border border-[#23272F] hover:bg-[#181824]" : "bg-gray-900 text-white hover:bg-gray-800"}`}>Download Resume</button>
        </a>
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden flex items-center w-full justify-between">
        {/* Logo left, hamburger right */}
        <button onClick={handleDrawer} className="ml-auto focus:outline-none">
          <MenuIcon fontSize="large" />
        </button>
      </div>
      {/* Drawer */}
      {drawerOpen && (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-end`}>
          <div className={`w-80 h-1/2 shadow-lg rounded-r-xl p-7 flex flex-col ${darkMode ? 'bg-[#030712] text-[#F3F3F3]' : 'bg-white text-gray-900'}`} style={{height: '50vh'}}>
            <div className="flex items-center justify-between mb-8">
              <div className={`text-2xl font-bold tracking-tight ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`} style={{whiteSpace: "nowrap"}}>&lt;AS /&gt;</div>
              <button onClick={handleDrawer} className="focus:outline-none"><CloseIcon fontSize="large" /></button>
            </div>
            <nav className="flex flex-col gap-5 mb-8">
              <a href="#about_section" className={`font-medium text-[17px] ${darkMode ? 'text-[#A1A1AA]' : 'text-black'}`}>About</a>
              <a href="#work_section" className={`font-medium text-[17px] ${darkMode ? 'text-[#A1A1AA]' : 'text-black'}`}>Work</a>
              <a href="#testimonials_section" className={`font-medium text-[17px] ${darkMode ? 'text-[#A1A1AA]' : 'text-black'}`}>Testimonials</a>
              <a href="#contact_section" className={`font-medium text-[17px] ${darkMode ? 'text-[#A1A1AA]' : 'text-black'}`}>Contact</a>
            </nav>
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-[#23272F] pt-5 mb-6">
              <span className={`font-medium ${darkMode ? 'text-[#A1A1AA]' : 'text-black'}`}>Switch Theme</span>
              <button onClick={handleToggle} className="focus:outline-none">
                {darkMode ? <DarkModeOutlinedIcon className="text-yellow-400" /> : <WbSunnyOutlinedIcon className="text-yellow-500" />}
              </button>
            </div>
            <a href="/Images/Avishek Sen Resume.pdf" download>
              <button className="w-full py-3 rounded-xl font-semibold text-white bg-[#181824] dark:bg-[#23272F] text-[17px] mt-1">Download CV</button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;