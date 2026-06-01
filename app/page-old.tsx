"use client";

import Image from "next/image";
import InteractiveDemo from "@/components/InteractiveDemo";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0a0a0c]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1a3a36] bg-[#0a0a0c]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1fddcb] to-[#1fddcb] flex items-center justify-center"
            >
              <span className="text-black font-bold font-heading">PS</span>
            </motion.div>
            <span className="text-xl font-bold font-heading text-white tracking-tight">
              Part Suite
              <br />
              <span className="text-xs text-[#888] font-normal">
                BY OMNISUITEAL
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#999]">
            <Link
              href="#platform"
              className="hover:text-white transition-colors"
            >
              Platform
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#live-demo"
              className="hover:text-white transition-colors"
            >
              Live Demo
            </Link>
            <Link
              href="#ai-engine"
              className="hover:text-white transition-colors"
            >
              AI Engine
            </Link>
            <Link
              href="#benefits"
              className="hover:text-white transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-[#1fddcb] text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#1ec4b1] transition-colors shadow-lg"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden bg-[#0a0a0c]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(31,221,203,0.08)] via-transparent to-transparent"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="container mx-auto px-4 relative z-10 text-center max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1fddcb]/30 bg-[#1fddcb]/10 text-[#1fddcb] text-xs font-semibold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#1fddcb] animate-pulse"></span>
              AI-POWERED PLATFORM
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-7xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
            >
              The AI That <span className="text-[#1fddcb]">Replaces</span>
              <br />
              Your Parts <span className="text-[#1fddcb]">Interpreter</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#999] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Part Suite is the fully integrated AI parts wholesale and retail
              platform that connects directly to your existing dealer management
              system — eliminating the need for manual parts interpreter
              positions within dealerships and OEMs.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#live-demo"
                className="px-8 py-3 bg-[#1fddcb] hover:bg-[#1ec4b1] text-black font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(31,221,203,0.3)] hover:shadow-[0_0_30px_rgba(31,221,203,0.5)]"
              >
                Try Interactive Demo
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 bg-transparent hover:bg-[#1a1a1a] text-white font-semibold rounded-lg border border-[#1a3a36] transition-all"
              >
                Request a Demo →
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-[#1a3a36] bg-[#0f1514]">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { label: "FASTER ORDERING", value: "90%" },
                { label: "DMS INTEGRATION", value: "100%" },
                { label: "MANUAL INTERPRETERS NEEDED", value: "0" },
                { label: "AI AVAILABILITY", value: "24/7" },
              ].map((stat, i) => (
                <motion.div variants={fadeUp} key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#1fddcb] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[#888] uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section
          id="live-demo"
          className="py-24 bg-[var(--background)] relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#4fd1c5]/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold font-heading text-white mb-4">
                Experience the AI in Action
              </h2>
              <p className="text-lg text-[var(--muted-foreground)]">
                See how our AI agent identifies parts, checks inventory,
                calculates customer-specific pricing, and generates a pick
                ticket in seconds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <InteractiveDemo />
            </motion.div>
          </div>
        </section>

        {/* Features / AI Engine Section */}
        <section
          id="ai-engine"
          className="py-24 bg-[#0f0f11] border-y border-[var(--border)]"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold font-heading text-white mb-4">
                The OmniSuite AI Engine
              </h2>
              <p className="text-lg text-[var(--muted-foreground)]">
                Our proprietary AI models are trained specifically on automotive
                and hardware part catalogs to deliver unprecedented accuracy.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Computer Vision Matching",
                  desc: "Instantly identify parts from photos, diagrams, or partial barcodes even when dirty or damaged.",
                },
                {
                  title: "Semantic Search",
                  desc: "Natural language search understands mechanic slang and obscure part descriptions to find the right SKU.",
                },
                {
                  title: "Predictive Upselling",
                  desc: "AI automatically recommends required accessories, fasteners, or related components based on historical order data.",
                },
              ].map((feature, i) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  key={i}
                  className="bg-[var(--card)] border border-[var(--border)] p-8 rounded-2xl hover:border-[#4fd1c5]/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#1a2f2d] rounded-xl flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-[#4fd1c5] rounded-sm"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Integration Section */}
        <section
          id="platform"
          className="py-24 bg-[var(--background)] overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] glow-teal transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663337333551/c3bQW5kUcZvD7PgJU3w5Rs/integration-flow-jjWikncw8FQwBUJGVe7g8b.webp"
                    alt="DMS Integration Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="w-full md:w-1/2 space-y-6"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-block px-3 py-1 rounded-full bg-[#ecc94b]/10 text-[#ecc94b] text-sm font-semibold mb-2 border border-[#ecc94b]/30"
                >
                  DMS Integration
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl font-bold font-heading text-white"
                >
                  Native Pentana DMS Connectivity
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-lg text-[var(--muted-foreground)]"
                >
                  Part Suite doesn't just look up parts—it executes
                  transactions. With deep two-way integration into Pentana and
                  other major DMS platforms, it operates exactly like a human
                  employee.
                </motion.p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Live inventory deduction and stock checks",
                    "Customer-specific pricing tiers and tax calculations",
                    "Automated pick ticket routing to the warehouse",
                    "Manager override alerts and margin protection",
                  ].map((item, i) => (
                    <motion.li
                      variants={fadeUp}
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#4fd1c5]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#4fd1c5]"></div>
                      </div>
                      <span className="text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#4fd1c5] opacity-5"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="container mx-auto px-4 relative z-10 text-center max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
            >
              Ready to Automate Your Parts Department?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-[var(--muted-foreground)] mb-10"
            >
              Stop losing sales to misidentified parts and manual bottlenecks.
              Deploy Part Suite and turn every counter into an expert parts
              interpreter.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#contact"
                  className="w-full sm:w-auto block px-8 py-4 bg-white text-black font-bold rounded-xl transition-all shadow-lg hover:bg-gray-200"
                >
                  Book a Technical Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0c] border-t border-[var(--border)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border border-[var(--border)] flex items-center justify-center bg-[var(--card)]">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-lg font-bold font-heading text-white">
                Part<span className="text-[#4fd1c5]">Suite</span>
              </span>
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">
              &copy; {new Date().getFullYear()} OmniSuiteAI.com. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
