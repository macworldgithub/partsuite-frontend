"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background gradient glow */}
      <div className="absolute " />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            variants={fadeUp}
            className="relative bg-gradient-to-br from-[#12121a] via-[#0f0f16] to-[#0a0a0c] 
                       border border-[#1fddcb] rounded-3xl p-16 text-center overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1fddcb]/10 via-transparent to-transparent rounded-3xl pointer-events-none" />

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight"
            >
              Ready to Eliminate Manual{" "}
              <span className="text-[#1fddcb]">Parts Interpretation?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl text-[#aaaaaa] mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how Part Suite by OmniSuiteAI.com can transform your
              parts operations, reduce costs, and deliver a seamless ordering
              experience for your entire network.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1fddcb] hover:bg-[#1ec4b1] 
                           text-black font-bold text-lg rounded-2xl transition-all duration-200 shadow-xl shadow-[#1fddcb]/20"
              >
                Schedule a Consultation →
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 hover:border-white/50 
                           text-white font-semibold text-lg rounded-2xl transition-all duration-200 backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm"
            >
              <div className="flex items-center gap-2 text-[#1fddcb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-medium">
                  Multi-DMS Compatible
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#1fddcb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2 text-[#1fddcb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white font-medium">AI-Powered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
