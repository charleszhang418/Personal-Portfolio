import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import temp from '../assets/temp.jpg'
const Projects = () => {
  const projects = [
    {
      id: 1,
      image: temp,
      title: "Biquadirs",
      github: "https://github.com/charleszhang418/Tetris",
      demo: ""
    },
    {
      id: 2,
      image: temp,
      title: "Semhub",
      github: "https://github.com/charleszhang418/Semhub",
      demo: ""
    },
    {
      id: 3,
      image: temp,
      title: "Nirvana",
      github: "https://github.com/charleszhang418/Nirvana-2019",
      demo: ""
    },
    {
      id: 4,
      image: temp,
      title: "ToDoIt",
      github: "https://github.com/nodejs/node",
      demo: ""
    }
  ];

  return (
    <Section
      title="Projects"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;