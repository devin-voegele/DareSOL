"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const locations = [
  { id: "cape", name: "Cape Verde", x: "42%", y: "45%", flag: "🇨🇻" },
  { id: "croatia", name: "Croatia", x: "52%", y: "35%", flag: "🇭🇷" },
  { id: "cameroon", name: "Cameroon", x: "35%", y: "60%", flag: "🇨🇲" },
  { id: "chile", name: "Chile", x: "68%", y: "45%", flag: "🇨🇱" },
  { id: "cambodia", name: "Cambodia", x: "62%", y: "60%", flag: "🇰🇭" },
];

export default function GlobalTransfersSection() {
  return (
    <section id="transfers" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-cyan-400 text-sm mb-4">Digital Transfers</p>
        <h2 className="text-4xl sm:text-5xl font-light mb-4">Your transfers just got global</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Send and receive money seamlessly across the globe with ease and convenience.
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Background Map */}
          <div className="relative h-[500px] bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Animated connection lines connecting to center */}
              <motion.path
                d="M 42% 45% Q 50% 50% 50% 50%"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.path
                d="M 52% 35% Q 50% 50% 50% 50%"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.path
                d="M 35% 60% Q 50% 50% 50% 50%"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.path
                d="M 68% 45% Q 50% 50% 50% 50%"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.path
                d="M 62% 60% Q 50% 50% 50% 50%"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatDelay: 1 }}
              />
            </svg>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="absolute"
                style={{ left: location.x, top: location.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="relative group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-lg shadow-lg border-2 border-white/20">
                    {location.flag}
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {location.name}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Central Hub */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
