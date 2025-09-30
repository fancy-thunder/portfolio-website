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

const Experiencepage = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
            Experience
          </span>
        </div>
        {/* Heading */}
        <h2 className="text-center text-lg md:text-xl text-[#4b637b] font-medium mb-10">
          Here is a quick summary of my most recent experiences:
        </h2>
        {/* Experience Card */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col gap-4 border border-gray-100"
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
                  <span className="font-bold text-lg md:text-xl text-gray-900">
                    {exp.role}
                  </span>
                </div>
                <div className="text-gray-500 text-sm md:text-base whitespace-nowrap">
                  {exp.date}
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-[#4b637b] text-base mt-2">
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
