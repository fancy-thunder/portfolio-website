import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Getintouch = ({ darkMode }) => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setSnackbarMsg(`Copied: ${text}`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
  <div id="contact_section" className={`py-8 px-4 font-sans flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? "bg-[#111827] text-[#F3F3F3]" : "bg-gray-50 text-gray-900"}`}>
      {/* Button */}
      <button className={`px-4 py-1 rounded-full text-sm font-semibold mb-4 mt-2 ${darkMode ? "bg-[#23272F] text-[#A1A1AA]" : "bg-gray-100 text-gray-700"}`}>
        Get in touch
      </button>
      {/* Subtitle */}
      <p className={`text-center text-base max-w-xl mb-6 ${darkMode ? "text-[#A1A1AA]" : "text-gray-600"}`}>
        I'd love to connect! Feel free to reach out if you're looking for a
        developer, have a question, or just want to chat.
      </p>
      {/* Email and Phone */}
  <div className="flex flex-col items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <EmailOutlinedIcon className={`${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`} />
          <span className={`text-xl md:text-2xl font-bold ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>
            avi.aakash4u@gmail.com
          </span>
          <ContentCopyOutlinedIcon className={`${darkMode ? "text-[#23272F]" : "text-gray-400"} cursor-pointer`} onClick={() => handleCopy('avi.aakash4u@gmail.com')} />
        </div>
        <div className="flex items-center gap-2">
          <LocalPhoneOutlinedIcon className={`${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`} />
          <span className={`text-xl md:text-2xl font-bold ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>
            +91 84360-31885
          </span>
          <ContentCopyOutlinedIcon className={`${darkMode ? "text-[#23272F]" : "text-gray-400"} cursor-pointer`} onClick={() => handleCopy('+91 84360-31885')} />
        </div>
      </div>
      {/* Socials */}
      <div className={`text-center text-sm mb-1 ${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`}>
        You may also find me on these platforms!
      </div>
      <div className="flex items-center justify-center gap-6 mb-4">
      <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMsg}
        </MuiAlert>
      </Snackbar>
        <a
          href="https://github.com/fancy-thunder"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-black ${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`}
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-sen-366960200/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-blue-700 ${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`}
        >
          <LinkedInIcon fontSize="medium" />
        </a>
      </div>
    </div>
  );
};

export default Getintouch;
