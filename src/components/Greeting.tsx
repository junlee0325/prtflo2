
import { useState } from "react";
import jun from "../assets/jun.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FilePresentIcon from "@mui/icons-material/FilePresent";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import resume from "../assets/Jun Kyung Lee Resume 25.pdf";



const Greeting = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("junkyung9503@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div
      className="h-[100vh] w-full flex flex-row bg-[#242424] scroll-mt-[40vh]"
      id="Greeting"
    >
      <div className="bg-[#242424] h-full w-2/5 md:p-6 p-2 flex flex-col gap-10 justify-center">
        <div className="flex flex-col gap-4">
          <p className="major-mono-display-regular text-white md:text-[2.5em] text-md w-1/3 opacity-0 fade1">
            {new Date().getHours() < 12
            ? "Good Morning"
            : new Date().getHours() < 18
            ? "Good Afternoon"
            : "Good Evening"}
          </p>
          <hr className="text-white w-[100px]" />
        </div>
        <div className="text-right flex flex-col items-end gap-4">
          <p className="gabriela-regular text-white md:text-[2em] text-sm w-full opacity-0 fade2">
            I’m Jun
            <br />
            front-end developer
          </p>
          <hr className="text-white w-[100px]" />
        </div>
      </div>
      <div className="h-full w-3/5 flex flex-col justify-center items-center gap-4 bg-[#f3f3f3] rounded-l-3xl">
        <img src={jun} className="aspect-1/1 rounded-2xl md:max-w-[40%] max-w-[50%]"></img>
        <hr className="text-black w-[100px]" />
        <p className="quicksand md:text-[2em] text-md">Jun Kyung Lee</p>
        <p className="quicksand md:text-[1.2em] text-xs px-10 text-center">
          React | JavaScript | TypeScript | Tailwind | Figma | UI/UX | AWS
          Certified Cloud Practitioner
        </p>
        <div className="quicksand md:text-[1rem] text-xs flex gap-2 items-center">
          <p>junkyung9503@gmail.com</p>
          <Tooltip title={copied ? "Copied!" : "Click to copy"} arrow>
            <div
              className="cursor-pointer hover:opacity-50"
              onClick={handleCopy}
            >
              <ContentCopyIcon fontSize="inherit" />
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-row gap-6 md:text-[3em] text-2xl">
          <a
            href="https://www.linkedin.com/in/iam-junkyunglee/"
            target="_blank"
            rel="noopener norefferer"
            className="hover:opacity-50"
          >
            <LinkedInIcon fontSize="inherit" />
          </a>
          <a
            href="https://github.com/junlee0325"
            target="_blank"
            rel="noopener norefferer"
            className="hover:opacity-50"
          >
            <GitHubIcon fontSize="inherit" />
          </a>
          <Tooltip title="Resume" arrow>
            <a
              href={resume}
              download="JunKyungLee_Resume.pdf"
              className="hover:opacity-50"
            >
              <FilePresentIcon fontSize="inherit" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
