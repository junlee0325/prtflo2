

interface TechCardProps {
  logo: string;
  label: string;
  index: number;
}

const TechCard: React.FC<TechCardProps> = ({ logo, label, index }) => {
  return (
    <div
      className={`w-[35px] md:w-auto border-white border-b-1 border-l-1 rounded-bl-sm flex flex-col items-start justify-end transition-all duration-400 ease-out  hover:bg-[#f3f3f3] hover:translate-y-[-30px] hover:scale-120 grayscale  text-white hover:text-black md:gap-10 gap-4`}
       style={{
        animation: `waveColor 5s ease-out infinite`,
        animationDelay: `${index * .2}s`,
      }}
    >
      <div className=" flex flex-col justify-between items-center ">
        <img
          src={logo}
          alt={label}
          className={` object-contain object-no-repeat max-w-full px-1 pt-1`}
        />
      </div>
      <span
        className=" w-full md:text-base text-xs quicksand text-center p-2"
        style={{ writingMode: "sideways-rl" }}
      >
        {label}
      </span>
    </div>
  );
};

export default TechCard;
