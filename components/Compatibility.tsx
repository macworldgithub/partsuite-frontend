"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Compatibility() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              variants={fadeUp}
              className="text-[#00d3b2] uppercase tracking-[3px] text-sm font-medium mb-3"
            >
              COMPATIBILITY
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight"
            >
              Works With Your{" "}
              <span className="text-[#00d3b2]">Existing Systems</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#aaaaaa] max-w-3xl mx-auto leading-relaxed"
            >
              Part Suite is designed to integrate with the dealer management
              systems already powering your operations — including eraPower and
              other leading platforms.
            </motion.p>
          </div>

          {/* Cards Container */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Primary Card - eraPower DMS */}
            <motion.div
              variants={cardVariants}
              className="relative bg-[#0a0a0c] border border-[#00d3b2] rounded-3xl p-8 lg:p-10 
                         shadow-2xl shadow-[#00d3b2]/20 ring-1 ring-[#00d3b2]/30 group hover:shadow-[#00d3b2]/30 transition-all duration-300"
            >
              {/* Primary Badge */}
              <div className="absolute -top-4 left-8 bg-[#00d3b2] text-black text-xs font-semibold px-5 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-[#00d3b2]/50">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                Primary
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-1">
                  eraPower DMS
                </h3>
                <p className="text-[#00d3b2] font-medium mb-8">
                  Full Integration
                </p>

                <ul className="space-y-4">
                  {[
                    "Real-time inventory sync",
                    "Customer data pull",
                    "Pick ticket generation",
                    "Order approval workflows",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-[#00d3b2] flex items-center justify-center flex-shrink-0">
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
                      <span className="text-[#cccccc] text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Compatible DMS Card */}
            <motion.div
              variants={cardVariants}
              className="bg-[#0f0f16] border border-white/10 hover:border-white/20 rounded-3xl p-8 lg:p-10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                Compatible DMS
              </h3>
              <p className="text-[#888888] mb-8">Major Platforms</p>

              <ul className="space-y-4">
                {[
                  "Inventory connectivity",
                  "Data synchronisation",
                  "Order management",
                  "Flexible API integration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#00d3b2] flex items-center justify-center flex-shrink-0">
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
                    <span className="text-[#cccccc] text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Custom Integration Card */}
            <motion.div
              variants={cardVariants}
              className="bg-[#0f0f16] border border-white/10 hover:border-white/20 rounded-3xl p-8 lg:p-10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                Custom Integration
              </h3>
              <p className="text-[#888888] mb-8">Your System</p>

              <ul className="space-y-4">
                {[
                  "Bespoke API development",
                  "Legacy system support",
                  "Custom data mapping",
                  "Dedicated integration team",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#00d3b2] flex items-center justify-center flex-shrink-0">
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
                    <span className="text-[#cccccc] text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
