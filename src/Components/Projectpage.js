import React, { useEffect, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const GITHUB_USERNAME = "fancy-thunder"; // change to your GitHub username
const ALLOWED_REPOS = ["CollabStudy", "weather-dashboard", "portfolio-website"]; // replace with your repo names

const Projectpage = ({ darkMode }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        // Filter and order repos as specified
        const filtered = ALLOWED_REPOS.map((name) =>
          data.find((repo) => repo.name === name)
        ).filter(Boolean);
        setRepos(filtered);
      });
  }, []);

  // Filter repos before rendering
  const filteredRepos = repos.filter((repo) =>
    ALLOWED_REPOS.includes(repo.name)
  );

  return (
    <div className="max-w-6xl mx-auto">
  <div className={`py-12 px-4 font-sans transition-colors duration-300 ${darkMode ? "bg-[#030712] text-[#F3F3F3]" : "bg-white text-gray-900"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-4 pt-8">
            {/* Badge */}
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${darkMode ? "bg-[#23272F] text-[#A1A1AA]" : "bg-gray-100 text-gray-700"}`}>
              Work
            </span>
          </div>
          <h2 className={`text-center text-lg md:text-xl font-medium mb-10 ${darkMode ? "text-[#A1A1AA]" : "text-[#4b637b]"}`}>
            Some of the noteworthy projects I have built:
          </h2>
          {/* Projects */}
          <div className="flex flex-col gap-12">
            {filteredRepos.map((repo) => (
              <div
                className={`rounded-2xl shadow-sm p-8 flex flex-col md:flex-row gap-8 items-center transition-colors duration-300 ${darkMode ? "bg-[#23272F] text-[#F3F3F3]" : "bg-gray-50 text-gray-900"}`}
                key={repo.id}
              >
                {/* Project Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                  <img
                    src={repo.homepage || "/Images/project-placeholder.webp"}
                    alt={repo.name}
                    style={{ minHeight: "220px", background: "#f3f4f6" }}
                    className="rounded-xl shadow-md w-full max-w-md object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Images/project-placeholder.webp";
                    }}
                  />
                </div>
                {/* Project Details */}
                <div className="md:w-1/2 w-full flex flex-col justify-center">
                  <h3 className={`font-bold text-xl mb-2 ${darkMode ? "text-[#F3F3F3]" : "text-gray-900"}`}>
                    {repo.name}
                  </h3>
                  <p className={`mb-4 ${darkMode ? "text-[#A1A1AA]" : "text-gray-700"}`}>
                    {repo.description || "No description provided."}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(repo.topics || []).map((topic) => (
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-[#181824] text-[#A1A1AA]" : "bg-gray-200 text-gray-700"}`}
                        key={topic}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  {/* External Link */}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-500 hover:text-blue-600 mt-2"
                  >
                    <OpenInNewIcon fontSize="small" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
