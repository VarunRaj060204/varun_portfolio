"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";

const educationData = [
  {
    title: "Bachelors of Technology in Information Technology",
    school: "VIT VELLORE, Vellore Tamil Nadu",
    year: "2022 - 2026",
  },
  {
    title: "Class 12th",
    school: "Oxford Public School, Gorakhpur Uttar-Pradesh",
    year: "2020 - 2021",
  },
  {
    title: "Class 10th",
    school: "Army Public School, Gorakhpur Uttar-Pradesh",
    year: "2018 - 2019",
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto bg-canvas/60 backdrop-blur-sm w-full">
      <AnimatedHeading title="EDUCATION" className="justify-center text-center text-ink" />

      <div className="max-w-3xl mx-auto relative mt-16" ref={containerRef}>
        {/* Background inactive line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-hairline" />
        
        {/* Active Animated scroll line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-batman-red origin-top"
          style={{ height: lineHeight }}
        />

        {/* Timeline Items */}
        <div className="space-y-16">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}>
                
                {/* Center Node (Dot) */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-surface-card border-2 border-batman-red z-10" />

                {/* Content Box */}
                <motion.div 
                  className={`md:w-[45%] bg-surface-card p-6 border border-hairline hover:border-batman-red transition-colors duration-300 relative`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Arrow pointing to center line */}
                  <div className={`hidden md:block absolute top-3 w-4 h-[1px] bg-hairline ${isEven ? '-right-4' : '-left-4'}`} />
                  
                  <h3 className="text-batman-red text-xl font-bold tracking-[2px] mb-2">{edu.year}</h3>
                  <h4 className="text-lg font-bold uppercase text-ink mb-1">{edu.title}</h4>
                  <p className="text-body text-sm font-light uppercase tracking-[0.5px]">{edu.school}</p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
