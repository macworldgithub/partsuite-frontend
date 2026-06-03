"use client";

import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0f1514] border-y border-[#1a3a36]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">HOW IT WORKS</div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            From Scan to Shipment in <span className="text-[#1fddcb]">Four Steps</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { step: "01", title: "Secure Login", desc: "Biometric authentication with role-based access." },
            { step: "02", title: "Snap & Order", desc: "Point camera at any label. AI identifies and suggests items." },
            { step: "03", title: "DMS Integration", desc: "Real-time sync with your dealer management system." },
            { step: "04", title: "Order Fulfilled", desc: "Automatic pick ticket generation and supply chain flow." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#1a1a1a] border border-[#1a3a36] p-8 rounded-xl text-center hover:border-[#1fddcb]/30 transition-all"
            >
              <div className="text-5xl font-bold text-[#1fddcb] mb-4 opacity-50">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[#999] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}