import React from "react";

const experiences = [
  {
    company: "CloudOu",
    logo: "/Images/cloud-ou-logo.webp",
    role: "Web Dev Intern",
    date: "January 2025 - March 2025",
    details: [
      "Transformed designs into fully functional web pages",
      "Developed and integrated APIs for seamless functionality",
      "Explored databases, storage solutions, and Supabase",
    ],
  },
];

const Experiencepage = ({ darkMode }) => {
  return (
  <div id="skills_section" className={`py-8 px-2 sm:py-12 sm:px-4 font-sans transition-colors duration-300 overflow-x-hidden ${darkMode ? "bg-[#111827] text-[#F3F3F3]" : "bg-gray-50 text-gray-900"}`}> 
  <div className="max-w-4xl mx-auto w-full overflow-x-hidden">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${darkMode ? "bg-[#23272F] text-[#A1A1AA]" : "bg-gray-200 text-gray-700"}`}>
            Experience
          </span>
        </div>
        {/* Heading */}
        <h2 className={`text-center text-base sm:text-lg md:text-xl font-medium mb-6 sm:mb-10 ${darkMode ? "text-[#A1A1AA]" : "text-[#4b637b]"}`}>
          Where I’ve Gained Experience:
        </h2>
        {/* Experience Card */}
  <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`rounded-lg sm:rounded-xl p-4 sm:p-8 flex flex-col gap-3 sm:gap-4 transition-colors duration-300 w-full ${darkMode ? "bg-[#23272F] text-[#F3F3F3]" : "bg-white text-gray-900"}`}
              style={{ borderRadius: "0.75rem" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-10 w-24 sm:h-8 sm:w-auto rounded-md mr-2"
                  />
                  <span className={`font-semibold text-base sm:text-lg md:text-xl ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>
                    {exp.role}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm md:text-base whitespace-nowrap ${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`}>
                  {exp.date}
                </div>
              </div>
              <ul className={`list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base mt-2 ${darkMode ? "text-[#A1A1AA]" : "text-[#4b637b]"}`}>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiencepage;
