import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Aboutpage from './Components/Aboutpage'
import Aboutmepage from './Components/Aboutmepage'
import Skillpage from './Components/Skillpage'
import Experiencepage from './Experiencepage'
import Projectpage from './Components/Projectpage'
import Testimonials from './Components/Testimonials'
import Getintouch from './Components/Getintouch'
import Footer from './Components/Footer'
import Chatbot from './Components/Chatbot'

const App = () => {
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    document.title = "Avishek Sen";
  }, []);
  return (
    <div>
      <Navbar/>
      <Chatbot/>
      <Aboutpage/>
      <Aboutmepage/>
      <Skillpage/>
      <Experiencepage/>
      <Projectpage/>
      <Testimonials/>
      <Getintouch/>
      <Footer/>
    </div>
  )
}

export default App