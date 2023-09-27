import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const Hero = ( { darkMode } ) => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://github.com/charleszhang418",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "mailto:c655zhan@uwaterloo.ca",
      icon: <MdEmail />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <div class="py-8 ..."></div>
      <div class="py-8 ..."></div>
      { darkMode ? (
        <div className="flex gap-x-8">
        
          <h2 className="text-8xl bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">Charles Zhang</h2>
          {/* <h2 className="inline-block text-8xl text-indigo-400">Zhang</h2> */}

      </div>
      ) : (
        <div className="flex gap-x-8">
      
          <h2 className="text-8xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">Charles Zhang</h2>
          {/* <h2 className="inline-block text-8xl text-blue-400">Zhang</h2> */}

        </div>
       
      
      )}  
      <p className="max-w-xl font-light text-gray-500">
      <div class="py-8 ..."></div>
      
      <TypeAnimation
        sequence={[
          "I'm a Developer",
          1000,
          "I'm a Sports Lover",
          1000,
          "I'm a Photographer",
          1000,
        ]}
        speed={40}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-indigo-500"
          >
            {icon}
          </a>
        ))}
      </div>

      

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
