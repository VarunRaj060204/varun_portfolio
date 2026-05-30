"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-canvas/90 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="batman-stripe" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Bat-Signal / Logo Text */}
          <span className="font-bold text-xl uppercase tracking-widest text-ink">VARUN RAJ</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-body hover:text-ink text-sm font-bold uppercase tracking-[0.5px] transition-colors">ABOUT</Link>
            <Link href="#experience" className="text-body hover:text-ink text-sm font-bold uppercase tracking-[0.5px] transition-colors">EXPERIENCE</Link>
            <Link href="#education" className="text-body hover:text-ink text-sm font-bold uppercase tracking-[0.5px] transition-colors">EDUCATION</Link>
            <Link href="#projects" className="text-body hover:text-ink text-sm font-bold uppercase tracking-[0.5px] transition-colors">PROJECTS</Link>
            <Link href="#contact" className="text-body hover:text-ink text-sm font-bold uppercase tracking-[0.5px] transition-colors">CONTACT</Link>
          </div>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-surface-elevated text-ink hover:text-batman-red transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
