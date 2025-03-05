import React from "react";
import RevealOnScroll from "../Scrollreveal/divReveal";
import TextReveal from "../Scrollreveal/TextReveal";

export default function ourphilosophy() {
  return (
    <div className="  text-black rounded-t-[70px] bg-white font-light mt-[-62px]  mb-[50px]">
      <div className="text-[60px] sm:[text-100px] lg:text-[140px] w-[80%] m-auto leading-[0.9] py-15 md:py-30">
        <TextReveal text="Our" class="font-thin italic" />
        <TextReveal text="philosophy" className="font-thin italic" />
      </div>

      <RevealOnScroll>
      <div className="flex w-[68%] m-auto justify-around items-center">
        <video
          src="/asserts/videos/2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block w-[50%] h-[400px]  object-cover "
        />

        <div className=" md:w-[40%] space-y-10 ">
          <p className="text-xl sm:text-xl lg:text-2xl leading-[1]">
          In our team, developers work alongside 
          designers, strategists and analysts. 
          Cuberto doesn&apos;t do cookie-cutter 
          solutions and we build products exactly 
          as they were during the design phase, no 
          short cuts or simplifications.
          </p>

          <p className="text-xl sm:text-xl lg:text-2xl leading-[1]">
          We&apos;re driven by user-centered design 
          that drives productivity and increases
          revenue. Our expertise and ingenuity are 
          remarkable, yet we always strive to outdo 
          and outperform our previous 
          achievements.
          </p>

        </div>
      </div>
      </RevealOnScroll>
    </div>
  );
}
