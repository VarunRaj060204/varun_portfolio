"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const letterVariant: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  const name = "Varun Raj";
  const title = "Full Stack Developer".split(" ");

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Dark Mode Background */}
        <div className="hidden dark:block w-full h-full relative">
          <Image
            src="/abstract_tech_bg.png"
            alt="Abstract Tech Background Dark"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        {/* Light Mode Background */}
        <div className="block dark:hidden w-full h-full relative">
          <Image
            src="/abstract_tech_light_bg.png"
            alt="Abstract Tech Background Light"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/20 via-canvas/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 mt-16 pointer-events-none flex flex-col items-center"
        style={{ y: textY, opacity }}
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full overflow-hidden border-2 border-batman-red shadow-[0_0_30px_rgba(217,4,41,0.3)]"
        >
          <Image
            src="/profile.jpeg"
            alt="Varun Raj"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 pointer-events-auto cursor-pointer"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-body-strong text-lg md:text-xl font-light uppercase tracking-[4px] mb-4"
        >
          Hi, I am
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-[80px] font-bold uppercase tracking-tight leading-none mb-4 flex justify-center flex-wrap text-ink drop-shadow-2xl pointer-events-auto"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariant} 
              className={`inline-block cursor-default transition-colors duration-200 hover:text-batman-red ${char === " " ? "w-4 md:w-8" : ""}`}
              whileHover={{ scale: 1.15, y: -10 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl text-batman-red font-bold uppercase tracking-wider mb-8 drop-shadow-lg flex justify-center flex-wrap gap-2 md:gap-4 pointer-events-auto"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {title.map((word, index) => (
            <motion.span 
              key={index} 
              variants={letterVariant}
              className="inline-block cursor-default hover:text-ink dark:hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 pointer-events-auto"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View Projects
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-xs uppercase tracking-[1.5px] text-body font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-batman-red to-transparent" />
      </motion.div>
    </section>
  );
}
