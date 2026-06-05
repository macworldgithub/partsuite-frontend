// // "use client";

// // import { motion } from "framer-motion";

// // const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
// // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

// // export default function Platform() {
// //   return (
// //     <section id="platform" className="py-24 bg-[#233f42]">
// //       <div className="container mx-auto px-4">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={fadeUp}
// //           className="text-center mb-20"
// //         >
// //           <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">THE PLATFORM</div>
// //           <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
// //             A Fully Integrated AI Parts<br />
// //             <span className="text-[#1fddcb]">Wholesale & Retail Platform</span>
// //           </h2>
// //           <p className="text-lg text-[#999] max-w-2xl mx-auto mt-6">
// //             Part Suite transforms the way dealerships and OEMs handle parts ordering with intelligent automation.
// //           </p>
// //         </motion.div>

// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="grid md:grid-cols-3 gap-8"
// //         >
// //           {[
// //             { icon: "📱", title: "AI Parts Interpreter", desc: "Instantly recognizes codes, suggests quantities, recommends bundles, and flags anomalies — replacing manual interpreters." },
// //             { icon: "🛒", title: "Wholesale Ordering", desc: "Bulk ordering with AI matching, automated reorders, and direct DMS integration." },
// //             { icon: "🏪", title: "Retail Integration", desc: "Mobile scan-and-order experience for panel shops with real-time DMS connectivity." },
// //           ].map((feature, i) => (
// //             <motion.div
// //               key={i}
// //               variants={fadeUp}
// //               whileHover={{ y: -8 }}
// //               className="bg-[#1a1a1a] border border-[#1a3a36] p-8 rounded-2xl hover:border-[#1fddcb]/30 transition-all"
// //             >
// //               <div className="text-4xl mb-4">{feature.icon}</div>
// //               <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
// //               <p className="text-[#999] leading-relaxed text-sm">{feature.desc}</p>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { LuBrain } from "react-icons/lu";
// import { FaShoppingCart } from "react-icons/fa";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// export default function Platform() {
//   return (
//     <section id="platform" className="py-24 bg-[#0b1314]">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={fadeUp}
//           className="mb-14 max-w-3xl"
//         >
//           <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-5">
//             THE PLATFORM
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//             A Fully Integrated AI Parts
//             <br />
//             <span className="text-[#1fddcb]">Wholesale & Retail Platform</span>
//           </h2>
//           <p className="text-sm md:text-base text-[#9aa0a6] mt-6 leading-relaxed max-w-2xl">
//             Part Suite by OmniSuiteAI.com transforms the way dealerships and
//             OEMs handle parts ordering. Our AI engine acts as your intelligent
//             parts interpreter — scanning, identifying, matching, and ordering
//             parts with zero human intervention required.
//           </p>
//         </motion.div>

//         <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
//           <div className="space-y-8">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className="relative overflow-hidden rounded-[2rem] border border-[#1a3a36] bg-[#0f1514] shadow-[0_0_40px_rgba(0,0,0,0.25)]"
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//               <Image
//                 src="/images/new.png"
//                 alt="AI parts warehouse"
//                 width={1200}
//                 height={800}
//                 className="h-[420px] w-full object-cover"
//               />
//               {/* <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <div className="text-sm uppercase tracking-widest text-[#1fddcb] font-semibold mb-2">
//                   AI Parts Interpreter
//                 </div>
//                 <p className="text-sm text-[#d1d5db] max-w-xl leading-relaxed">
//                   Our AI engine instantly recognises product codes, suggests
//                   quantities based on historical ordering patterns, recommends
//                   complementary bundles (such as basecoats with activators), and
//                   flags unusual requests — all in real time. This completely
//                   replaces the manual parts interpreter role, saving dealerships
//                   significant labour costs while improving accuracy.
//                 </p>
//               </div> */}
//               {/* </motion.div> */}

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={fadeUp}
//                 className=" p-8 shadow-[0_0_20px_rgba(31,221,203,0.12)]"
//               >
//                 <div className="inline-flex items-center gap-3  px-4 py-2 text-white text-sm font-semibold">
//                   {/* <span>📱</span> */}
//                   <LuBrain />
//                   AI Parts Interpreter
//                 </div>
//                 {/* <h3 className="mt-6 text-2xl font-bold text-white">
//                   Hands-Free Code Recognition
//                 </h3> */}
//                 <p className="mt-4 text-sm text-[#9aa0a6] leading-relaxed">
//                   Our AI engine instantly recognises product codes, suggests
//                   quantities based on historical ordering patterns, recommends
//                   complementary bundles (such as basecoats with activators), and
//                   flags unusual requests — all in real time. This completely
//                   replaces the manual parts interpreter role, saving dealerships
//                   significant labour costs while improving accuracy.
//                 </p>
                
//               </motion.div>
//             </motion.div>
//           </div>

//           <div className="space-y-36">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className="rounded-[2rem] border border-[#242727] bg-[#111820] p-8 "
//             >
//               <div className="flex items-center gap-3  text-xl">
//                 {/* <span>🛒</span> */}
//                 <FaShoppingCart />
//                 <div className="text-sm uppercase tracking-widest font-semibold">
//                   Wholesale Ordering
//                 </div>
//               </div>
//               {/* <h3 className="mt-5 text-2xl font-bold text-white">
//                 Bulk Orders with AI Accuracy
//               </h3> */}
//               <p className="mt-4 text-sm text-[#9aa0a6] leading-relaxed">
//                 Streamlined bulk ordering with AI-powered product matching,
//                 automated reorder suggestions, and direct DMS integration.
//                 Priority and stock orders flow seamlessly through approval
//                 workflows to distribution centres.
//               </p>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className="rounded-[2rem] border border-[#242727] bg-[#111820] p-8 ]"
//             >
//               <div className="flex items-center gap-3 text-white text-xl">
//                 <span>🏪</span>
//                 <div className="text-sm uppercase tracking-widest font-semibold">
//                   Retail Integration
//                 </div>
//               </div>
//               {/* <h3 className="mt-5 text-2xl font-bold text-white">
//                 Mobile Scan-and-Order
//               </h3> */}
//               <p className="mt-4 text-sm text-[#9aa0a6] leading-relaxed">
//                 Empower panel and body shop partners with a simple
//                 scan-and-order mobile experience. Partners access your
//                 catalogue, place orders, and track deliveries — all connected to
//                 your existing DMS inventory in real time.
//               </p>
//             </motion.div>
//           </div>
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Platform() {
  return (
    <section id="platform" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">
            THE PLATFORM
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
            A Fully Integrated AI Parts
            <br />
            <span className="text-[#1fddcb]">Wholesale &amp; Retail Platform</span>
          </h2>
          <p className="mt-6 text-lg text-[#9aa0a6] max-w-2xl">
            Part Suite by OmniSuiteAI.com transforms the way dealerships and
            OEMs handle parts ordering. Our AI engine acts as your intelligent
            parts interpreter — scanning, identifying, matching, and ordering
            parts with zero human intervention required.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Side - Image + AI Interpreter Card */}
          <div className="lg:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl"
            >
              <Image
                src="/images/platform.webp"
                alt="AI Parts Scanning"
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </motion.div>

            {/* AI Parts Interpreter Card - Overlapping */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="absolute -bottom-6 left-6 right-6 lg:right-auto lg:left-8 bg-[#111] border border-[#1fddcb]/20 rounded-2xl p-6 shadow-xl max-w-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#1fddcb]/10 flex items-center justify-center text-2xl">
                  🧠
                </div>
                <h3 className="text-xl font-semibold text-white">AI Parts Interpreter</h3>
              </div>
              <p className="text-[#9aa0a6] leading-relaxed text-[15px]">
                Our AI engine instantly recognises product codes, suggests quantities based on historical ordering patterns, recommends complementary bundles, and flags unusual requests — all in real time.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-6 pt-12 lg:pt-0"
          >
            {/* Wholesale Ordering */}
            <motion.div
              variants={fadeUp}
              className="bg-[#111] border border-white/10 rounded-2xl p-8 group hover:border-[#1fddcb]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#1fddcb]/10 flex items-center justify-center text-2xl">🛒</div>
                <h3 className="text-2xl font-semibold text-white">Wholesale Ordering</h3>
              </div>
              <p className="text-[#9aa0a6] leading-relaxed">
                Streamlined bulk ordering with AI-powered product matching, automated reorder suggestions, and direct DMS integration. Priority and stock orders flow seamlessly through approval workflows to distribution centres.
              </p>
            </motion.div>

            {/* Retail Integration */}
            <motion.div
              variants={fadeUp}
              className="bg-[#111] border border-white/10 rounded-2xl p-8 group hover:border-[#1fddcb]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#1fddcb]/10 flex items-center justify-center text-2xl">🏪</div>
                <h3 className="text-2xl font-semibold text-white">Retail Integration</h3>
              </div>
              <p className="text-[#9aa0a6] leading-relaxed">
                Empower panel and body shop partners with a simple scan-and-order mobile experience. Partners access your catalogue, place orders, and track deliveries — all connected to your existing DMS inventory in real time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}