// // "use client";

// // import { motion } from "framer-motion";

// // const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// // export default function DMSConnectivity() {
// //   return (
// //     <section id="dms" className="py-24 bg-[#0f1514] border-y border-[#1a3a36]">
// //       <div className="container mx-auto px-4">
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <div className="relative rounded-2xl overflow-hidden border border-[#1a3a36] bg-[#1a1a1a] aspect-video flex items-center justify-center">
// //               <div className="text-center">
// //                 <div className="text-6xl mb-4">🔗</div>
// //                 <p className="text-[#999] font-medium">DMS Integration Visualization</p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
// //           >
// //             <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">DMS CONNECTIVITY</div>
// //             <h2 className="text-4xl font-bold font-heading text-white mb-2">
// //               Seamless Integration With<br />
// //               <span className="text-[#1fddcb]">Your DMS</span>
// //             </h2>

// //             <p className="text-lg text-[#999] mt-6 mb-8">
// //               Part Suite integrates natively with eraPower and other major dealer management systems.
// //             </p>

// //             <div className="space-y-6">
// //               {[
// //                 { icon: "⚡", title: "Real-Time Inventory Sync", desc: "Live connection to inventory levels and pricing." },
// //                 { icon: "👤", title: "Customer Data Integration", desc: "Automatically pulls customer records." },
// //                 { icon: "📋", title: "Pick Ticket Generation", desc: "Auto-generates pick tickets for distribution." },
// //                 { icon: "📊", title: "Data Export & Analytics", desc: "Export to CSV, JSON, or Power BI." },
// //               ].map((feature, i) => (
// //                 <motion.div key={i} variants={fadeUp} className="flex gap-4">
// //                   <div className="text-2xl">{feature.icon}</div>
// //                   <div>
// //                     <h4 className="text-white font-bold mb-1">{feature.title}</h4>
// //                     <p className="text-[#999] text-sm">{feature.desc}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function DMSConnectivity() {
//   return (
//     <section className="py-24 bg-black relative overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Left: Futuristic Diagram */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative bg-[#0a0f0e] border border-[#1a3a36] rounded-3xl overflow-hidden aspect-[16/13] flex items-center justify-center p-8">
//               <svg
//                 viewBox="0 0 600 520"
//                 className="w-full h-full max-w-[520px]"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Background circuit lines */}
//                 <path
//                   d="M100 200 Q250 80 400 200 Q520 300 480 420"
//                   stroke="#0a3a35"
//                   strokeWidth="2"
//                   strokeDasharray="8 4"
//                 />
//                 <path
//                   d="M120 380 Q280 450 450 320"
//                   stroke="#0a3a35"
//                   strokeWidth="2"
//                   strokeDasharray="8 4"
//                 />

//                 {/* Connecting Lines */}
//                 <g stroke="#22d3b8" strokeWidth="2.5" strokeLinecap="round">
//                   <line x1="180" y1="220" x2="300" y2="280" />
//                   <line x1="300" y1="280" x2="420" y2="180" />
//                   <line x1="300" y1="280" x2="200" y2="380" />
//                   <line x1="300" y1="280" x2="450" y2="350" />
//                   <line x1="200" y1="380" x2="280" y2="460" />
//                   <line x1="420" y1="180" x2="480" y2="120" />
//                   <line x1="450" y1="350" x2="510" y2="300" />
//                 </g>

//                 {/* Nodes */}
//                 {/* DMS */}
//                 <g>
//                   <rect
//                     x="140"
//                     y="190"
//                     width="80"
//                     height="48"
//                     rx="8"
//                     fill="#11221f"
//                     stroke="#22d3b8"
//                     strokeWidth="3"
//                   />
//                   <text
//                     x="180"
//                     y="222"
//                     textAnchor="middle"
//                     fill="#e0f2f1"
//                     fontSize="14"
//                     fontWeight="600"
//                   >
//                     DMS
//                   </text>
//                 </g>

//                 {/* AI (Center - Highlighted) */}
//                 <g>
//                   <rect
//                     x="260"
//                     y="250"
//                     width="88"
//                     height="56"
//                     rx="12"
//                     fill="#1a2f2a"
//                     stroke="#22d3b8"
//                     strokeWidth="4"
//                   />
//                   <rect
//                     x="275"
//                     y="262"
//                     width="58"
//                     height="32"
//                     rx="6"
//                     fill="#111f1c"
//                   />
//                   <text
//                     x="304"
//                     y="284"
//                     textAnchor="middle"
//                     fill="#22d3b8"
//                     fontSize="18"
//                     fontWeight="700"
//                   >
//                     AI
//                   </text>
//                 </g>

//                 {/* Inventory Top */}
//                 <g>
//                   <rect
//                     x="390"
//                     y="140"
//                     width="88"
//                     height="48"
//                     rx="8"
//                     fill="#11221f"
//                     stroke="#22d3b8"
//                     strokeWidth="3"
//                   />
//                   <text
//                     x="434"
//                     y="172"
//                     textAnchor="middle"
//                     fill="#e0f2f1"
//                     fontSize="13"
//                     fontWeight="600"
//                   >
//                     INVENTORY
//                   </text>
//                 </g>

//                 {/* Inventory Bottom */}
//                 <g>
//                   <rect
//                     x="130"
//                     y="360"
//                     width="88"
//                     height="48"
//                     rx="8"
//                     fill="#11221f"
//                     stroke="#22d3b8"
//                     strokeWidth="3"
//                   />
//                   <text
//                     x="174"
//                     y="392"
//                     textAnchor="middle"
//                     fill="#e0f2f1"
//                     fontSize="13"
//                     fontWeight="600"
//                   >
//                     INVENTORY
//                   </text>
//                 </g>

//                 {/* Orders */}
//                 <g>
//                   <rect
//                     x="430"
//                     y="320"
//                     width="88"
//                     height="48"
//                     rx="8"
//                     fill="#11221f"
//                     stroke="#22d3b8"
//                     strokeWidth="3"
//                   />
//                   <text
//                     x="474"
//                     y="352"
//                     textAnchor="middle"
//                     fill="#e0f2f1"
//                     fontSize="13"
//                     fontWeight="600"
//                   >
//                     ORDERS
//                   </text>
//                 </g>

//                 {/* Small nodes */}
//                 <circle
//                   cx="480"
//                   cy="110"
//                   r="14"
//                   fill="#11221f"
//                   stroke="#22d3b8"
//                   strokeWidth="2.5"
//                 />
//                 <circle
//                   cx="520"
//                   cy="290"
//                   r="14"
//                   fill="#11221f"
//                   stroke="#22d3b8"
//                   strokeWidth="2.5"
//                 />
//                 <circle
//                   cx="260"
//                   cy="460"
//                   r="14"
//                   fill="#11221f"
//                   stroke="#22d3b8"
//                   strokeWidth="2.5"
//                 />

//                 {/* Glow dots */}
//                 <circle cx="300" cy="278" r="6" fill="#22d3b8" />
//               </svg>
//             </div>
//           </motion.div>

//           {/* Right: Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
//           >
//             <div className="text-[#22d3b8] uppercase tracking-[3px] text-sm font-semibold mb-4">
//               DMS CONNECTIVITY
//             </div>

//             <h2 className="text-5xl md:text-6xl font-bold font-heading text-white leading-tight tracking-tight mb-6">
//               Seamless Integration With{" "}
//               <span className="text-[#22d3b8]">Your DMS</span>
//             </h2>

//             <p className="text-[#aaaaaa] text-lg max-w-lg mb-10">
//               Part Suite integrates natively with leading dealer management
//               systems including eraPower and other compatible platforms used by
//               automotive dealerships across Australia and beyond. Our flexible
//               architecture ensures connectivity regardless of your existing
//               infrastructure.
//             </p>

//             <div className="space-y-8">
//               {/* Feature 1 */}
//               <motion.div variants={fadeUp} className="flex gap-5">
//                 <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
//                   <span className="text-2xl">🔄</span>
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold text-xl mb-1">
//                     Real-Time Inventory Sync
//                   </h4>
//                   <p className="text-[#aaaaaa]">
//                     Live connection to your DMS inventory levels, pricing, and
//                     availability data.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Feature 2 */}
//               <motion.div variants={fadeUp} className="flex gap-5">
//                 <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
//                   <span className="text-2xl">👥</span>
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold text-xl mb-1">
//                     Customer Data Integration
//                   </h4>
//                   <p className="text-[#aaaaaa]">
//                     Automatically pulls customer information and account records
//                     from your DMS.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Feature 3 */}
//               <motion.div variants={fadeUp} className="flex gap-5">
//                 <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
//                   <span className="text-2xl">📋</span>
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold text-xl mb-1">
//                     Pick Ticket Generation
//                   </h4>
//                   <p className="text-[#aaaaaa]">
//                     Orders automatically generate pick tickets for distribution
//                     centres upon approval.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Feature 4 */}
//               <motion.div variants={fadeUp} className="flex gap-5">
//                 <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
//                   <span className="text-2xl">⬇️</span>
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold text-xl mb-1">
//                     Data Export &amp; Analytics
//                   </h4>
//                   <p className="text-[#aaaaaa]">
//                     Export to CSV, JSON, or Power BI. Push data via webhooks to
//                     Zapier, Make, or Power Automate.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DMSConnectivity() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - DMS Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#1a3a36] bg-[#0a0f0e] aspect-[16/13] shadow-2xl">
              <Image
                src="/images/dms.png"
                alt="DMS Integration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <div className="text-[#22d3b8] uppercase tracking-[3px] text-sm font-semibold mb-4">
              DMS CONNECTIVITY
            </div>

            <h2 className="text-5xl md:text-6xl font-bold font-heading text-white leading-tight tracking-tight mb-6">
              Seamless Integration With{" "}
              <span className="text-[#22d3b8]">Your DMS</span>
            </h2>

            <p className="text-[#aaaaaa] text-lg max-w-lg mb-10">
              Part Suite integrates natively with leading dealer management
              systems including eraPower and other compatible platforms used by
              automotive dealerships across Australia and beyond. Our flexible
              architecture ensures connectivity regardless of your existing
              infrastructure.
            </p>

            <div className="space-y-8">
              {/* Feature 1 - Real-Time Inventory Sync */}
              <motion.div variants={fadeUp} className="flex gap-5">
                <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#22d3b8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.058 11H1M12 3v2m0 16v2m9-9H15m-6 0H3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19a7 7 0 01-7-7 7 7 0 0114 0 7 7 0 01-7 7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-1">
                    Real-Time Inventory Sync
                  </h4>
                  <p className="text-[#aaaaaa]">
                    Live connection to your DMS inventory levels, pricing, and
                    availability data.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 - Customer Data Integration */}
              <motion.div variants={fadeUp} className="flex gap-5">
                <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#22d3b8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m5-2v-2c0-.656-.126-1.284-.356-1.852M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.284.356-1.852m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-1">
                    Customer Data Integration
                  </h4>
                  <p className="text-[#aaaaaa]">
                    Automatically pulls customer information and account records
                    from your DMS.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 - Pick Ticket Generation */}
              <motion.div variants={fadeUp} className="flex gap-5">
                <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#22d3b8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2-2 2 2 0 012-2zm10 10v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-1">
                    Pick Ticket Generation
                  </h4>
                  <p className="text-[#aaaaaa]">
                    Orders automatically generate pick tickets for distribution
                    centres upon approval.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 - Data Export & Analytics */}
              <motion.div variants={fadeUp} className="flex gap-5">
                <div className="w-11 h-11 rounded-2xl bg-[#11221f] border border-[#22d3b8]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#22d3b8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-1">
                    Data Export &amp; Analytics
                  </h4>
                  <p className="text-[#aaaaaa]">
                    Export to CSV, JSON, or Power BI. Push data via webhooks to
                    Zapier, Make, or Power Automate.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
