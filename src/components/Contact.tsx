"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-100/30"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
            Let's Connect
          </h2>

          <div className="mb-12">
            <motion.a
              href="mailto:admin@mkzbrs.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-700 font-medium transition-all"
            >
              <Mail size={20} />
              <span>admin@mkzbrs.com</span>
            </motion.a>
          </div>

          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/mkzbrs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/40 hover:bg-white/60 border border-white/30 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              <img 
                src="/github.svg" 
                alt="GitHub" 
                className="w-6 h-6 object-contain" 
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mkzbrs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/40 hover:bg-white/60 border border-white/30 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              <img 
                src="/linkedin.png" 
                alt="LinkedIn" 
                className="w-6 h-6 object-contain" 
              />
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-slate-600 font-light"
          >
            © 2026 mkzbrs. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}