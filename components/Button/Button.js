import React from "react";
import { motion } from "framer-motion";

const RippleButton = ({ width, lgWidth, height, text }) => {
  return (
    <motion.a
      href="#"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: width, // Full width on small screens
        height: `${height}px`,
        fontSize: "30px",
        fontWeight: "500",
        textDecoration: "none",
        overflow: "hidden",
        borderRadius: "100px",
        border: "1px solid black",
        background: "white",
        color: "black",
        cursor: "pointer",
      }}
      className="sm:w-[auto] sm:max-w-[420px]" // Restrict width to 420px on large screens
      whileHover="hover"
      initial="initial"
    >
      {/* Ripple Effect */}
      <motion.span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          borderRadius: "50% 50% 0 0",
          zIndex: 1,
        }}
        variants={{
          initial: { transform: "translateY(100%)", borderRadius: "50% 50% 0 0" },
          hover: { transform: "translateY(0%)", borderRadius: "0%", transition: { duration: 0.8, ease: [0.4, 0, 0, 1] } },
        }}
      />

      {/* Button Text */}
      <motion.span
        style={{
          position: "relative",
          zIndex: 2,
          overflow: "hidden",
          display: "block",
          color: "black",
        }}
        variants={{
          hover: { color: "white", transition: { duration: 0.3 } },
        }}
      >
        <motion.span
          style={{ display: "block", position: "relative" }}
          variants={{
            hover: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
          }}
        >
          {text}
          <motion.span
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              color: "white",
            }}
          >
            {text}
          </motion.span>
        </motion.span>
      </motion.span>
    </motion.a>
  );
};

export default RippleButton;