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
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
      
      {/* 1. Animated Mesh Gradient*/}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-amber-200/30 blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-orange-200/20 blur-[120px]" 
        />
      </div>

      {/* 2. Floating Cards*/}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Top Left - Move further out */}
        <div className="absolute top-20 left-[5%]">
           <MobileAppCard delay={0.3} rotation={-12} x={0} y={0} />
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-20 left-[10%] opacity-40">
           <CodeSnippetCard delay={0.4} rotation={8} x={0} y={0} />
        </div>

        {/* Top Right */}
        <div className="absolute top-20 right-[5%]">
           <WireframeCard delay={0.5} rotation={15} x={0} y={0} />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-40 right-[10%]">
           <GraphCard delay={0.6} rotation={-8} x={0} y={0} />
        </div>
      </div>

      {/* 3. Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            <span className="block mb-2 text-slate-500 font-medium">Hello, I'm</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 py-2">
              Muhammad Khuzaimi
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-xl sm:text-2xl text-slate-600 mt-8 mb-12 font-medium max-w-xl mx-auto leading-relaxed"
        >
          Computer Science Student & <br className="hidden sm:block" />
          <span className="text-slate-800">Application Developer</span>
        </motion.p>

        <motion.a
          href="/resume.pdf"
          download="Muhammad_Khuzaimi_Resume.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-[0_10px_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_20px_30px_-10px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}