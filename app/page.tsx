// "use client";

// import Image from "next/image";
// import InteractiveDemo from "@/components/InteractiveDemo";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen font-sans bg-[#0a0a0c]">
//       {/* Navigation */}
//       <header className="sticky top-0 z-50 w-full border-b border-[#1a3a36] bg-[#0a0a0c]/80 backdrop-blur-md">
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <motion.div
//               whileHover={{ rotate: 90 }}
//               transition={{ duration: 0.3 }}
//               className="w-8 h-8 rounded-lg bg-[#1fddcb] flex items-center justify-center"
//             >
//               <span className="text-black font-bold font-heading text-xs">
//                 PS
//               </span>
//             </motion.div>
//             <span className="text-sm font-bold font-heading text-white tracking-tight">
//               <div>Part Suite</div>
//               <div className="text-xs text-[#666] font-normal">
//                 BY OMNISUITEAL
//               </div>
//             </span>
//           </Link>
//           <nav className="hidden md:flex gap-8 text-sm font-medium text-[#999]">
//             <Link
//               href="#platform"
//               className="hover:text-white transition-colors"
//             >
//               Platform
//             </Link>
//             <Link
//               href="#how-it-works"
//               className="hover:text-white transition-colors"
//             >
//               How It Works
//             </Link>
//             <Link
//               href="#live-demo"
//               className="hover:text-white transition-colors"
//             >
//               Live Demo
//             </Link>
//             <Link
//               href="#ai-engine"
//               className="hover:text-white transition-colors"
//             >
//               AI Engine
//             </Link>
//             <Link
//               href="#benefits"
//               className="hover:text-white transition-colors"
//             >
//               Benefits
//             </Link>
//             <Link
//               href="#contact"
//               className="hover:text-white transition-colors"
//             >
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="#contact"
//                 className="bg-[#1fddcb] text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#1ec4b1] transition-colors shadow-lg"
//               >
//                 Request Demo
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative pt-32 pb-32 overflow-hidden bg-[#0a0a0c]">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(31,221,203,0.08)] via-transparent to-transparent"></div>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="container mx-auto px-4 relative z-10 text-center max-w-4xl"
//           >
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1fddcb]/30 bg-[#1fddcb]/10 text-[#1fddcb] text-xs font-semibold mb-8"
//             >
//               <span className="w-2 h-2 rounded-full bg-[#1fddcb] animate-pulse"></span>
//               AI-POWERED PLATFORM
//             </motion.div>
//             <motion.h1
//               variants={fadeUp}
//               className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
//             >
//               The AI That <span className="text-[#1fddcb]">Replaces</span>
//               <br />
//               Your Parts <span className="text-[#1fddcb]">Interpreter</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeUp}
//               className="text-lg text-[#999] mb-10 max-w-2xl mx-auto leading-relaxed"
//             >
//               Part Suite is the fully integrated AI parts wholesale and retail
//               platform that connects directly to your existing dealer management
//               system — eliminating the need for manual parts interpreter
//               positions within dealerships and OEMs.
//             </motion.p>
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             >
//               <Link
//                 href="#live-demo"
//                 className="px-8 py-3 bg-[#1fddcb] hover:bg-[#1ec4b1] text-black font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(31,221,203,0.3)] hover:shadow-[0_0_30px_rgba(31,221,203,0.5)]"
//               >
//                 Try Interactive Demo
//               </Link>
//               <Link
//                 href="#contact"
//                 className="px-8 py-3 bg-transparent hover:bg-[#1a1a1a] text-white font-semibold rounded-lg border border-[#1a3a36] transition-all"
//               >
//                 Request a Demo →
//               </Link>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 border-y border-[#1a3a36] bg-[#0f1514]">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               variants={staggerContainer}
//               className="grid grid-cols-2 md:grid-cols-4 gap-8"
//             >
//               {[
//                 { label: "FASTER ORDERING", value: "90%" },
//                 { label: "DMS INTEGRATION", value: "100%" },
//                 { label: "MANUAL INTERPRETERS NEEDED", value: "0" },
//                 { label: "AI AVAILABILITY", value: "24/7" },
//               ].map((stat, i) => (
//                 <motion.div variants={fadeUp} key={i} className="text-center">
//                   <div className="text-5xl font-bold text-[#1fddcb] mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-xs font-medium text-[#888] uppercase tracking-widest">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Platform Section */}
//         <section id="platform" className="py-24 bg-[#0a0a0c]">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className="text-center mb-20"
//             >
//               <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">
//                 THE PLATFORM
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
//                 A Fully Integrated AI Parts
//                 <br />
//                 <span className="text-[#1fddcb]">
//                   Wholesale & Retail Platform
//                 </span>
//               </h2>
//               <p className="text-lg text-[#999] max-w-2xl mx-auto mt-6">
//                 Part Suite by OmniSuiteAI.com transforms the way dealerships and
//                 OEMs handle parts ordering. Our AI engine acts as your
//                 intelligent parts interpreter — scanning, identifying, matching,
//                 and ordering parts with zero human intervention required.
//               </p>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={staggerContainer}
//               className="grid md:grid-cols-3 gap-8 mt-16"
//             >
//               {[
//                 {
//                   icon: "📱",
//                   title: "AI Parts Interpreter",
//                   desc: "Our AI engine instantly recognises product codes, suggests quantities based on historical ordering patterns, recommends complementary bundles (such as basecoats with activators), and flags unusual requests — all in real time. This completely replaces the manual parts interpreter role, saving dealerships significant labour costs while improving accuracy.",
//                 },
//                 {
//                   icon: "🛒",
//                   title: "Wholesale Ordering",
//                   desc: "Streamlined bulk ordering with AI-powered product matching, automated reorder suggestions, and direct DMS integration. Priority and stock orders flow seamlessly through approval workflows to distribution centres.",
//                 },
//                 {
//                   icon: "🏪",
//                   title: "Retail Integration",
//                   desc: "Empower panel and body shop partners with a simple scan-and-order mobile experience. Partners access your catalogue, place orders, and track deliveries — all connected to your existing DMS inventory in real time.",
//                 },
//               ].map((feature, i) => (
//                 <motion.div
//                   variants={fadeUp}
//                   whileHover={{ y: -8, transition: { duration: 0.2 } }}
//                   key={i}
//                   className="bg-[#1a1a1a] border border-[#1a3a36] p-8 rounded-2xl hover:border-[#1fddcb]/30 transition-all"
//                 >
//                   <div className="text-4xl mb-4">{feature.icon}</div>
//                   <h3 className="text-xl font-bold text-white mb-3">
//                     {feature.title}
//                   </h3>
//                   <p className="text-[#999] leading-relaxed text-sm">
//                     {feature.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section
//           id="how-it-works"
//           className="py-24 bg-[#0f1514] border-y border-[#1a3a36]"
//         >
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className="text-center mb-20"
//             >
//               <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">
//                 HOW IT WORKS
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
//                 From Scan to Shipment in{" "}
//                 <span className="text-[#1fddcb]">Four Steps</span>
//               </h2>
//               <p className="text-lg text-[#999] max-w-2xl mx-auto mt-6">
//                 Part Suite replaces the entire manual parts interpretation
//                 workflow with an intelligent, automated pipeline that integrates
//                 directly with your dealer management system.
//               </p>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={staggerContainer}
//               className="grid md:grid-cols-4 gap-6 mt-16"
//             >
//               {[
//                 {
//                   step: "01",
//                   title: "Secure Login",
//                   desc: "Biometric authentication with fingerprint or face ID, combined with role-based access technology that restricts access to authorised on-site locations — ensuring security and order integrity.",
//                 },
//                 {
//                   step: "02",
//                   title: "Snap & Order",
//                   desc: "Point your phone camera at any product label. The AI instantly recognises the code, pulls product details, suggests quantities based on past orders, and recommends complementary items.",
//                 },
//                 {
//                   step: "03",
//                   title: "DMS Integration",
//                   desc: "Orders sync seamlessly with your dealer management system — pulling real-time inventory, customer data, and job details to create pick tickets automatically.",
//                 },
//                 {
//                   step: "04",
//                   title: "Order Fulfilled",
//                   desc: "Approved orders generate pick tickets for distribution centres upon approval. Orders flow directly into your established supply chain. Priority or stock — no additional steps or partners.",
//                 },
//               ].map((item, i) => (
//                 <motion.div
//                   variants={fadeUp}
//                   key={i}
//                   className="bg-[#1a1a1a] border border-[#1a3a36] p-8 rounded-xl text-center hover:border-[#1fddcb]/30 transition-all"
//                 >
//                   <div className="text-5xl font-bold text-[#1fddcb] mb-4 opacity-50">
//                     {item.step}
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-[#999] text-sm leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Interactive Demo Section */}
//         <section id="live-demo" className="py-24 bg-[#0a0a0c]">
//           <div className="container mx-auto px-4 relative z-10">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className="text-center mb-16 max-w-3xl mx-auto"
//             >
//               <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">
//                 INTERACTIVE DEMO
//               </div>
//               <h2 className="text-5xl font-bold font-heading text-white mb-4">
//                 Experience the{" "}
//                 <span className="text-[#1fddcb]">AI in Action</span>
//               </h2>
//               <p className="text-lg text-[#999]">
//                 Walk through the complete Part Suite workflow — from scanning a
//                 product code to AI-powered matching, order review, intelligent
//                 override tracking, and data export. Click through each step to
//                 see how the platform eliminates manual parts interpretation.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="max-w-4xl mx-auto"
//             >
//               <InteractiveDemo />
//             </motion.div>
//           </div>
//         </section>

//         {/* DMS Connectivity Section */}
//         <section
//           id="dms"
//           className="py-24 bg-[#0f1514] border-y border-[#1a3a36]"
//         >
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//               >
//                 <div className="relative rounded-2xl overflow-hidden border border-[#1a3a36] bg-[#1a1a1a] aspect-video flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-6xl mb-4">🔗</div>
//                     <p className="text-[#999] font-medium">
//                       DMS Integration Visualization
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={staggerContainer}
//               >
//                 <motion.div variants={fadeUp}>
//                   <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">
//                     DMS CONNECTIVITY
//                   </div>
//                   <h2 className="text-4xl font-bold font-heading text-white mb-2">
//                     Seamless Integration With
//                     <br />
//                     <span className="text-[#1fddcb]">Your DMS</span>
//                   </h2>
//                 </motion.div>
//                 <motion.p
//                   variants={fadeUp}
//                   className="text-lg text-[#999] mt-6 mb-8"
//                 >
//                   Part Suite integrates natively with leading dealer management
//                   systems including eraPower and other compatible platforms used
//                   by automotive dealerships across Australia and beyond. Our
//                   flexible architecture ensures connectivity regardless of your
//                   existing infrastructure.
//                 </motion.p>
//                 <motion.div variants={staggerContainer} className="space-y-6">
//                   {[
//                     {
//                       icon: "⚡",
//                       title: "Real-Time Inventory Sync",
//                       desc: "Live connection to your DMS inventory levels, pricing, and availability data.",
//                     },
//                     {
//                       icon: "👤",
//                       title: "Customer Data Integration",
//                       desc: "Automatically pulls customer information and account records from your DMS.",
//                     },
//                     {
//                       icon: "📋",
//                       title: "Pick Ticket Generation",
//                       desc: "Orders automatically generate pick tickets for distribution centres upon approval.",
//                     },
//                     {
//                       icon: "📊",
//                       title: "Data Export & Analytics",
//                       desc: "Export to CSV, JSON, or Power BI. Push data via webhooks to Zapier, Make, or Power Automate.",
//                     },
//                   ].map((feature, i) => (
//                     <motion.div
//                       variants={fadeUp}
//                       key={i}
//                       className="flex gap-4"
//                     >
//                       <div className="text-2xl">{feature.icon}</div>
//                       <div>
//                         <h4 className="text-white font-bold mb-1">
//                           {feature.title}
//                         </h4>
//                         <p className="text-[#999] text-sm">{feature.desc}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section id="contact" className="py-24 bg-[#0a0a0c]">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//             className="container mx-auto px-4 relative z-10 text-center max-w-3xl"
//           >
//             <motion.h2
//               variants={fadeUp}
//               className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
//             >
//               Ready to Automate Your Parts Department?
//             </motion.h2>
//             <motion.p variants={fadeUp} className="text-xl text-[#999] mb-10">
//               Stop losing sales to misidentified parts and manual bottlenecks.
//               Deploy Part Suite and turn every counter into an expert parts
//               interpreter.
//             </motion.p>
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link
//                   href="#contact"
//                   className="px-8 py-3 bg-[#1fddcb] text-black font-bold rounded-lg transition-all shadow-lg hover:bg-[#1ec4b1]"
//                 >
//                   Book a Technical Demo
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="py-12 bg-[#0f1514] border-t border-[#1a3a36]">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded border border-[#1a3a36] flex items-center justify-center bg-[#1a1a1a]">
//                 <span className="text-[#1fddcb] font-bold text-xs">PS</span>
//               </div>
//               <div>
//                 <span className="text-lg font-bold font-heading text-white">
//                   Part Suite
//                 </span>
//                 <div className="text-xs text-[#666]">BY OMNISUITEAL</div>
//               </div>
//             </div>
//             <div className="text-sm text-[#888]">
//               &copy; {new Date().getFullYear()} OmniSuiteAI.com. All rights
//               reserved.
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Platform from "@/components/Platform";
import HowItWorks from "@/components/HowItWorks";
import InteractiveDemo from "@/components/InteractiveDemo";
import DMSConnectivity from "@/components/DMSConnectivity";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Compatibility from "@/components/Compatibility";
// j
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0a0a0c]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Platform />
        <HowItWorks />

        {/* Live Demo Section */}
        <section id="live-demo" className="py-24 bg-[#0a0a0c]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="text-xs text-[#1fddcb] font-semibold uppercase tracking-widest mb-4">
                INTERACTIVE DEMO
              </div>
              <h2 className="text-5xl font-bold font-heading text-white mb-4">
                Experience the{" "}
                <span className="text-[#1fddcb]">AI in Action</span>
              </h2>
              <p className="text-lg text-[#999]">
                Walk through the complete workflow from scanning to export.
              </p>
            </div>
            <InteractiveDemo />
          </div>
        </section>
        <DMSConnectivity />
        <Compatibility />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
