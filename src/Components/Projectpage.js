import React from 'react'

const Projectpage = () => {
  return (
    <div>
        <div className="work-container" id="work_section">
            <button className="work-button">Work</button>
            <p className="work-paragraph">Some of the noteworthy projects I have built</p>
        </div>

        <div className="project-main">
            <div className="projects">
                <div className="project1-left">
                    <a href="https://fancy-thunder.github.io/Construction-Website/" target="_blank"><img src="/Images/construction-website-project.png" alt="" width="100%" height="100%"></img></a>
                </div>
                <div className="project1-right">
                    <div className="right-div">
                        <a href="https://github.com/fancy-thunder/Construction-Website" target="_blank"><h1>Construction Company Website Clone</h1></a>
                        <p>I built a responsive clone of a construction company website using HTML and CSS, focusing on a clean design, structured layout, and user-friendly interface. The website includes sections like Home, Services, Projects, About Us, Testimonials, and Contact, ensuring a professional look and smooth navigation. <br></br><br></br>

With a well-structured navigation bar, engaging hero section, and detailed service listings, this project helped me refine my skills in flexbox, grid, typography, and layout structuring to create visually appealing and functional web pages.</p><br></br>
                        <div className="project-skill-buttons">
                            <button className="project-button">HTML</button>
                            <button className="project-button">CSS</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects">
                <div className="project2-left">
                    <div className="left-div">
                        <a href="https://github.com/fancy-thunder/sign-in-page" target="_blank"><h1>A Simple Sign In Page</h1></a>
                        <p>I designed and built a simple yet intuitive sign-in page using HTML and CSS, focusing on user experience and responsiveness. The page features a clean layout with a left section for user authentication and a right section displaying a brand logo.</p><br></br>
                        <div className="project-skill-buttons">
                            <button className="project-button">HTML</button>
                            <button className="project-button">CSS</button>
                        </div>
                    </div>
                </div>
                <div className="project2-right">
                    <a href="https://fancy-thunder.github.io/sign-in-page/" target="_blank"><img src="/Images/sign-in-project.png" alt="" width="100%" height="100%"></img></a>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default Projectpage