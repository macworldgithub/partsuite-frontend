// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
// };

// export default function Hero() {
//   return (
//     <section className="relative pt-32 pb-32 overflow-hidden bg-[#0a0a0c]">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(31,221,203,0.08)] via-transparent to-transparent"></div>
      
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="container mx-auto px-4 relative z-10 text-center max-w-4xl"
//       >
//         <motion.div
//           variants={fadeUp}
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1fddcb]/30 bg-[#1fddcb]/10 text-[#1fddcb] text-xs font-semibold mb-8"
//         >
//           <span className="w-2 h-2 rounded-full bg-[#1fddcb] animate-pulse"></span>
//           AI-POWERED PLATFORM
//         </motion.div>

//         <motion.h1
//           variants={fadeUp}
//           className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
//         >
//           The AI That <span className="text-[#1fddcb]">Replaces</span>
//           <br />
//           Your Parts <span className="text-[#1fddcb]">Interpreter</span>
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           className="text-lg text-[#999] mb-10 max-w-2xl mx-auto leading-relaxed"
//         >
//           Part Suite is the fully integrated AI parts wholesale and retail platform that connects directly to your existing dealer management system — eliminating the need for manual parts interpreter positions.
//         </motion.p>

//         <motion.div
//           variants={fadeUp}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <Link
//             href="#live-demo"
//             className="px-8 py-3 bg-[#1fddcb] hover:bg-[#1ec4b1] text-black font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(31,221,203,0.3)] hover:shadow-[0_0_30px_rgba(31,221,203,0.5)]"
//           >
//             Try Interactive Demo
//           </Link>
//           <Link
//             href="#contact"
//             className="px-8 py-3 bg-transparent hover:bg-[#1a1a1a] text-white font-semibold rounded-lg border border-[#1a3a36] transition-all"
//           >
//             Request a Demo →
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-32 overflow-hidden bg-[#0a0a0c]">
      {/* Background Image / Industrial Feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?ixlib=rb-4.0.3&auto=format&fit=crop&q=85')`,
          filter: 'brightness(0.45) contrast(1.1)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.12)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#14b8a6]/40 bg-[#14b8a6]/10 text-[#14b8a6] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            AI-POWERED PLATFORM
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tighter mb-6"
          >
            The AI That <span className="text-[#14b8a6]">Replaces</span>
            <br />
            Your Parts <span className="text-[#14b8a6]">Interpreter</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Part Suite is the fully integrated AI parts wholesale and retail platform that connects directly to your existing dealer management system — eliminating the need for manual parts interpreter positions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#14b8a6] hover:bg-[#0f9a8d] text-black font-semibold rounded-xl text-lg transition-all duration-200 shadow-xl shadow-teal-500/20"
            >
              Request a Demo →
            </Link>

            <Link
              href="#live-demo"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl text-lg transition-all duration-200 backdrop-blur-sm"
            >
              Try Interactive Demo
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}