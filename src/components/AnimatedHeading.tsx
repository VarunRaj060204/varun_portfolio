"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedHeadingProps {
  title: string;
  className?: string;
}

export default function AnimatedHeading({ title, className = "" }: AnimatedHeadingProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
  };

  return (
    <motion.h2 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`text-4xl md:text-[56px] font-bold uppercase tracking-tight mb-16 flex flex-wrap ${className}`}
      style={{ perspective: 1000 }}
    >
      {title.split(" ").map((word, index) => (
        <span key={index} className="mr-3 md:mr-4 inline-flex overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={child} className="inline-block origin-bottom">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
