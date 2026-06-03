"use client";

import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function DMSConnectivity() {
  return (
    <section id="dms" className="py-24 bg-[#0f1514] border-y border-[#1a3a36]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#1a3a36] bg-[#1a1a1a] aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔗</div>
                <p className="text-[#999] font-medium">DMS Integration Visualization</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">DMS CONNECTIVITY</div>
            <h2 className="text-4xl font-bold font-heading text-white mb-2">
              Seamless Integration With<br />
              <span className="text-[#1fddcb]">Your DMS</span>
            </h2>

            <p className="text-lg text-[#999] mt-6 mb-8">
              Part Suite integrates natively with eraPower and other major dealer management systems.
            </p>

            <div className="space-y-6">
              {[
                { icon: "⚡", title: "Real-Time Inventory Sync", desc: "Live connection to inventory levels and pricing." },
                { icon: "👤", title: "Customer Data Integration", desc: "Automatically pulls customer records." },
                { icon: "📋", title: "Pick Ticket Generation", desc: "Auto-generates pick tickets for distribution." },
                { icon: "📊", title: "Data Export & Analytics", desc: "Export to CSV, JSON, or Power BI." },
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-[#999] text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}