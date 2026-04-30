"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gitLink: string;
  liveLink: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  gitLink,
  liveLink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-8 rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-700 mb-6 leading-relaxed font-light">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm font-medium text-amber-700 bg-amber-100/60 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <motion.a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900 font-medium transition-colors"
        >
          <Code size={18} />
          <span>GitHub</span>
        </motion.a>
        <motion.a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900 font-medium transition-colors"
        >
          <ExternalLink size={18} />
          <span>Live</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
