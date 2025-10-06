import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <div className={`py-4 flex justify-center items-center transition-colors duration-300 ${darkMode ? "bg-[#181824] text-[#A1A1AA] border-t border-[#23272F]" : "bg-white text-gray-500"}`}>
      <p className="text-gray-500 text-sm">
        © 2025 | <span className="underline">Designed</span> and{" "}
        <span className="underline">coded</span> with{" "}
        <span className="text-red-500">💖</span> by Avishek Sen
      </p>
    </div>
  );
};

export default Footer;
