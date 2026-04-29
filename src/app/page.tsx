"use client"; // Required for animations
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black flex items-center justify-center p-6 overflow-hidden">
      
      {/* Animated Liquid Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-white"
      >
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center border border-white/30">
            <span className="text-xl font-bold">M</span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">mkzbrs Labs</h1>
            <p className="text-sm text-white/50">Developer Portfolio • 2026</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-white/80 font-light leading-relaxed">
            Building high-performance applications with clean aesthetics. 
            Currently focusing on <span className="text-indigo-400 font-medium">Full-Stack Development</span> and UI/UX.
          </p>
          
          <div className="pt-4 flex gap-3">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">Next.js</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">Tailwind</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">TypeScript</span>
          </div>
        </div>
      </motion.div>
      
    </main>
  );
}
