import React from "react";

const Aboutmepage = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge */}
        <div className="flex pt-8">
          <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mx-auto font-sans mb-8">
            About me
          </span>
        </div>
        {/* Main Content: Image and Text side by side */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Section: Image (CSS visual) */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative w-[400px] h-[500px]">
              <div className="absolute left-[-24px] top-[-24px] w-[400px] h-[500px] bg-gray-100 rounded-md z-0"></div>
              <img
                src="/Images/about-me.jpg"
                alt="About Me"
                className="relative rounded-md w-[400px] h-[500px] object-cover z-10"
              />
            </div>
          </div>
          {/* Right Section: Content (HTML/JS) */}
          <div className="md:w-1/2 w-full font-sans">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-sans">
              Curious about me? Here you have it:
            </h1>
            <div className="text-[#4b637b] text-base md:text-lg space-y-6 font-sans">
              <p>
                Hello there!{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>{" "}
                I'm{" "}
                <span className="font-bold text-[#4b5563]">
                  a passionate, self-taught developer
                </span>{" "}
                on a mission to master Full-Stack Web Development. I love
                bringing the technical and visual aspects of digital products to
                life— because let’s be honest, a website isn’t just about
                looking good; it should feel good to use too! User experience,
                clean design, and writing readable, efficient code are things I
                genuinely care about.
              </p>
              <p>
                I’m{" "}
                <span className="font-bold text-[#4b5563]">
                  a final Computer Science student at KiiT University,
                  Bhubaneshwar
                </span>
                , diving deep into the world of web development. Every day, I
                push myself to learn, build, and refine my skills—whether it's
                through personal projects, working with startups, or just
                tinkering with new tech. Since starting my journey, I’ve worked
                with{" "}
                <span className="font-bold text-[#4b5563]">
                  HTML, CSS, JavaScript, React, Supabase, and more
                </span>
                , and while I’m still a beginner, I love the process of
                learning, experimenting, and improving.
              </p>
              <p>
                I thrive on challenges, love picking up new things, and believe
                that with the right guidance and experience, I can deliver great
                work. I like to call myself an optimistic and progressive
                thinker— someone who's always open to new opportunities and
                collaboration.
              </p>
              <p>
                When I’m not buried in code, you’ll probably find me sharing my
                journey on{" "}
                <a
                  href="https://www.linkedin.com/in/abhishek-sen-366960200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn
                </a>
                , trying to figure out{" "}
                <a
                  href="https://github.com/fancy-thunder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
                , or just exploring new tech trends. I’m always up for
                connecting, learning, and growing—so let’s build something cool
                together!
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </p>
              <p className="text-[#4b637b] font-bold">
                Finally, some quick points about me:
              </p>
              <div className="flex flex-row mt-2">
                <ul className="list-disc pl-6 space-y-2 w-1/2">
                  <li>
                    <span className="font-medium text-[#4b5563]">
                      B.Tech in Computer Science Engineering
                    </span>
                  </li>
                  <li>
                    <span className="font-medium text-[#4b5563]">
                      Enthusiastic and avid learner
                    </span>
                  </li>
                </ul>
                <ul className="list-disc pl-6 space-y-2 w-1/2">
                  <li>
                    <span className="font-medium text-[#4b5563]">
                      Part time freelancer
                    </span>
                  </li>
                  <li>
                    <span className="font-medium text-[#4b5563]">
                      Problem Solver
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                One last thing, I'm available for internships or freelance work,
                so feel free to reach out and say hello! I promise I don't bite{" "}
                <span role="img" aria-label="smile">
                  😉
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutmepage;
