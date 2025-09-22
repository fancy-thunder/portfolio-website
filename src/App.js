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
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    document.title = "Avishek Sen";
  }, []);
  return (
    <div>
      <Navbar />
      <Chatbot />
      <Aboutpage />
      <Aboutmepage />
      <Skillpage />
      <Experiencepage />
      <Projectpage />
      <Getintouch />
      <Footer />
    </div>
  );
};

export default App;