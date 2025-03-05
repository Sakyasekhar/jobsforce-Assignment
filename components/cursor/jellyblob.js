"use client"
import {gsap,Expo} from "gsap";
import "./jellyblob.css";

import { useEffect, useLayoutEffect, useRef, useCallback, useState } from 'react';

// Gsap Ticker Function
function useTicker(callback, paused) {
  useLayoutEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

const EMPTY = {};
function useInstance(value = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

// Function for Mouse Move Scale Change
function getScale(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}


// Jelly Blob Function
const JellyBlob = ({text,size,color}) => {
  const [revColor, setRevColor] = useState(color === "black" ? "white" : "black");
  useEffect(() => {
    setRevColor(color === "black" ? "white" : "black");
  }, [color]);
  
  // React Refs for Jelly Blob and Text
  const jellyRef = useRef(null);
  const textRef = useRef(null);

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();



  // Set GSAP quick setter Values on useLayoutEffect Update
  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.width = gsap.quickSetter(jellyRef.current, "width","px");
    set.rt = gsap.quickSetter(textRef.current, "rotate", "deg");
  }, []);

  // Start Animation loop
  const loop = useCallback(() => {
    // Calculate angle and scale based on velocity
    var rotation = getAngle(vel.x, vel.y); // Mouse Move Angle
    var scale = getScale(vel.x, vel.y); // Blob Squeeze Amount


    // Set GSAP quick setter Values on Loop Function
    set.x(pos.x);
    set.y(pos.y);
    //set.width(size + (scale*120));
    set.r(rotation);
    set.sx(1 + scale);
    set.sy(1 - scale);
    set.rt(-rotation);
  }, []);

  // Run on Mouse Move
  useLayoutEffect(() => {
    // Caluclate Everything Function
    const setFromEvent = (e) => {
      // Mouse X and Y
      const x = e.clientX;
      const y = e.clientY;

      // Animate Position and calculate Velocity with GSAP
      gsap.to(pos, {
        x: x,
        y: y,
        duration: 1.25,
        ease: Expo.easeOut,
        onUpdate: () => {
          vel.x = x - pos.x;
          vel.y = y - pos.y;
        }
      });

      loop();
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useTicker(loop);

  // Animate base size change and text reveal when the "size" prop changes.
  useLayoutEffect(() => {
    // Animate the base size (width & height) so it grows/shrinks from the center.
    gsap.to(jellyRef.current, {
      width: size,
      height: size,
      duration: 0.5,
      ease: "power2.out"
    });
    // Fade in the text when size is increased, fade it out when small.
    gsap.to(textRef.current, {
      opacity: size > 10 ? 1 : 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [size]);

  // Return UI
  return (
    <div className="fixed container-div">
      <div ref={jellyRef} id={"jelly-id"} className={`jelly-blob  `} style={{
          backgroundColor: color,
          width: `${size}px`,    
          height: `${size}px`,   
          borderRadius: "50%",  
        }}>
        <div ref={textRef} id={"text-id"} className={`inside-text text-${revColor}`}>
        {text}
        </div>
      </div>
    </div>
  );
};

export default JellyBlob;