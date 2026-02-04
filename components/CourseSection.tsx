"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Code, TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Build a Token",
    description: "Learn the technical foundations of creating tokens on Solana"
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description: "Master pump.fun launches with proven playbooks"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Create viral narratives and engaged communities"
  },
  {
    icon: TrendingUp,
    title: "Scale Virality",
    description: "Understand attention mechanics and growth tactics"
  },
  {
    icon: Shield,
    title: "Avoid Rug Traps",
    description: "Learn security best practices and red flags"
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Move quickly in the fast-paced memecoin ecosystem"
  }
];

const testimonials = [
  {
    quote: "Finally a course that explains how pump.fun actually works. I launched my first token in 3 days.",
    author: "Student, 19"
  },
  {
    quote: "Crypto has no manual but this is as close as it gets for memecoin builders.",
    author: "Student, 21"
  },
  {
    quote: "Clear, practical and not cringe. Respect.",
    author: "Student, 18"
  }
];

export default function CourseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">New Course Available</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pump.fun Memecoin
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Creation Course
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A practical, no-fluff builder course for young traders who want to learn how to create, 
            launch, and scale memecoins using Solana and pump.fun.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Course Preview */}
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 md:p-12 mb-16 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">What You'll Learn</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Complete technical walkthrough of token creation on Solana</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Step-by-step pump.fun launch strategies with real examples</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Community building tactics for sustainable growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                  <span>Risk management and security best practices</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-black/50 rounded-xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                  </div>
                  <p className="text-gray-400">Course Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Students Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-500">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
            Enroll in Course
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Limited spots available • Next cohort starts soon
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
