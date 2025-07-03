import React from "react";

import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative, TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs, FaReact, FaPython, FaHtml5, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoGithub } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { GiThink } from "react-icons/gi";
import { LuScanSearch } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
  },
  {
    icon: <IoLogoCss3 />,
    name: "CSS",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <TbBrandJavascript />,
    name: "JavaScript",
  },
  {
    icon: <BiLogoTypescript />,
    name: "TypeScript",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <RiNextjsFill />,
    name: "NextJs",
  },
  {
    icon: <FaReact />,
    name: "ReactJs",
  },
  {
    icon: <TbBrandReactNative />,
    name: "React Native",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <BiLogoGithub />,
    name: "GitHub",
  },
  {
    icon: <IoLogoFigma/>,
    name: "Figma Design",
  },
  {
    icon: <GrUserWorker />,
    name: "Diligent Worker"
  },
  ,
  {
    icon: <LuScanSearch />,
    name: "Problem Identification"
  },
  {
    icon: <GiThink />,
    name: "Creative Thinking"
  }
];

export default skills;
