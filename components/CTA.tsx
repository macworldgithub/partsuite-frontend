"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4 text-center max-w-3xl"
      >
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
          Ready to Automate Your Parts Department?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xl text-[#999] mb-10">
          Stop losing sales to misidentified parts. Deploy Part Suite and turn every counter into an expert.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-[#1fddcb] text-black font-bold rounded-lg transition-all shadow-lg hover:bg-[#1ec4b1]"
          >
            Book a Technical Demo
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}