import { useState, useEffect } from "react";
import hwatuTarot from "../assets/screenshots/hwatuTarot.webp";
import fridgeRaider from "../assets/screenshots/fridgeRaider.webp";
import skye from "../assets/screenshots/skye.webp";
import weeklyBytes from "../assets/screenshots/weeklyBytes.webp";
import brilly from "../assets/screenshots/brilly.webp";
import aac from "../assets/screenshots/aac.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Project = {
  title: string;
  dsc: string;
  projectUrl: string;
  repo: string;
  screenshot: string;
  techUsed: string[];
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "brilly",
      dsc: "An AI-assisted flashcard learning app that helps users deepen understanding by generating detailed explanations and contextual examples. Built with React and TypeScript for a scalable component-based architecture, styled with Tailwind for responsive design, and powered by Supabase for authentication and database storage. I integrated AI API calls to dynamically enhance user-provided flashcards and collaborated in Figma to design intuitive UI flows.",
      projectUrl: "https://brilly.netlify.app",
      repo: "https://github.com/danajeon/brilly",
      screenshot: brilly,
      techUsed: [
        "React",
        "TypeScript",
        "Tailwind",
        "Supabase",
        "Figma",
        "Git",
        "GitHub",
        "OpenAI API",
      ],
    },
    {
      title: "Atlanta Arm Candy",
      dsc: "An e-commerce Shopify store selling curated bags and purses, customized for a smooth user shopping experience. I built and customized the store using Shopify Liquid templates. Integrated responsive design for mobile and desktop. Managed theme customization and store functionality to create a professional and user-friendly shopping experience.",
      projectUrl: "https://jinoda.myshopify.com/",
      repo: "",
      screenshot: aac,
      techUsed: ["Shopify", "CSS"],
    },
    {
      title: "Weekly Bytes",
      dsc: "A weekly meal planner that allows users to select a custom date range and automatically generate randomized menus. Built with React and Tailwind for a clean, responsive front end, and integrated external APIs to fetch diverse recipe options. I handled API integration, state management, and component reusability to ensure scalability and consistent UX. Designed and prototyped collaboratively in Figma and managed version control via Git and GitHub.",
      projectUrl: "https://weekly-bytes.com/",
      repo: "https://github.com/chingu-voyages/V53-tier2-team-26",
      screenshot: weeklyBytes,
      techUsed: [
        "React",
        "Tailwind",
        "API",
        "Figma",
        "Git",
        "GitHub",
        "JavaScript",
      ],
    },
    {
      title: "Skye Contractor Inc.",
      dsc: "A promotional website for a local construction contractor showcasing services, testimonials, and project galleries. Built using React for modularity and SASS for maintainable, structured styling. I developed a responsive layout and image carousel, optimized loading performance, and implemented semantic HTML for SEO. The site improved client visibility and served as a digital business card for local customers.",
      projectUrl: "https://sangkyu-kim.pages.dev/",
      repo: "https://github.com/junlee0325/sangkyu-kim",
      screenshot: skye,
      techUsed: ["React", "SASS", "Git", "GitHub", "JavaScript"],
    },
    {
      title: "Hwatu Tarot",
      dsc: "A solitaire-inspired card reading game combining Korean Hwatu cards and daily horoscopes. Built entirely with vanilla JavaScript, HTML, and CSS to handle complex game logic, animations, and state management without external frameworks. I designed the gameplay loop, randomization logic, and UI, blending cultural inspiration with accessible design. This project demonstrates my ability to manage both logic-heavy and visually engaging front-end builds.",
      projectUrl: "https://hwatu-tarot.com",
      repo: "https://github.com/junlee0325/Hwatu-Tarot",
      screenshot: hwatuTarot,
      techUsed: ["JavaScript", "HTML", "CSS", "Git", "GitHub"],
    },
    {
      title: "Fridge Raider",
      dsc: "A recipe finder that helps users reduce food waste by searching for meals based on ingredients they already have. Built with JavaScript, HTML, and CSS for lightweight responsiveness and API integration to fetch recipe data dynamically. I implemented user input handling, API querying, and a results display system, ensuring clarity and usability. This project highlights my ability to build functional web tools centered on real-world user needs.",
      projectUrl: "https://junlee0325.github.io/Fridge-Raider/",
      repo: "https://github.com/junlee0325/Fridge-Raider",
      screenshot: fridgeRaider,
      techUsed: ["JavaScript", "HTML", "CSS", "API", "Git", "GitHub"],
    },
  ];

  const [focused, setFocused] = useState<Project>(projects[0]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [imgHover, setImgHover] = useState(false);

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.screenshot;
    });
  }, []);

  return (
    <div
      className="w-full flex flex-row bg-[#242424] scroll-mt-[10vh]"
      id="Projects"
    >
      <div className="h-full w-2/3 md:px-6 md:py-16 px-2 py-10 flex flex-col gap-10 justify-center bg-[#f3f3f3] rounded-r-3xl">
        <div className="flex flex-col gap-4 ">
          <div className="relative md:h-[300px] animate-bouncy">
            <a
              href={`${focused.projectUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute w-full h-full cursor-pointer flex justify-center items-center hover:bg-[#ffffff70] text-[50px]`}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setImgHover(true)}
              onMouseLeave={() => setImgHover(false)}
            >
              {imgHover && (
                <OpenInNewIcon
                  fontSize="inherit"
                  className="hover:opacity-50"
                />
              )}
            </a>
            <img
              src={focused.screenshot}
              loading="eager"
              decoding="async"
              className="w-full h-full rounded-lg object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-4 animate-bouncy">
            <p className="major-mono-display-regular md:text-[1.5em] text-sm ">
              {focused.title}
            </p>
            <hr className=" w-[100px]" />
          </div>
          <div className="text-right flex flex-col items-end gap-4 animate-bouncy">
            <div className="flex flex-wrap justify-end quicksand md:text-[1rem] text-xs">
              {focused.techUsed.map((x, i) => {
                if (i === focused.techUsed.length - 1) {
                  return <span key={i} className="">{x}</span>;
                } else {
                  return <span key={i} className="flex flex-nowrap mr-1">{x} |</span>;
                }
              })}
            </div>
            <hr className=" w-[100px]" />
          </div>
          <div className="flex flex-col gap-4 animate-bouncy">
            <p className="quicksand md:text-sm text-xs">{focused.dsc}</p>
            <hr className=" w-[100px]" />
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-end gap-2 gabriela-regular md:text-sm text-xs ">
              <a
                href={`${focused.projectUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:opacity-50 cursor-pointer flex items-end`}
                onClick={(e) => e.stopPropagation()}
              >
                Visit&nbsp;
                <OpenInNewIcon fontSize="small" />
              </a>
              <p
                className={`${
                  focused.repo === "" ? "hidden" : "flex"
                } items-end`}
              >
                |
              </p>
              <a
                href={`${focused.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  focused.repo === "" ? "hidden" : "flex"
                } hover:opacity-50 cursor-pointer flex items-end`}
                onClick={(e) => e.stopPropagation()}
              >
                Repository&nbsp;
                <GitHubIcon fontSize="small" />
              </a>
            </div>
            <hr className=" w-[70px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#242424] w-1/3 flex flex-col justify-start items-end gap-6 md:p-6 md:py-0 p-2 py-6">
        <div className="flex flex-col items-end gap-4 text-white pb-4">
          <p className="major-mono-display-regular md:text-[1.5rem] text-md">
            Projects
          </p>
          <hr className=" w-[100px]" />
        </div>
        {projects.map((x,i) => (
          <div
            key={i}
            className={`gabriela-regular w-full 
               flex flex-col ${
                 x.title === focused.title ? "items-start" : "items-end"
               }  gap-4  transition-all duration-400 ease-out cursor-pointer`}
            onClick={() => setFocused(x)}
            onMouseEnter={() => setHovered(x.title)}
            onMouseLeave={() => setHovered(null)}
          >
            <p
              className={`${
                x.title === focused.title ? "text-left" : "text-right"
              } w-full text-white md:text-lg text-xs`}
            >
              {x.title}
            </p>
            <hr
              className={`text-white ${
                hovered === x.title ? "w-full" : "w-[70px]"
              } transition-all duration-400 ease-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
