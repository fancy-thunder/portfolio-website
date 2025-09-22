import React from "react";

const Aboutmepage = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge */}
        <div className="flex">
          <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mx-auto">
            About me
          </span>
        </div>
        {/* Space below badge */}
        <div className="h-8"></div>
        {/* Main Content: Image and Text */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Section: Image with gray border */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative w-[340px] h-[420px]">
              <div className="absolute left-[-24px] top-[-24px] w-[340px] h-[420px] bg-gray-200 rounded-md z-0"></div>
              <img
                src="/Images/about-me.jpg"
                alt="About Me"
                className="relative rounded-md w-[340px] h-[420px] object-cover z-10"
              />
            </div>
          </div>
          {/* Right Section: Content */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Curious about me? Here you have it:
            </h1>
            <div className="text-gray-700 space-y-5 text-base md:text-lg">
              <p>
                I'm a passionate,{" "}
                <a href="#" className="text-blue-600 underline">
                  self-proclaimed designer
                </a>{" "}
                who specializes in full stack development (React.js & Node.js). I
                am very enthusiastic about bringing the technical and visual
                aspects of digital products to life. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, NestJS,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on products
                end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around twitter or on indie hacker, witnessing the journey of early
                startups or enjoying some free time. You can follow me on{" "}
                <a href="#" className="text-blue-600 underline">
                  Twitter
                </a>{" "}
                where I share tech-related bites and build in public, or you can
                follow me on{" "}
                <a href="#" className="text-blue-600 underline">
                  GitHub
                </a>
                .
              </p>
              <div>
                <span className="font-semibold">
                  Finally, some quick bits about me.
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Avid learner</li>
                    <li>Aspiring indie hacker</li>
                  </ul>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free to
                reach out and say hello! I promise I don't bite{" "}
                <span role="img" aria-label="smile">
                  😊
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
