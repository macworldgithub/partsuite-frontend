"use client";

import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function Platform() {
  return (
    <section id="platform" className="py-24 bg-[#233f42]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">THE PLATFORM</div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            A Fully Integrated AI Parts<br />
            <span className="text-[#1fddcb]">Wholesale & Retail Platform</span>
          </h2>
          <p className="text-lg text-[#999] max-w-2xl mx-auto mt-6">
            Part Suite transforms the way dealerships and OEMs handle parts ordering with intelligent automation.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: "📱", title: "AI Parts Interpreter", desc: "Instantly recognizes codes, suggests quantities, recommends bundles, and flags anomalies — replacing manual interpreters." },
            { icon: "🛒", title: "Wholesale Ordering", desc: "Bulk ordering with AI matching, automated reorders, and direct DMS integration." },
            { icon: "🏪", title: "Retail Integration", desc: "Mobile scan-and-order experience for panel shops with real-time DMS connectivity." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-[#1a1a1a] border border-[#1a3a36] p-8 rounded-2xl hover:border-[#1fddcb]/30 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#999] leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}