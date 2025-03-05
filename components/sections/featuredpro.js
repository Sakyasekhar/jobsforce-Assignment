import React from "react";
import RevealOnScroll from "../Scrollreveal/divReveal";
import TextReveal from "../Scrollreveal/TextReveal";

export default function FeaturedPro({ onMouseEnter, onMouseLeave, videoRefs, handleprojectvidPlay, handleprojectvidStop }) {
  const projects = [
    { title: "Punto Pago", description: "The First Super-App in Latin America", videopath: "/asserts/projects/cover-1.mp4" },
    { title: "Kelvin Zero", description: "A digital product for passwordless authentication", videopath: "/asserts/projects/cover-2.mp4" },
    { title: "DaoWay", description: "Astrology planner app: plan, achieve, thrive", videopath: "/asserts/projects/cover-3.mp4" },
    { title: "Magma", description: "The ultimate tool for building in the Web3 era", videopath: "/asserts/projects/cover-4.mp4" },
    { title: "Riyadh", description: "Official website of Riyadh, Saudi Arabia's capital", videopath: "/asserts/projects/cover-5.mp4" },
    { title: "FlipaClip", description: "The best tool for stop-motion animation", videopath: "/asserts/projects/cover-7.mp4" },
    { title: "Qvino", description: "Wine marketplace with interactive learning", videopath: "/asserts/projects/cover-6.mp4" },
    { title: "Zelt", description: "Run HR, IT and Finance in one place", videopath: "/asserts/projects/cover-9.mp4" },
    { title: "Potion", description: "Sales tool for increasing conversions", videopath: "/asserts/projects/cover-8.mp4" },
    { title: "Furrempipe", description: "Galvanized steel metal manufacturer", videopath: "/asserts/projects/cover-11.mp4" },
    { title: "Cisco", description: "Cloud based network management", videopath: "/asserts/projects/cover-10.mp4" },
  ];

  return (
    <div className="text-white rounded-t-[50px] bg-black w-full font-light py-16 px-4 md:px-8" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* heading */}
      <div className="text-[70px] sm:[text-100px] lg:text-[140px] m-auto md:w-[80%]  leading-[0.9]">
        <TextReveal text={"Featured"} />
        <div className="flex items-center gap-4">
          <video
            src="/asserts/videos/header2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-20 h-15 sm:w-19 sm:h-14  md:w-50 md:h-35 rounded-[100px] object-cover"
          />

          <TextReveal text={"projects"} className={"font-extralight italic"}/>
       
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 w-full md:max-w-[65%] md:mx-38 py-30 grid-auto-rows-[minmax(200px,auto)]">
        {projects.map((project, index) => (
        <RevealOnScroll  key={index}>
          <div
            key={index}
            className={` ${index % 2 === 1 ? " md:translate-y-80" : ""}`} 
            onMouseEnter={()=>handleprojectvidPlay(index)}
            onMouseLeave={()=>handleprojectvidStop(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={project.videopath}
              alt={project.title}
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[40px]"
            />
            <div className="w-[78%] py-5">
              <span className="font-semibold text-xl">{project.title}</span>
              &nbsp;– <span className="text-xl">{project.description}</span>
            </div>
          </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}