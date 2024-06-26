import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import temp from '../assets/temp.jpg'
import tetris from '../assets/tetris.png'
import semhub from '../assets/semhub.png'
import robot from '../assets/robot.jpg'
import zootopia from "../assets/zootopia.png"
import bird from "../assets/FlappyBird.png"
import carlane from "../assets/solidWhiteRight.mp4"

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: zootopia,
      title: "Zootopia",
      github: "https://github.com/charleszhang418/Zootopia",
      demo: ""
    },
    {
      id: 2,
      image: semhub,
      title: "Semhub",
      github: "https://github.com/charleszhang418/Semhub",
      demo: ""
    },
    {
      id: 3,
      image: robot,
      title: "Nirvana",
      github: "https://github.com/charleszhang418/Nirvana-2019",
      demo: ""
    },
    {
      id: 4,
      image: bird,
      title: "FlappyBird",
      github: "https://github.com/charleszhang418/FlappyBird",
      demo: ""
    },
    {
      id: 5,
      image: tetris,
      title: "Biquadirs",
      github: "https://github.com/charleszhang418/Tetris",
      demo: ""
    }
  ];

  return (
    <Section
      title="Projects" id="Project"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-1">
        <div
              key={5}
              className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
            >
              <video autoPlay loop muted className="w-2/3">
                <source src={carlane}/>
              </video>
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2>{"LaneDetection"}</h2>
                <a
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={"https://github.com/charleszhang418"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
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
              {/* <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
