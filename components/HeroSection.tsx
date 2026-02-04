"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Left Side - Text Content */}
      <motion.div className="relative z-10" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Revolutionizing future steps
            <br />
            in <span className="text-cyan-400">crypto</span> and <span className="text-cyan-400">fintech</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Leveraging innovative solutions that will take you to the next level in digital finance.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Small Card at Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 max-w-xs border border-white/10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full" />
            <div>
              <div className="text-sm font-medium">CryptoFintech</div>
              <div className="text-xs text-gray-400">Nasdalet</div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-400">Oliver Smith</div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full opacity-50" />
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Cards */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Top Card - Track Digital Payments */}
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 border border-blue-500/20 shadow-2xl"
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="text-4xl font-light mb-2">
              Digital
              <br />
              Payments
            </h2>
            <p className="text-blue-100 text-sm mb-6">
              Master your finances. Seamlessly monitor and manage digital payment transactions.
            </p>

            {/* Transaction List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">L</span>
                  </div>
                  <span>Litecoin</span>
                </div>
                <span className="font-medium">$4,103.23</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">E</span>
                  </div>
                  <span>Ethereum</span>
                </div>
                <span className="font-medium">$1,232.23</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">D</span>
                  </div>
                  <span>Dogecoin</span>
                </div>
                <span className="font-medium">$4,970.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">S</span>
                  </div>
                  <span>Strike fee coin</span>
                </div>
                <span className="font-medium">$7,034.34</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm font-medium mb-1">Monitor Digital Transactions</div>
              <p className="text-xs text-blue-100">
                Easily track and manage your financial transactions with enhanced security across multiple blockchains.
              </p>
            </div>
          </motion.div>

          {/* Bottom Card - Secure Digital Transactions */}
          <motion.div 
            className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl"
            whileHover={{ 
              scale: 1.02, 
              rotateY: -5,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Secure Digital Transactions</h3>
            <p className="text-sm text-gray-400 text-center">
              Efficiently track, manage, and protect all your financial transactions across multiple blockchains.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
