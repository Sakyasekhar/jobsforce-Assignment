"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HamburgerMenu({ handleMenuClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMerging, setIsMerging] = useState(false);

  const handleClick = () => {
    handleMenuClick();
    if (isOpen) {
      setIsMerging(true);
      setTimeout(() => {
        setIsMerging(false);
        setIsOpen(false);
      }, 550);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="flex justify-center items-center w-25 h-21" onClick={handleClick}>
      {/* Hide text on small screens */}
      <p className="hidden sm:block text-[18px] font-thin text-gray-500 pr-9">menu</p>
      
      <button className="fixed right-9 flex flex-col justify-center items-center w-6 h-[20px] z-50 mix-blend-difference">
        <AnimatePresence>
          {!isOpen && !isMerging && (
            <>
              <motion.div
                className="absolute top-[30%] left-0 w-full h-0.5 bg-white"
                initial={{ width: "100%" }}
                exit={{ width: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[30%] right-0 w-full h-0.5 bg-white"
                initial={{ width: "100%" }}
                exit={{ width: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </>
          )}
        </AnimatePresence>

        {isOpen && !isMerging && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-0 h-0.5 bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "130%" }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
              style={{ transform: "rotate(40deg)", transformOrigin: "left" }}
            />
            <motion.div
              className="absolute top-0 right-0 w-0 h-0.5 bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "130%" }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
              style={{ transform: "rotate(-40deg)", transformOrigin: "right" }}
            />
          </>
        )}

        {isMerging && (
          <>
            <motion.div
              className="absolute h-0.5 bg-white"
              initial={{ width: "120%", rotate: 35 }}
              animate={{ width: "100%", rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute h-0.5 bg-white"
              initial={{ width: "120%", rotate: -35 }}
              animate={{ width: "100%", rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[100%] h-0.5 bg-white"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
              className="absolute w-[100%] h-0.5 bg-white"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 5 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            />
          </>
        )}
      </button>
    </div>
  );
}