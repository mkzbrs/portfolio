"use client";
import React from "react";
import { motion } from "framer-motion";
import StatsBar from "./StatsBar";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Self-Hosted Private Cloud",
    description:
      "A personal, secure cloud storage system deployed on a Raspberry Pi 5 (8GB RAM) with a Penta SATA HAT and 4TB HDD. Running on Ubuntu Server and securely routed through Cloudflare using a custom domain for reliable remote access and data management.",
    tags: ["Raspberry Pi", "Ubuntu Server", "Cloudflare", "Self-Hosted"],
    gitLink: "https://github.com/mkzbrs",
    liveLink: "https://mkzbrs.com",
  },
  {
    title: "Portfolio & Personal Brand",
    description:
      "A modern, responsive portfolio website showcasing my projects and professional journey. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and glassmorphic design elements.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    gitLink: "https://github.com/mkzbrs/portfolio",
    liveLink: "https://mkzbrs.com",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-orange-50/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            My Work
          </h2>
          <p className="text-lg text-slate-600 mb-16 font-light">
            Projects that showcase my passion for mobile development and UI design
          </p>
        </motion.div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* Future Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-amber-100/20 to-orange-100/10 border border-white/40 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Future Plans
          </h3>
          <ul className="space-y-3 text-slate-700 font-light">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span>Building scalable mobile applications with modern architecture patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span>Exploring cross-platform development with Flutter and React Native</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span>Contributing to open-source projects and building developer tools</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span>Mastering UI/UX design principles and creating delightful user experiences</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
