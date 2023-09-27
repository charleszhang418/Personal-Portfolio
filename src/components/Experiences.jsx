import React from "react";
import Section from "./common/Section";


import bbicon from "../assets/blackberry.png"
import bbiconw from "../assets/blackberry-white.png"
import unisound from "../assets/unisound.png"

const Experiences = () => {
  const Jobs = [
    {
      id: 1,
      image: bbicon,
      name: "Blackberry Limited",
      comment:
        "Software Developer in TeamIVY",
    },
    {
      id: 2,
      image: bbicon,
      name: "Blackberry Limited",
      comment:
        "Software Developer in TeamIVY",
    },
    {
      id: 3,
      image: unisound,
      name: "Unisound AI Technology Co.,Ltd",
      comment:
        "Backend Developer for speech recognition",
    },
  ];

  return (
    <Section
      title="Work Experiences"
    >
      <div className="max-w-xl flex flex-col gap-8 ">
        {Jobs.map(({ id, image, name, comment }) => (
          <div className="bg-white dark:bg-slate-900 flex p-4 ring-1 ring-slate-900/5 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/4">
              <img
                src={image}
                alt={name}
                className="object-scale-down h-24 w-48 object-cover object-left pt-2"
              />
            </div>
            <div className="w-3/4 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
