"use client";

import { motion } from "framer-motion";

const TextReveal = ({ text, className,firstWordClass = "",secondWordClass = "" }) => {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden py-[4.2px] ${className}`}>
      {words.map((word, index) => (
  <span key={index} className="inline-block  px-2">
    <motion.span
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0 }} // Trigger when 0% visible
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className={`inline-block ${index === 0 ? firstWordClass : index === 1 ? secondWordClass : ""}`}
    >
      {word}
    </motion.span>
  </span>
))}
    </div>
  );
};

export default TextReveal;
