"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Stats() {
  return (
    <section className="py-20 border-y border-[#1a3a36] bg-[#0f1514]">
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
              <div className="text-5xl font-bold text-[#1fddcb] mb-2">
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
  );
}