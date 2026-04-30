"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max"
        >
          {/* Top Left - Large Typography Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 row-span-2"
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 inline-block">
                <span className="px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-100/60 rounded-full">
                  Computer Science @ UUM
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                About Me
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed font-light">
                I'm passionate about building beautiful, intuitive mobile
                applications. Combining technical expertise with design
                thinking to create delightful experiences that solve real
                problems and bring joy to users.
              </p>
            </div>
          </motion.div>

          {/* Top Right - Portrait Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-2 row-span-2"
          >
            <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/40 shadow-lg overflow-hidden">
              {/* Professional Portrait Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-white rounded-2xl flex items-center justify-center min-h-72">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 flex items-center justify-center text-5xl font-bold text-white">
                    MK
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Muhammad Khuzaimi
                  </p>
                  <p className="text-xs text-slate-500">Developer & Designer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left Top - Flutter & Dart Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-100/40 to-cyan-100/30 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/50 backdrop-blur">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Flutter</h3>
                  <p className="text-sm text-slate-600">& Dart</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left Bottom - Figma & Git Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-100/40 to-pink-100/30 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/50 backdrop-blur">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Figma</h3>
                  <p className="text-sm text-slate-600">& Git</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right - MacBook Mockup */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-2"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/40 shadow-lg h-full">
              {/* MacBook Mockup */}
              <div className="space-y-3">
                {/* Title bar */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 h-5 bg-slate-100 rounded text-xs flex items-center px-2 text-slate-500">
                    Design System
                  </div>
                </div>

                {/* Content area */}
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 space-y-2 min-h-40">
                  {/* Code-like structure */}
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-orange-600">const Design = {`{`}</div>
                    <div className="ml-3 text-slate-600">
                      colors: <span className="text-blue-600">[...]</span>,
                    </div>
                    <div className="ml-3 text-slate-600">
                      spacing: <span className="text-blue-600">[...]</span>,
                    </div>
                    <div className="ml-3 text-slate-600">
                      typography: <span className="text-blue-600">[...]</span>
                    </div>
                    <div className="text-orange-600">{`}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
