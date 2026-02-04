"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Check, Zap, TrendingUp, Users, Shield, CreditCard } from "lucide-react";

const features = [
  "Complete memecoin creation strategy",
  "Step-by-step launch guide",
  "Marketing & community building tactics",
  "Tokenomics templates",
  "Social media growth hacks",
  "Pump.fun optimization tips",
];

export default function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleBuyNow = () => {
    window.open("https://buy.stripe.com/6oU9AM1m7b9m6uQ5mY7Re00", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            Limited Time Offer
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Master the Art of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Memecoin Creation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The ultimate guide to launching, marketing, and scaling your own memecoin on Solana
          </p>
        </motion.div>

        {/* Product Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl p-8 border border-white/10">
              {/* PDF Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center">
                    <FileText className="w-16 h-16 text-blue-600 mb-2" />
                    <span className="text-xs font-bold text-blue-600">PDF</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-4">
                Memecoin Master Prompt & Strategy Guide
              </h3>

              <p className="text-gray-400 text-center mb-6">
                Everything you need to create, launch, and market a successful memecoin from scratch.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              {/* Sale Badge */}
              <div className="flex justify-center mb-6">
                <span className="px-4 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                  60% OFF - LIMITED TIME
                </span>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-gray-500 line-through">$24.99</span>
                  <span className="text-5xl font-bold text-white">$9.99</span>
                </div>
                <p className="text-gray-400">One-time payment, instant access</p>
              </div>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Comprehensive PDF Guide</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Proven Marketing Strategies</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Community Building Tactics</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Risk Management Tips</span>
                </div>
              </div>

              {/* Buy Button */}
              <motion.button
                onClick={handleBuyNow}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold text-lg flex items-center justify-center gap-3"
              >
                <CreditCard className="w-5 h-5" />
                Buy Now - $9.99
              </motion.button>

              {/* Direct download link for after purchase */}
              <p className="text-center text-gray-500 text-sm mt-4">
                Already purchased?{" "}
                <a 
                  href="/success" 
                  className="text-blue-400 hover:underline"
                >
                  Download here
                </a>
              </p>

              {/* Payment Info */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure payment via Stripe
                </p>
              </div>

              {/* Guarantee */}
              <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-center text-sm text-gray-300">
                  <span className="text-blue-400 font-semibold">100% Satisfaction Guarantee</span>
                  <br />
                  Not happy? Get a full refund within 7 days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
