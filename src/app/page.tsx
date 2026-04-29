"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Shield, 
  Cpu, 
  Globe, 
  Zap, 
  Activity, 
  Clock, 
  HardDrive 
} from "lucide-react";

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move effect for that "Fake 3D" parallax depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Sensitivity is set to 15px movement
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#f8fafc] flex overflow-hidden font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-white/80 backdrop-blur-2xl border-r border-white/50 p-8 flex flex-col z-30">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black shadow-xl shadow-indigo-200">
            M
          </div>
          <div>
            <h1 className="font-bold text-slate-800 leading-tight">mkzbrs Labs</h1>
            <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">v2.4</p>
          </div>
        </div>

        <nav className="space-y-3 flex-1">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Shield, label: "Security" },
            { icon: Cpu, label: "Server Nodes" },
            { icon: Globe, label: "Network" },
            { icon: Zap, label: "Automations" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                item.active 
                ? "bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] text-indigo-600" 
                : "text-slate-400 hover:text-slate-600 hover:bg-white/40"
              }`}
            >
              <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Status at bottom of sidebar */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full" />
          <div>
            <p className="text-xs font-bold text-slate-800">Admin</p>
            <p className="text-[10px] text-green-500 font-bold uppercase">Online</p>
          </div>
        </div>
      </aside>

      {/* --- CONTENT AREA --- */}
      <section className="flex-1 relative p-12 z-10 overflow-y-auto">
        
        {/* BACKGROUND IMAGE: Constrained to this section only */}
        <motion.div 
          style={{ 
            translateX: mousePos.x, 
            translateY: mousePos.y,
            backgroundImage: `url('/desk.png')`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          className="absolute inset-0 opacity-40 z-0 pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <header className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2 uppercase">Overview</h2>
              <p className="text-slate-500 font-medium">Batu Kurau Node • 34520 Perak, MY</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Active Connection</span>
            </div>
          </header>

          {/* STATS BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Clock, label: "Uptime", val: "99.98%", color: "text-indigo-600" },
              { icon: Activity, label: "Latency", val: "14ms", color: "text-emerald-500" },
              { icon: HardDrive, label: "Storage", val: "4TB RAID 5", color: "text-amber-500" },
              { icon: Cpu, label: "Memory", val: "8GB RAM", color: "text-rose-500" },
            ].map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={stat.label}
                className="bg-white/50 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-sm group hover:bg-white transition-all duration-500"
              >
                <div className="mb-4 text-slate-300 group-hover:text-slate-600 transition-colors">
                  <stat.icon size={18} />
                </div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className={`text-2xl font-black ${stat.color}`}>{stat.val}</h3>
              </motion.div>
            ))}
          </div>

          {/* MAIN INFRASTRUCTURE CARD */}
          <div className="bg-white/30 backdrop-blur-3xl border border-white/60 rounded-[3rem] p-12 shadow-2xl shadow-indigo-100/50 min-h-[420px] flex flex-col justify-end relative overflow-hidden">
             {/* Large faint background text */}
             <h3 className="text-8xl font-black text-slate-800/5 absolute -top-0 -left-0 select-none leading-none">
               PROJECT
             </h3>
             
             <div className="max-w-md relative z-10">
                <div className="w-12 h-1 bg-indigo-600 mb-6 rounded-full" />
                <h4 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">Raspberry Pi 5 Server</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Configured with a Penta SATA HAT and RAID 5 architecture. 
                  Serving private cloud infrastructure and automated weather intelligence via mkzbrs.com.
                </p>
                <button className="mt-8 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-indigo-600 transition-colors shadow-lg">
                  View Server Logs
                </button>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}