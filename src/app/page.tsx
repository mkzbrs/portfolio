"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-cream-50 overflow-x-hidden font-sans">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-amber-50/40 via-transparent to-orange-50/20 pointer-events-none" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Work Section */}
      <Work />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}