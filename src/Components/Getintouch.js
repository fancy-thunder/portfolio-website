import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Getintouch = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 font-sans flex flex-col items-center justify-center">
      {/* Button */}
      <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 mt-2">
        Get in touch
      </button>
      {/* Subtitle */}
      <p className="text-center text-gray-600 text-base max-w-xl mb-6">
        I'd love to connect! Feel free to reach out if you're looking for a
        developer, have a question, or just want to chat.
      </p>
      {/* Email and Phone */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <EmailOutlinedIcon className="text-gray-500" />
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            avi.aakash4u@gmail.com
          </span>
          <ContentCopyOutlinedIcon className="text-gray-400 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2">
          <LocalPhoneOutlinedIcon className="text-gray-500" />
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            +91 84360-31885
          </span>
          <ContentCopyOutlinedIcon className="text-gray-400 cursor-pointer" />
        </div>
      </div>
      {/* Socials */}
      <div className="text-center text-gray-500 text-sm mb-1">
        You may also find me on these platforms!
      </div>
      <div className="flex items-center justify-center gap-6 mb-4">
        <a
          href="https://github.com/fancy-thunder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black"
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-sen-366960200/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700"
        >
          <LinkedInIcon fontSize="medium" />
        </a>
      </div>
    </div>
  );
};

export default Getintouch;
