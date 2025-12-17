

const Testimonials = () => {
  return (
    <div className="flex justify-evenly bg-[#242424] md:text-[1rem] text-xs scroll-mt-[40vh]" id="Testimonials">
      <div className="bg-[#f3f3f3] w-1/3 rounded-r-3xl md:px-6 md:py-16 px-2 py-6 flex flex-col justify-center gap-4">
        <div className="flex flex-col items-start text-left gap-4 ">
          <p className="gabriela-regular opacity-0 fade1">
            "Jun was an absolute pleasure to work with. Not only was he very
            skilled technically, he was always open to collaborating and
            improving our app in any way. There was never a time we couldn't hop
            on a quick call to discuss our app. He always offered feedback and
            was active during team meet ups. Hope to work with Jun again on
            future projects!"
          </p>
          <hr className="w-[70px]" />
        </div>
        <div className="flex flex-col items-end text-right gap-4">
          <p className="major-mono-display-regular opacity-0 fade1">Jon Deichmann</p>
          <hr className="w-[100px]" />
        </div>
      </div>
      <div className="bg-[#242424] w-1/3 md:px-6 md:py-16 px-2 py-6 text-white flex flex-col items-center justify-center gap-4 text-center">
        <p className="gabriela-regular opacity-0 fade2">
          "I had a wonderful experience collaborating with Jun Lee. He is
          easygoing and quick to resolve issues, and I appreciated his
          willingness to teach while addressing challenges."
        </p>
        <hr className="w-[100px]" />
        <p className="pt-2 major-mono-display-regular opacity-0 fade2">JC Smiley</p>
        <hr className="w-[70px]" />
      </div>
      <div className="bg-[#f3f3f3] w-1/3 rounded-tl-3xl md:px-6 md:py-16 px-2 py-6 flex flex-col justify-center gap-4">
        <div className="flex flex-col items-end text-right gap-4">
          <p className="gabriela-regular opacity-0 fade3">
            "I had the pleasure of working with Jun on a Chingu voyage. His
            understanding of core front-end technologies, including Tailwind
            CSS, JavaScript, and React, was invaluable. Jun consistently found
            solutions to our challenges and proactively suggested improvements
            to our codebase. He's an exceptional communicator and collaborator,
            and his work ethic is truly commendable. I'm confident he would be a
            valuable asset to any team."
          </p>
          <hr className="w-[70px]" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="major-mono-display-regular opacity-0 fade3">Ivan Rebolledo</p>
          <hr className="w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
