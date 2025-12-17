import React from "react";
import down from "../assets/down.png";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-nowrap">
      <div className="bg-[#242424] w-2/3 rounded-tl-3xl rounded-br-3xl md:p-16 p-6 text-white quicksand md:text-base text-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="gabriela-regular md:text-lg text-sm">Interested in working together?</p>
            <hr className="w-[100px]" />
          </div>
          <div className="flex flex-col items-end text-right gap-4">
            <p className="quicksand md:text-base text-sm">
              I’m open to full-time roles, freelance work, and collaboration.
            </p>
            <hr className="w-[100px]" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="major-mono-display-regular text-base text-xs">
              Let's build something together.
            </p>
            <hr className="w-[100px]" />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center gap-4">
         <div className="flex flex-col gap-4">
            <p className="quicksand md:text-[1.2rem] text-xs">
              Contact Info Below
            </p>
            <hr className="w-[70px]" />
          </div>
        <img src={down} className="animate-bouncy object-contain w-1/4" />
      </div>
    </div>
  );
};

export default Contact;
