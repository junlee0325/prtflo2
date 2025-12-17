// import { useState } from "react";
// import "./App.css";
// import Greeting from "./components/Greeting";
// import Summary from "./components/Summary";
// import Projects from "./components/Projects";
// import TechContainer from "./components/TechContainer";
// import Testimonials from "./components/Testimonials";
// import Nav from "./components/Nav";


// function App() {
  
//   return (
//     <div className="flex flex-row justify-center bg-[#F3F3F3] ">
//       <div className="flex flex-row justify-between max-w-[950px]">
//         <Nav />
//         <div className="w-16/17">
//           <Greeting />
//           <Summary />
//           <Projects />
//           <TechContainer />
//           <Testimonials />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, useRef } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import TechContainer from "./components/TechContainer";
import Testimonials from "./components/Testimonials";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function PageContent() {
  return (
    <>
      <Greeting />
      <Summary />
      <Projects />
      <TechContainer />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const halfway = el.scrollHeight / 2;

      if (el.scrollTop >= halfway) {
        el.scrollTop = el.scrollTop - halfway;
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-y-scroll bg-[#F3F3F3] flex justify-center"
    >
      <div className="flex flex-row md:justify-end justify-center md:max-w-[950px] w-screen relative">
        <Nav />
        <div className="md:w-16/17 w-full">
          <PageContent />
          <PageContent /> {/* duplicated for infinite loop */}
        </div>
      </div>
    </div>
  );
}

export default App;

