"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";
import TechIcon from "./TechIcon";

const projects = [
  {
    title: "Startup Connect",
    desc: "A full-stack consultation platform to connect founders with industry advisors through secure onboarding, profile approvals, and real-time session management.",
    tech: "Next.js • React • TypeScript • PostgreSQL • Prisma • Clerk • Vonage",
    github: "https://github.com/VarunRaj060204/Startup-Connect",
    image: "/Startup Connect.jpg"
  },
  {
    title: "Welth",
    desc: "An AI-powered personal finance platform for smart budgeting and transaction management. Integrates AI receipt scanning and smart transaction categorization.",
    tech: "Next.js • React • TypeScript • PostgreSQL • Gemini AI • Inngest",
    github: "https://github.com/VarunRaj060204/Welth--Full-Stack-AI-Finance-platform",
    image: "/Welth.jpg"
  },
  {
    title: "Bitezy",
    desc: "A modern food ordering and restaurant management platform with seamless ordering and user experience.",
    tech: "Next.js • React • TypeScript • Node.js • PostgreSQL/MongoDB • Prisma",
    github: "https://github.com/VarunRaj060204/Bitezy-",
    image: "/Bitezy.jpg"
  },
  {
    title: "Placement Buddy",
    desc: "An AI-powered mock interview platform designed to help students prepare for technical and placement interviews using Claude AI.",
    tech: "React.js • JavaScript • React Router • Claude Sonnet API • Tailwind",
    github: "https://github.com/VarunRaj060204/Placement-Buddy",
    image: "/placement buddy.jpg"
  },
  {
    title: "Churn Analysis",
    desc: "An end-to-end data science project analyzing customer churn patterns and predicting subscription cancellations for streaming platforms.",
    tech: "Python • Pandas • Scikit-learn • Matplotlib • Plotly Dash • SQL",
    github: "https://github.com/VarunRaj060204/Subscription-churn-Analysis",
    image: "/Subscription churn analysis.jpg"
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Create a scroll height proportional to the number of projects.
  // We have 5 projects + 1 title section, so let's make it 300vh for smooth scrolling.
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate the X axis from 0 to -80% (since we want to scroll through 5 items horizontally)
  // The exact percentage depends on the total width of the inner container.
  // 5 items * 100vw = 500vw. We want to move it left by 400vw to reach the last item.
  // In percentage of the flex container, moving left by `- (totalItems - 1) * (100 / totalItems) %`
  // Actually, easier: we map 0 -> 1 to "0%" -> "-80%" (assuming 5 items, so 5 panels).
  // Wait, we also want the Title to show first, so let's say 6 panels total.
  // Let's use a simpler approach: a container of width `calc(100vw * 6)`.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-surface-soft/60 backdrop-blur-sm w-full">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-0">
          
          {/* Panel 1: Title Screen */}
          <div className="w-screen h-screen flex flex-col justify-center px-6 lg:px-12 max-w-[1440px] mx-auto shrink-0">
            <AnimatedHeading title="FEATURED PROJECTS" className="text-ink" />
            <div className="w-24 h-[2px] bg-batman-red mt-4 mb-8" />
            <p className="text-body text-xl max-w-2xl font-light">
              Scroll down to explore my latest work. These projects represent a mix of full-stack engineering, AI integration, and polished frontend architecture.
            </p>
            <div className="mt-12 flex items-center gap-4 text-batman-red animate-pulse">
              <span className="text-sm font-bold uppercase tracking-[2px]">Keep Scrolling</span>
              <div className="w-12 h-[1px] bg-batman-red" />
            </div>
          </div>

          {/* Panels 2-6: Projects */}
          {projects.map((project, index) => (
            <div key={index} className="w-screen h-screen flex items-center justify-center shrink-0 px-6 lg:px-12">
              <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Image Container */}
                <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-hairline group">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-6">
                    {project.title}
                  </h3>
                  <p className="text-body text-lg leading-relaxed font-light mb-8">
                    {project.desc}
                  </p>
                  
                  <div className="mb-10">
                    <p className="text-sm uppercase tracking-[1.5px] text-batman-red font-bold mb-4">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(' • ').map((t, i) => (
                        <span key={i} className="px-4 py-2 border border-hairline bg-surface-card text-ink text-xs uppercase tracking-[1px] flex items-center gap-2 shadow-sm">
                          <TechIcon name={t} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary w-fit text-sm"
                  >
                    VIEW ON GITHUB
                  </a>
                </div>

              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
