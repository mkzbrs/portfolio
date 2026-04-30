"use client";
import React from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  onNavClick?: (section: string) => void;
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const handleClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="px-8 py-4 rounded-full bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex gap-12">
          <button
            onClick={() => handleClick("about")}
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleClick("work")}
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => handleClick("contact")}
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
