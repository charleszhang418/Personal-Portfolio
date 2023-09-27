import React from "react";
import Section from "./common/Section";

import uw from "../assets/uwaterloo.png"

const Education = () => {
  return (
  <Section
      title="Education"
    >
      <div className="max-w-xl flex flex-col gap-8 ">
          <div className="bg-white dark:bg-slate-900 flex p-4 ring-1 ring-slate-900/5 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/4">
              <img
                src={uw}
                className="object-scale-down h-24 w-48 object-cover object-left pt-2"
              />
            </div>
            <div className="w-3/4 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">University of Waterloo</h3>
              <p className="text-sm font-extralight">Bachelor of Computer Science, AI specialization, Statistics Minor</p>
            </div>
          </div>
      </div>
    </Section>
  )
};

export default Education;