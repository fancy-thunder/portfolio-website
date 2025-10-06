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
    <div className={`py-12 px-4 font-sans transition-colors duration-300 ${darkMode ? "bg-[#181824] text-[#F3F3F3]" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${darkMode ? "bg-[#23272F] text-[#A1A1AA]" : "bg-gray-200 text-gray-700"}`}>
            Experience
          </span>
        </div>
        {/* Heading */}
        <h2 className={`text-center text-lg md:text-xl font-medium mb-10 ${darkMode ? "text-[#A1A1AA]" : "text-[#4b637b]"}`}>
          Here is a quick summary of my most recent experiences:
        </h2>
        {/* Experience Card */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-sm p-8 flex flex-col gap-4 border transition-colors duration-300 ${darkMode ? "bg-[#23272F] border-[#23272F] text-[#F3F3F3]" : "bg-white border-gray-100 text-gray-900"}`}
              style={{
                boxShadow: "0 2px 6px 0 rgba(75,85,99,0.06)",
                borderRadius: "0.75rem",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-8 w-auto mr-3"
                  />
                  <span className={`font-bold text-lg md:text-xl ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>
                    {exp.role}
                  </span>
                </div>
                <div className={`text-sm md:text-base whitespace-nowrap ${darkMode ? "text-[#A1A1AA]" : "text-gray-500"}`}>
                  {exp.date}
                </div>
              </div>
              <ul className={`list-disc pl-5 space-y-1 text-base mt-2 ${darkMode ? "text-[#A1A1AA]" : "text-[#4b637b]"}`}>
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
