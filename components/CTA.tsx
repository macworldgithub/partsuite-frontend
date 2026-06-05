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
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        {/* Centered Wide Card */}
        <div className="max-w-8xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="relative bg-gradient-to-br from-[#12121a] via-[#0f0f16] to-[#0a0a0c] 
                       border border-[#07433a] rounded-3xl p-16 md:p-20 text-center overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#07211e] via-transparent to-[#17120d] rounded-3xl pointer-events-none" />

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight"
            >
              Ready to Eliminate Manual{" "}
              <span className="text-[#00d3b2]">Parts Interpretation?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#aaaaaa] mb-12 max-w-2xl mx-auto leading-relaxed"
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
                className="inline-flex items-center justify-center px-10 py-3 bg-[#1fddcb] hover:bg-[#1ec4b1] 
                           text-black font-bold text-lg rounded-lg transition-all duration-200 shadow-xl shadow-[#1fddcb]/20"
              >
                Schedule a Consultation →
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-3 border border-white/30 hover:border-white/50 
                           text-white font-semibold text-lg rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Features - Matching the image exactly */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-sm"
            >
              {/* Multi-DMS Compatible */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00d3b2] flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white font-medium whitespace-nowrap">
                  Multi-DMS Compatible
                </span>
              </div>

              {/* No Setup Fees */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00d3b2] flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white font-medium whitespace-nowrap">
                  No Setup Fees
                </span>
              </div>

              {/* AI-Powered */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00d3b2] flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white font-medium whitespace-nowrap">
                  AI-Powered
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
