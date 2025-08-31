import React from 'react'

const Testimonials = () => {
  return (
    <div style={{ backgroundColor: "rgb(249,250,251)", padding: "20px" }}>
        <div className="testimonial-main">
            <button>Testimonials</button>
            <p>Nice things people have said about me</p>
        </div>

        <div className="testimonial-container-main">
            <div className="testimonials">
                <div className="testimonial-card">
                    <div className="pfp">
                        <img src="/Images/himanshu.jpg" alt="" width="50px" height="50px"></img>
                    </div>
                    <q>Great job! I’m truly impressed with his work. Avishek is highly skilled in Frontend Development, and I would gladly recommend him and rehire him for future projects.</q>
                    <div className="name-and-designation">
                        <h1>Himanshu Malhotra</h1>
                        <p>Freelancer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials