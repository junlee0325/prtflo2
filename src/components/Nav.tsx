import React from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

type Props = {};

const links = [
  { id: "Greeting", label: "JKL" },
  { id: "Summary", label: "Summary" },
  { id: "Projects", label: "Projects" },
  { id: "Skills", label: "Skills & Tech" },
  { id: "Testimonials", label: "Testimonials" },
];

const Nav = (props: Props) => {
  const active = useScrollSpy();

  return (
    <div
      className="md:w-1/17 fixed hidden top-0 left-0 h-full md:flex flex-row flex-nowrap justify-start items-end gap-10 px-8 major-mono-display-regular"
      style={{ writingMode: "sideways-rl" }}
    >
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`
            transition-all duration-300 ease-out
            ${
              active === id
                ? "text-black text-[1.4rem] translate-x-[10px]"
                : "text-black text-[1rem]"
            }
          `}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default Nav;
