"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto bg-surface-soft/60 backdrop-blur-sm w-full">
      <AnimatedHeading title="EXPERIENCE" className="justify-center text-center" />

      <div className="max-w-4xl mx-auto mt-16">
        <motion.div 
          className="relative border-l border-hairline ml-4 pl-8 pb-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute w-4 h-4 bg-batman-red rounded-full -left-[8px] top-1" />
          <h4 className="text-2xl font-bold uppercase text-ink">SDE Intern</h4>
          <p className="text-batman-red text-sm uppercase tracking-[1px] mb-6 mt-1 font-bold">CodeBugged | May 2025 – July 2025</p>
          <ul className="text-body text-lg font-light space-y-4 list-disc ml-4">
            <li>Built and maintained responsive web interfaces using React.js and JavaScript, improving internal user engagement and usability.</li>
            <li>Contributed to backend API integration and application performance optimization for smoother data handling and workflow efficiency.</li>
            <li>Developed reusable UI components and collaborated with the development team on scalable frontend architecture and clean code practices.</li>
            <li>Worked with modern development tools, version control workflows, and deployment-oriented engineering practices.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
