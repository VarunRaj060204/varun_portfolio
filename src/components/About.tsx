"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import TechIcon from "./TechIcon";

const skills = [
  "TypeScript", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js",
  "PostgreSQL", "MongoDB", "Prisma ORM", "Tailwind CSS", "REST APIs",
  "Git", "Vercel", "AWS EC2", "Clerk Auth", "Gemini AI", "Postman"
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <AnimatedHeading title="ABOUT ME." />
          <div className="h-[1px] w-full bg-hairline mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body-strong text-lg leading-relaxed font-light"
          >
            Full Stack Developer with experience building scalable and production-ready web applications. Passionate about backend systems, modern web architecture, API development, and creating user-centric digital products using modern engineering practices. Focused on developing clean, efficient, and impactful solutions for real-world problems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">
            TECH STACK
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 border border-hairline bg-surface-card text-body text-sm uppercase tracking-[1.5px] hover:border-batman-red hover:text-ink transition-colors flex items-center gap-2 shadow-sm"
              >
                <TechIcon name={skill} />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
