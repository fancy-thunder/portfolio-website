import React from "react";

// Languages
const languages = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

// Frameworks
const frameworks = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
];

// Developer Tools
const tools = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Cursor",
    icon: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/cursor.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
];

const Skillpage = () => {
  return (
    <div className="bg-white py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4 pt-8">
          <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
            Skills
          </span>
        </div>
        {/* Heading */}
        <h2 className="text-center text-lg md:text-xl text-[#4b637b] font-medium mb-10">
          The skills, tools and technologies I am really good at:
        </h2>
        {/* Languages */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6 md:gap-x-12 justify-items-center">
            {languages.map((lang) => (
              <div key={lang.name} className="flex flex-col items-center">
                <img
                  src={lang.icon}
                  alt={lang.name}
                  className="w-14 h-14 mb-2 object-contain"
                  loading="lazy"
                />
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Frameworks */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-12 justify-items-center">
            {frameworks.map((fw) => (
              <div key={fw.name} className="flex flex-col items-center">
                <img
                  src={fw.icon}
                  alt={fw.name}
                  className="w-14 h-14 mb-2 object-contain"
                  loading="lazy"
                />
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {fw.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Developer Tools */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Developer Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-12 justify-items-center">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-14 h-14 mb-2 object-contain"
                  loading="lazy"
                />
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillpage;
