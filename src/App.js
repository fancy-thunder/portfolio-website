import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Aboutpage from "./Components/Aboutpage";
import Aboutmepage from "./Components/Aboutmepage";
import Skillpage from "./Components/Skillpage";
import Experiencepage from "./Components/Experiencepage";
import Projectpage from "./Components/Projectpage";
import Getintouch from "./Components/Getintouch"
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.title = "Avishek Sen";
  }, []);
  return (
    <div className={darkMode ? "bg-[#181824] text-[#F3F3F3] min-h-screen transition-colors duration-300" : "bg-white text-gray-900 min-h-screen transition-colors duration-300"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Chatbot darkMode={darkMode} />
      <Aboutpage darkMode={darkMode} />
      <Aboutmepage darkMode={darkMode} />
      <Skillpage darkMode={darkMode} />
      <Experiencepage darkMode={darkMode} />
      <Projectpage darkMode={darkMode} />
      <Getintouch darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;