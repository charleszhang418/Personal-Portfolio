import React from "react";
import Section from "./common/Section";

const TechStack = () => {
  const stacks = {
    frontend: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "TypeScript"],
    backend: ["AWS", "Bash", "C/C++", "Docker", "FastAPI", "Flask", "Go", "Java", 
            "MongoDB", "Node.js", "REST API", "SQL", "Spring Boot"],
    ML: ["Python", "Matplotlib", "NumPy", "OpenCV", "Pandas", "PyTorch", "Scikit-Learn"]

  };

  return (
    <Section title="Tech Stack">
      <div className="flex flex-col justify-center items-start gap-8 mx-auto">
        {Object.keys(stacks).map((key) => (
          <div key={key} className="flex-1 bg-white dark:bg-slate-900 p-6 ring-1 ring-slate-900/5 rounded-xl shadow-md dark:shadow-gray-300 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold text-center">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {stacks[key].map((tech) => (
                <li key={tech} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md text-center">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
