"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, TrendingDown, Wallet, BarChart3, PieChart, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cryptoAssets = [
  { name: "Solana", symbol: "SOL", amount: "$45,230.00", change: "+12.5%", positive: true, icon: "◎" },
  { name: "Ethereum", symbol: "ETH", amount: "$23,450.00", change: "+8.3%", positive: true, icon: "Ξ" },
  { name: "Bitcoin", symbol: "BTC", amount: "$67,890.00", change: "-2.1%", positive: false, icon: "₿" },
  { name: "Bonk", symbol: "BONK", amount: "$12,340.00", change: "+45.2%", positive: true, icon: "🐕" },
];

const stats = [
  { label: "Total Value", value: "$148,910", icon: Wallet },
  { label: "24h Change", value: "+$12,450", icon: Activity },
  { label: "Assets", value: "12", icon: PieChart },
  { label: "Profit", value: "+23.4%", icon: BarChart3 },
];

export default function PortfolioSection3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for the cards
      gsap.to(".portfolio-card", {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Stats counter animation
      gsap.to(".stat-card", {
        y: -20,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Asset rows stagger
      gsap.fromTo(
        ".asset-row",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".assets-container",
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
      id="portfolio"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            Portfolio Management
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Track Your
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Wealth
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time portfolio tracking with advanced analytics and insights
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Portfolio Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="portfolio-card group relative p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative">
              <h3 className="text-2xl font-bold mb-6">Portfolio Performance</h3>

              {/* Fake Chart */}
              <div className="relative h-48 mb-6">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 120 Q 50 100 100 80 T 200 60 T 300 40 T 400 20"
                    fill="none"
                    stroke="url(#lineGradient2)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 120 Q 50 100 100 80 T 200 60 T 300 40 T 400 20 L 400 150 L 0 150 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </svg>

                {/* Chart Points */}
                {[
                  { x: "25%", y: "53%", value: "$120K" },
                  { x: "50%", y: "40%", value: "$135K" },
                  { x: "75%", y: "27%", value: "$142K" },
                  { x: "100%", y: "13%", value: "$149K" },
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.5 + i * 0.2 }}
                    className="absolute w-3 h-3 bg-blue-400 rounded-full border-2 border-white"
                    style={{ left: point.x, top: point.y, transform: "translate(-50%, -50%)" }}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Total Portfolio Value</p>
                  <p className="text-3xl font-bold">$148,910.00</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">+23.4%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Assets List Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="portfolio-card assets-container group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Your Assets</h3>
                <button className="text-blue-400 text-sm hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {cryptoAssets.map((asset, index) => (
                  <motion.div
                    key={asset.symbol}
                    className="asset-row group/item flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center text-2xl">
                        {asset.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{asset.name}</p>
                        <p className="text-gray-400 text-sm">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{asset.amount}</p>
                      <div
                        className={`flex items-center gap-1 text-sm ${
                          asset.positive ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {asset.positive ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {asset.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
