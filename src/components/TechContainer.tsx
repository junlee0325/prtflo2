import React, { useState } from "react";
import TechCard from "./TechCard";

import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import javascript from "../assets/tech/javascript.webp";
import react from "../assets/tech/react.webp";
import tailwind from "../assets/tech/tailwind.webp";
import sass from "../assets/tech/sass.webp";
import git from "../assets/tech/git.webp";
import github from "../assets/tech/github.webp";
import figma from "../assets/tech/figma.webp";
import api from "../assets/tech/api.webp";
import typescript from "../assets/tech/typescript.webp";
import photoshop from "../assets/tech/photoshop.webp";
import supabase from "../assets/tech/supabase.webp";
import reactNative from "../assets/tech/reactNative.webp";
import shopify from "../assets/tech/shopify.webp";
import aws from "../assets/tech/aws.webp"

interface Tech {
  logo: string;
  label: string;
}

interface TechContainerProps {
  
}

const TechContainer: React.FC<TechContainerProps> = () => {
  

  const techs: Tech[] = [
    { logo: react, label: "React" },
    { logo: typescript, label: "TypeScript" },
    { logo: javascript, label: "JavaScript" },
    { logo: tailwind, label: "Tailwind" },
    { logo: sass, label: "SASS" },
    { logo: git, label: "Git" },
    { logo: github, label: "GitHub" },
    { logo: figma, label: "Figma" },
    { logo: api, label: "API" },
    { logo: photoshop, label: "Photoshop" },
    { logo: supabase, label: "Supabase" },
    { logo: reactNative, label: "React Native" },
    { logo: html, label: "HTML" },
    { logo: css, label: "CSS" },
    { logo: shopify, label: "Shopify" },
    { logo: aws, label: "AWS CCP"}
  ];

  return (
    <div
      className={`text-md rounded-l-3xl rounded-br-3xl flex flex-col items-start md:p-16 p-6 bg-[#242424] gap-12 text-white scroll-mt-[20vh]`} id="Skills"
    >
      <div className="flex flex-col items-start gap-4">
        <p className="major-mono-display-regular md:text-[1.5rem] text-md">Skills & Tech</p>
        <hr className=" w-[100px]" />
      </div>
      <div className="w-full flex md:flex-nowrap flex-wrap justify-center items-end md:gap-x-2 md:gap-y-2 gap-x-2 gap-y-6">
        {techs.map(({ logo, label },i) => (
          <TechCard
            key={i}
            logo={logo}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default TechContainer
