"use client";
import React from "react";
import { motion } from "framer-motion";

// Floating UI Card Components
const MobileAppCard = ({ delay, rotation, x, y }: { delay: number; rotation: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.05, rotate: rotation + 2 }}
    style={{ x, y, rotate: rotation }}
    className="absolute w-40 h-64 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/40 shadow-xl p-3 flex flex-col items-center justify-start"
  >
    {/* iPhone-like status bar */}
    <div className="w-full h-5 bg-slate-900 rounded-lg mb-2 text-white text-xs flex items-center justify-between px-2">
      <span>9:41</span>
      <span>📶</span>
    </div>
    {/* Mock app content */}
    <div className="flex-1 w-full space-y-2">
      <div className="w-full h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg" />
      <div className="w-4/5 h-2 bg-slate-300 rounded-full mx-auto" />
      <div className="w-3/5 h-2 bg-slate-200 rounded-full mx-auto" />
    </div>
  </motion.div>
);

const CodeSnippetCard = ({ delay, rotation, x, y }: { delay: number; rotation: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.05, rotate: rotation + 2 }}
    style={{ x, y, rotate: rotation }}
    className="absolute w-48 h-56 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/20 shadow-xl p-4 font-mono text-xs text-white/80 overflow-hidden"
  >
    <div className="space-y-1">
      <div className="text-orange-400">class App {`{`}</div>
      <div className="text-blue-300 ml-2">flutter() {`{`}</div>
      <div className="text-green-300 ml-4">return Widget()</div>
      <div className="ml-2">{`}`}</div>
      <div>{`}`}</div>
    </div>
  </motion.div>
);

const WireframeCard = ({ delay, rotation, x, y }: { delay: number; rotation: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.05, rotate: rotation + 2 }}
    style={{ x, y, rotate: rotation }}
    className="absolute w-52 h-48 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/40 shadow-xl p-4"
  >
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-lg bg-slate-300" />
        <div className="flex-1 space-y-1">
          <div className="h-2 bg-slate-300 w-3/4 rounded" />
          <div className="h-2 bg-slate-200 w-1/2 rounded" />
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-slate-100 to-slate-50 rounded-lg" />
    </div>
  </motion.div>
);

const GraphCard = ({ delay, rotation, x, y }: { delay: number; rotation: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.05, rotate: rotation + 2 }}
    style={{ x, y, rotate: rotation }}
    className="absolute w-48 h-48 rounded-2xl bg-gradient-to-br from-amber-100/40 to-orange-100/30 backdrop-blur-xl border border-white/40 shadow-xl p-4 flex flex-col items-end justify-end"
  >
    <div className="flex gap-1 items-end h-32 w-full">
      {[2, 4, 3, 5, 4, 6, 5].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height * 12}%` }}
          transition={{ delay: delay + i * 0.05, duration: 0.6 }}
          className="flex-1 bg-gradient-to-t from-amber-500 to-orange-400 rounded-t-lg"
        />
      ))}
    </div>
  </motion.div>
);

export default function Hero() {
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating cards positioned absolutely */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left cards */}
        <MobileAppCard delay={0.3} rotation={-12} x={-180} y={-60} />
        <CodeSnippetCard delay={0.4} rotation={8} x={-120} y={160} />

        {/* Top right cards */}
        <WireframeCard delay={0.5} rotation={15} x={160} y={-20} />
        <GraphCard delay={0.6} rotation={-8} x={100} y={200} />

        {/* Bottom left cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          style={{ rotate: -15, x: -160, y: 360 }}
          className="absolute w-44 h-44 rounded-2xl bg-gradient-to-br from-emerald-100/40 to-teal-100/30 backdrop-blur-xl border border-white/40 shadow-xl p-4"
        >
          <div className="text-2xl font-bold text-emerald-600 mb-1">150+</div>
          <div className="text-xs text-slate-600">Git Commits</div>
        </motion.div>

        {/* Bottom right cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          style={{ rotate: 10, x: 140, y: 380 }}
          className="absolute w-44 h-44 rounded-2xl bg-gradient-to-br from-blue-100/40 to-indigo-100/30 backdrop-blur-xl border border-white/40 shadow-xl p-4 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-xl font-semibold text-blue-600">5+</div>
            <div className="text-xs text-slate-600">Projects</div>
          </div>
        </motion.div>
      </div>

      {/* Central content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Muhammad Khuzaimi
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-xl sm:text-2xl text-slate-600 mb-12 font-light"
        >
          Computer Science Student & Application Developer
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          Download Resume
        </motion.button>
      </div>
    </section>
  );
}
