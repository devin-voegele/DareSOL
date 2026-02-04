"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, Clock, DollarSign, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const transferFeatures = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send crypto globally in under 2 seconds",
    value: "<2s",
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Industry-leading transaction costs",
    value: "0.01%",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connected to 150+ countries",
    value: "150+",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Trade and transfer anytime",
    value: "24/7",
  },
];

export default function GlobalSection3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for content
      gsap.to(".global-content", {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Feature cards stagger
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transfers"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 global-content"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            Global Transfers
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Your Transfers
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Just Got Global
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Send and receive crypto seamlessly across the globe with lightning-fast speed
          </p>
        </motion.div>

        {/* Globe and Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Globe Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] order-2 lg:order-1 flex items-center justify-center"
          >
            {/* Simple Globe Illustration */}
            <div className="relative w-80 h-80">
              {/* Globe circle */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30" />
              <div className="absolute inset-4 rounded-full border border-blue-500/20" />
              <div className="absolute inset-8 rounded-full border border-blue-500/10" />
              
              {/* Horizontal lines */}
              <div className="absolute top-1/4 left-0 right-0 h-px bg-blue-500/20" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500/30" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-blue-500/20" />
              
              {/* Vertical arc */}
              <div className="absolute inset-0 rounded-full border-l-2 border-r-2 border-blue-500/20 scale-x-50" />
              
              {/* Center glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-full" />
              
              {/* Animated pulse */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-blue-500/10"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
              className="absolute top-10 left-0 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <p className="text-blue-400 text-2xl font-bold">$2.4B+</p>
              <p className="text-gray-400 text-sm">Daily Volume</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="absolute bottom-20 right-0 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <p className="text-blue-300 text-2xl font-bold">1M+</p>
              <p className="text-gray-400 text-sm">Active Users</p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="features-grid grid grid-cols-2 gap-4 order-1 lg:order-2">
            {transferFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <p className="text-3xl font-bold text-white mb-2">{feature.value}</p>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold text-lg"
          >
            Start Transferring
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
