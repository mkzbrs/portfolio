"use client";
import React from "react";
import { motion } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "5+", label: "Projects" },
  { number: "3", label: "Languages" },
  { number: "2+", label: "Years Exp." },
  { number: "100%", label: "Dedication" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/50 transition-all"
        >
          <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">
            {stat.number}
          </div>
          <div className="text-sm sm:text-base text-slate-600 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
