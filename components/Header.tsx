"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0c]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-lg bg-[#1fddcb] flex items-center justify-center"
          >
            <span className="text-black font-bold font-heading text-xs">PS</span>
          </motion.div>
          <span className="text-sm font-bold font-heading text-white tracking-tight">
            Part Suite
            <div className="text-xs text-[#666] font-normal">BY OMNISUITEAL</div>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm  font-medium text-[#999]">
          <Link href="#platform" className="hover:text-white transition-colors">Platform</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="#live-demo" className="hover:text-white transition-colors">Live Demo</Link>
          <Link href="#ai-engine" className="hover:text-white transition-colors">AI Engine</Link>
          <Link href="#benefits" className="hover:text-white transition-colors">Benefits</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#contact"
            className="bg-[#1fddcb] text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#1ec4b1] transition-colors shadow-lg"
          >
            Request Demo
          </Link>
        </motion.div>
      </div>
    </header>
  );
}