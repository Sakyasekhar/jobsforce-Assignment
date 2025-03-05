"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import JellyBlob from "../../components/cursor/jellyblob";
import Navbar from "../../components/navbar/Navbar";

import Cuberto from "../../components/sections/cuberto";
import Featuredpro from "../../components/sections/featuredpro";
import Ourphilosophy from "../../components/sections/ourphilosophy";

import RevealOnScroll from "../../components/Scrollreveal/divReveal";
import TextReveal from "../../components/Scrollreveal/TextReveal";

export default function Home() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("black");
  const [openmenu, setOpenmenu] = useState(false);
  const videoRef = useRef(null);

  const handleMenuClick = () => {
    setOpenmenu((prev) => !prev);
  };

  const handleHover = (isHovered) => {
    setColor(isHovered ? "white" : "black");
    setSize(isHovered ? 90 : 10);
    setText(">");
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.classList.toggle("fullscreen-video"); // Toggle fullscreen class
      videoRef.current.muted = false;
      videoRef.current.play();
      setColor((prev) => (prev == "black" ? "white" : "black"));
      setText((prev) => (prev == ">" ? "X" : ">"));
    }
  };

  const videoRefs = useRef([]); // Array to store multiple video refs
  const handleprojectvidPlay = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].currentTime = 0; // Reset
      videoRefs.current[index].play();
      setSize(90);
      setText("Explore");
    }
  };

  const handleprojectvidStop = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0; // Reset to start
      setSize(10);
      setText("");
    }
  };

  return (
    <div >
      <div className="hidden sm:block"><JellyBlob size={size} text={text} color={color} /></div>
      
      <Navbar handleMenuClick={handleMenuClick} />

      {/* Menu */}
      <AnimatePresence>
        {openmenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-0 w-full z-5 h-full bg-black"
            ></motion.div>

            <motion.div
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              exit={{ x: 800 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-[50%] h-full fixed z-10 top-0 right-0 bg-white"
            ></motion.div>
          </>
        )}
      </AnimatePresence>

      {/* heading */}
      <div className="text-[50px] sm:text-[70px] lg:text-[107px] leading-[1.02] w-[90%] md:w-[80%] mx-auto my-8 sm:my-10 font-light">
        <TextReveal text="We are a digital" />
        <div className="flex items-center gap-4">
          <RevealOnScroll>
            <video
              src="/asserts/videos/header.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-16 h-11 sm:w-15 sm:h-10 md:w-37 md:h-25 rounded-[50px] sm:rounded-[80px] md:rounded-[100px]  object-cover"
            />
          </RevealOnScroll>

          <TextReveal text="design and" firstWordClass="font-thin italic" />
        </div>

        <TextReveal text="motion agency" />
      </div>

      {/* full video section*/}
      <RevealOnScroll>
        <video
          ref={videoRef}
          src="/asserts/videos/short.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full my-35 object-cover transition-all duration-500"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          onClick={handlePlay} // Toggle fullscreen on click
        />
      </RevealOnScroll>

      {/* what we do section*/}
      <RevealOnScroll>
        <Cuberto />
      </RevealOnScroll>

      {/* Featured projects section*/}
      <Featuredpro
        onMouseEnter={() => setColor("white")}
        onMouseLeave={() => setColor("black")}
        videoRefs={videoRefs}
        handleprojectvidPlay={handleprojectvidPlay}
        handleprojectvidStop={handleprojectvidStop}
      />

      {/* Our philosophy section*/}
      <Ourphilosophy />
    </div>
  );
}
