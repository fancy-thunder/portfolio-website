import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

const Getintouch = () => {
  return (
    <div className="get-in-touch-container" id="contact_section"><br></br><br></br><br></br>
        <div className="contents">
            <button>Get in touch</button>
            <p>I'd love to connect!  Feel free to reach out if you're looking for a developer, have a question, or just want to chat.</p>
            <br></br><br></br>
            <a href="mailto:avi.aakash4u@gmail.com?subject=Hello&body=I wanted to reach out...">avi.aakash4u@gmail.com</a>
            <a href="tel:+91-843-603-1885">+91 84360-31885</a>
            <br></br><br></br>
            <p>You may also find me on these platforms</p>
            <div className="content-platforms">
                <a href="https://github.com/fancy-thunder" target="_blank" className="about-social-icons"><i class="fa-brands fa-github "></i></a>
                <a href="https://www.linkedin.com/in/abhishek-sen-366960200/" target="_blank" className="about-social-icons"><i class="fa-brands fa-linkedin"></i></a>
            </div><br></br><br></br><br></br><br></br>
        </div>
    </div>
  )
}

export default Getintouch